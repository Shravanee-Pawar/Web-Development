const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const students = [
    { id: 1, name: "Rahul", branch: "IT" },
    { id: 2, name: "Priya", branch: "CS" },
    { id: 3, name: "Amit", branch: "EXTC" }
];

app.get("/api/students", (req, res) => {
    res.json(students);
});

app.listen(5000, () =>
    console.log("Backend running on http://localhost:5000")
);