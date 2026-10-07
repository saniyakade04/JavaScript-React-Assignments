import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Form submitted successfully!");
  };

  return (
    <div className="app">

      <div className="form-card">

        <div className="header">
          <div className="icon">📝</div>
          <h1>Student Registration</h1>
          <p>Enter your details below</p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Full Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>

          <div className="input-group">
            <label>Email Address</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <label>Phone Number</label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>

          <button type="submit">
            Submit Details
          </button>

        </form>

        <div className="preview">

          <h2>Live Preview</h2>

          <div className="preview-item">
            <span>Name</span>
            <strong>{formData.name || "Not entered"}</strong>
          </div>

          <div className="preview-item">
            <span>Email</span>
            <strong>{formData.email || "Not entered"}</strong>
          </div>

          <div className="preview-item">
            <span>Phone</span>
            <strong>{formData.phone || "Not entered"}</strong>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;