import { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/students")
            .then((res) => setStudents(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <h1>Student List</h1>

            {students.map((student) => (
                <p key={student.id}>
                    {student.id}. {student.name} - {student.branch}
                </p>
            ))}
        </div>
    );
}

export default App;