import React, { useState } from "react";

const Registration = ({ navigateTo }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    if (name.length < 3) {
      errors.name = "Name must be at least 3 characters long";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.email = "Enter a valid email address";
    }

    if (password.length < 6 || !/\d/.test(password)) {
      errors.password = "Password must be at least 6 characters and include a number";
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleRegister = () => {
    if (validateForm()) {
      alert("Registration successful!");
      navigateTo("services");
    }
  };

  return (
    <div className="registration-container">
      <h2>🔐 Register for MyBank</h2>
      <p>Fill in your details to create a secure account.</p>

      <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
      {errors.name && <p className="error-text">{errors.name}</p>}

      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      {errors.email && <p className="error-text">{errors.email}</p>}

      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      {errors.password && <p className="error-text">{errors.password}</p>}

      <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}

      <button className="primary-btn" onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Registration;
