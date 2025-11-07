const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  fatherName: { type: String, required: true },
  phone: Number,
  dob: String,
  gender: { type: String, enum: ["male", "female"], required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  course: { type: String, required: true },
  enrlDate: { type: String, required: true },
  fee: { type: String, default: "pending" },
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
