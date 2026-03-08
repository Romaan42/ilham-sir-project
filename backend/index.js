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
// MIDDLEWARES
// -----------------------------
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// -----------------------------
// CORS CONFIG
// -----------------------------
const ALLOWED_ORIGINS = [
  "http://localhost:5173",
  "https://ilham-sir-final.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (ALLOWED_ORIGINS.includes(origin) || origin.endsWith(".vercel.app")) {
        return callback(null, true);
      }

      console.warn("Blocked by CORS:", origin);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  }),
);

// -----------------------------
// DATABASE CONNECTION
// -----------------------------
let isConnected = false;

async function connectToDatabase() {
  if (isConnected) return;

  try {
    const db = await mongoose.connect(process.env.MONGODB_URL);
    isConnected = db.connections[0].readyState;
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB error:", error);
  }
}

app.use(async (req, res, next) => {
  await connectToDatabase();
  next();
});

// -----------------------------
// ROUTES
// -----------------------------

app.get("/", (req, res) => {
  res.send("Welcome to my page");
});

// -----------------------------
// ADD STUDENT
// -----------------------------
app.post("/student", async (req, res) => {
  try {
    const student = new Student({
      ...req.body,
      fee: req.body.fees,
    });

    await student.save();

    res.send({
      success: true,
      message: "Student Registered",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Student add failed",
    });
  }
});

// -----------------------------
// GET STUDENTS
// -----------------------------
app.get("/students-data", async (req, res) => {
  try {
    const students = await Student.find();
    res.send(students);
  } catch (error) {
    res.status(500).send({
      error: "Failed to fetch students",
    });
  }
});

// -----------------------------
// ADMIN REGISTER
// -----------------------------
app.post("/admin-register", async (req, res) => {
  try {
    const { email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      email,
      password: hashedPassword,
    });

    await user.save();

    res.send("Register success");
  } catch (error) {
    res.status(500).send("Register failed");
  }
});

// -----------------------------
// ADMIN LOGIN
// -----------------------------
app.post("/admin-login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        login: false,
        message: "Invalid Admin",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        login: false,
        message: "Incorrect password",
      });
    }

    const token = jwt.sign({ adminId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 2 * 24 * 60 * 60 * 1000,
    });

    res.send({
      adminLogin: true,
      message: "Welcome ILHAM SIR!",
      user,
    });
  } catch (error) {
    res.status(500).send("Login error");
  }
});

// -----------------------------
// AUTH MIDDLEWARE
// -----------------------------
const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      login: false,
      message: "No token",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.adminId);

    next();
  } catch (error) {
    res.status(401).json({
      login: false,
      message: "Invalid token",
    });
  }
};

// -----------------------------
// CHECK LOGIN
// -----------------------------
app.get("/admin-check-login", authMiddleware, (req, res) => {
  res.send({
    adminLogin: true,
    message: "Welcome ILHAM SIR!",
    user: req.user,
  });
});

// -----------------------------
// LOGOUT
// -----------------------------
app.get("/admin-logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });

  res.send({
    adminLogin: false,
    message: "Logged out",
  });
});

// -----------------------------
// DELETE STUDENT
// -----------------------------
app.delete("/student/:id", async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);

    const students = await Student.find();

    res.send(students);
  } catch (error) {
    res.status(500).send("Delete failed");
  }
});

// -----------------------------
module.exports = app;
