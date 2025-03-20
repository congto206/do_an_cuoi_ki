import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import Footer from "../components/Footer";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!name.trim()) newErrors.name = "Please enter your full name!";
    if (!email.trim()) newErrors.email = "Please enter your email!";
    if (!password.trim()) newErrors.password = "Please enter your password!";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Registered successfully!");
      // Xử lý đăng ký ở đây
    }
  };

  return (
    <>
      <NavbarComponent />
      <div className="auth-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              className={`form-control ${errors.name ? "error-input" : ""}`}
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <small className="error-text">{errors.name}</small>}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className={`form-control ${errors.email ? "error-input" : ""}`}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <small className="error-text">{errors.email}</small>}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className={`form-control ${errors.password ? "error-input" : ""}`}
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <small className="error-text">{errors.password}</small>}
          </div>
          <button type="submit" className="btn btn-success btn-block">Register</button>
        </form>
        <p className="text-center">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
      <Footer />

      <style>
        {`
        .auth-container {
          max-width: 400px;
          margin: 50px auto;
          padding: 20px;
          background: white;
          border-radius: 8px;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        .form-group {
          margin-bottom: 15px;
          text-align: left;
        }

        .form-control {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        .error-input {
          border: 2px solid red;
        }

        .error-text {
          color: red;
          font-size: 14px;
        }

        .btn-block {
          width: 100%;
          padding: 10px;
          margin-top: 10px;
        }
        `}
      </style>
    </>
  );
};

export default Register;
