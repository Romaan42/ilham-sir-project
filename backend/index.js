const express = require("express");
const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const Student = require("./models/students");
const User = require("./models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authMiddleware = require("./auth/authMiddleWare");
const cookieParser = require("cookie-parser");

require("dotenv").config();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    secure: false,
  })
);

app.get("/", (req, res) => {
  res.send("welcome to my page");
});

app.post("/student", async (req, res) => {
  try {
    // const existStudent = await Student.find({
    //   name: req.body.name,
    //   // fatherName: req.body.fatherName,
    // });

    // if (
    //   existStudent.name === req.body.name &&
    //   existStudent.fatherName === req.body.fatherName
    // )
    //   return res.json({
    //     success: false,
    //     message: "This Student is already exists",
    //   });

    const student = new Student(req.body);
    await student.save();

    res.send({ success: true, message: "Student Registered" });
  } catch (error) {
    res.send({ success: false, message: "Student added failed" });
  }
});

app.get("/students", async (req, res) => {
  const students = await Student.find();
  if (students) res.send(students);
});

app.post("/admin-register", async (req, res) => {
  const { email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10); //hashing the password

  const user = await User({ email, password: hashedPassword });
  await user.save();
  console.log(req.body);
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
        .json({ login: false, message: "Password is incorreact" });
    }

    const token = jwt.sign(
      {
        adminId: user._id,
        email: user.email,
        password: user.password,
      },
      process.env.JWT_SECRET
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 2 * 24 * 60 * 60 * 1000,
    });

    res.send({ adminLogin: true, message: "Welcome ILHAM SIR!", user: user });
  } catch (error) {
    res.send("Some error occured");
  }
});

app.get("/admin-check-login", authMiddleware, (req, res) => {
  const user = req.user;
  res.send({ adminLogin: true, message: "Welcome ILHAM SIR!", user: user });
});

app.get("/admin-logout", (req, res) => {
  res.clearCookie("token");
  res.send({ adminLogin: false, message: "Admin logged out successfully" });
});

app.delete("/student/:id", async (req, res) => {
  const studentId = req.params.id;

  await Student.findByIdAndDelete(studentId);
  const students = await Student.find();
  if (students) return res.send(students);
});

mongoose.connect(process.env.MONGO_URL).then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server is running on http://localhost:" + process.env.PORT);
  });
});
