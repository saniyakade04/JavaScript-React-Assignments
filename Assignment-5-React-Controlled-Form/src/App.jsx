import { useState } from "react";
import "./App.css";

function App() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    return (
        <div className="container">

            <div className="form-box">

                <h1>Controlled React Form</h1>

                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Enter your phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <div className="output">

                    <h2>Entered Data</h2>

                    <p>
                        <strong>Name:</strong> {name}
                    </p>

                    <p>
                        <strong>Email:</strong> {email}
                    </p>

                    <p>
                        <strong>Phone:</strong> {phone}
                    </p>

                </div>

            </div>

        </div>
    );
}

export default App;