import { useState, useEffect } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

// Home component
function Home() {
    useEffect(() => {
        document.title = "Home Page";
    }, []);

    return <h2>Welcome to Home Page</h2>;
}

// About component
function About() {
    useEffect(() => {
        document.title = "About Page";
    }, []);

    return <h2>This is a React Single Page Application</h2>;
}

// Contact component
function Contact() {
    const [name, setName] = useState("");
    const [msg, setMsg] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        setMsg("Thank you " + name + ", we will contact you!");
    }

    return (
        <div>
            <h2>Contact Us</h2>

            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Your name"
                    onChange={(e) => setName(e.target.value)}
                />

                <button type="submit">Send</button>
            </form>

            <p>{msg}</p>
        </div>
    );
}

// Main component
function App() {
    return (
        <BrowserRouter>
            <nav style={{
                display: "flex",
                gap: "20px",
                padding: "10px",
                background: "#ddd"
            }}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;