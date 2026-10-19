import { useState } from "react";
import Student from "./Student";

function App() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    return (
        <div style={{ padding: "20px" }}>

            <h1>Props Example</h1>

            <Student name="Rahul" roll="101" />
            <Student name="Priya" roll="102" />

            <h1>State Example</h1>

            <h2>Count: {count}</h2>

            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>

            <button onClick={() => setCount(count - 1)}>
                Decrease
            </button>

            <button onClick={() => setCount(0)}>
                Reset
            </button>

            <br /><br />

            <input
                type="text"
                onChange={(e) => setText(e.target.value)}
            />

            <p>You typed: {text}</p>

        </div>
    );
}

export default App;