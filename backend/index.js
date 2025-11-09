const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Student = require("./models/students.js");
const User = require("./models/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require("dotenv").config();

// -----------------------------
// CONSTANTS
// -----------------------------
// Get the frontend URL from environment variables, or use the deployed URL as a fallback.
// IMPORTANT: Ensure this variable is set to 'https://ilham-sir-final.vercel.app' in Vercel.
const FRONTEND_URL =
  process.env.FRONTEND_URL || "https://ilham-sir-final.vercel.app";
const LOCAL_FRONTEND_URL = "http://localhost:5173";
const ALLOWED_ORIGINS = [FRONTEND_URL, LOCAL_FRONTEND_URL];

// -----------------------------
// MIDDLEWARES
// -----------------------------
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Configure CORS properly
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      // Allow requests from specific origins
      if (ALLOWED_ORIGINS.includes(origin)) {
        callback(null, true);
      } else {
        // Log the blocked origin for debugging
        console.warn(`Blocked by CORS: ${origin}`);
        callback(new Error("Not allowed by CORS"), false);
      }
    },
    credentials: true,
    // FIX: Corrected typo from 'orginSuccessStatus' to 'optionsSuccessStatus'
    optionsSuccessStatus: 200,
  })
);

// -----------------------------
// DATABASE CONNECTION
// -----------------------------
async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error);
    process.exit(1);
  }
}

connectToDatabase(); // connect immediately when the app starts

// -----------------------------
// ROUTES
// -----------------------------
app.get("/", (req, res) => {
  res.send("Welcome to my page");
});

app.post("/student", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.send({ success: true, message: "Student Registered" });
  } catch (error) {
    res.send({ success: false, message: "Student add failed" });
  }
});

app.get("/students-data", async (req, res) => {
  try {
    // This route is the one that was being blocked by the CORS error
    const students = await Student.find();
    res.send(students);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch students" });
  }
});

app.post("/admin-register", async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ email, password: hashedPassword });
  await user.save();
  res.send("Register success");
});

app.post("/admin-login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ login: false, message: "Invalid Admin" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ login: false, message: "Incorrect password" });
    }

    const token = jwt.sign(
      { adminId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "2d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      // sameSite: 'none' and secure: true are MANDATORY for cross-site cookie transmission
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: 2 * 24 * 60 * 60 * 1000, // 2 days
    });

    res.send({ adminLogin: true, message: "Welcome ILHAM SIR!", user });
  } catch (error) {
    console.error(error);
    res.status(500).send("Some error occurred");
  }
});

const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token)
    return res
      .status(401)
      .json({ login: false, message: "Not authorized, no token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.adminId);
    next();
  } catch (error) {
    return res.status(401).json({ login: false, message: "Invalid token" });
  }
};

app.get("/admin-check-login", authMiddleware, (req, res) => {
  res.send({ adminLogin: true, message: "Welcome ILHAM SIR!", user: req.user });
});

app.get("/admin-logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  }); // Also clear cookies with the same options they were set with
  res.send({ adminLogin: false, message: "Admin logged out successfully" });
});

app.delete("/student/:id", async (req, res) => {
  const studentId = req.params.id;
  await Student.findByIdAndDelete(studentId);
  const students = await Student.find();
  res.send(students);
});

// -----------------------------
module.exports = app;
