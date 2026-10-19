const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

// 1. Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/collegeDB")
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

// 2. Schema and Model
const studentSchema = new mongoose.Schema({
    name: String,
    roll: Number,
    branch: String
});

const Student = mongoose.model("Student", studentSchema);

// 3. Add a student
app.post("/add", async (req, res) => {
    const s = new Student(req.body);
    await s.save();
    res.send("Student Added");
});

// 4. Show all students
app.get("/students", async (req, res) => {
    const data = await Student.find();
    res.json(data);
});
app.get("/", (req, res) => {
    res.send("Welcome to Student Management App!");
});
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});