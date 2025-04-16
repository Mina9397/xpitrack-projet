import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function CreateAccount() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Création de compte avec:", { name, surname, email, password, agreeTerms });
    navigate("/Dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-sidebar">
        <div className="logo-container">
          <img src="/images/xpitrack-logo.png" alt="XPITrack Logo" className="logo" />
        </div>
      </div>
      <div className="login-content">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1 className="login-title">Create your employees account</h1>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Write you name here"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="surname">Surname</label>
              <input
                type="text"
                id="surname"
                placeholder="Write you surname here"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Write you email address here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Write you password here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="terms-agreement">
            <input
              type="checkbox"
              id="terms"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              required
            />
            <label htmlFor="terms">I agree to the terms of Service and Privacy Policy</label>
          </div>
          <button className="login-button" type="submit">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;