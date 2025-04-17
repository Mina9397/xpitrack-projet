import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "./setting.css";
import axios from "axios";

function Settings() {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    // Sending user data to the backend
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users", // Assuming your backend is running on localhost:5000
        newUser
      );
      console.log("User added:", response.data);
      // Clear form after successful user creation
      setNewUser({ name: "", email: "", password: "" });
    } catch (error) {
      console.error("There was an error adding the user:", error);
    }
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header title="Admin service" />

        <div className="settings-content">
          <div className="back-link">
            <i className="fas fa-arrow-left"></i>
          </div>

          <h2 className="page-title">Add Employee</h2>

          <div className="profile-info">
            <form className="add-user-form" onSubmit={handleAddUser}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={newUser.name}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={newUser.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  required
                />
              </div>
              <div className="form-group">
                <label>Temporary Password</label>
                <input
                  type="password"
                  name="password"
                  value={newUser.password}
                  onChange={handleChange}
                  placeholder="Initial password"
                  required
                />
              </div>
              <button className="btn btn-primary" type="submit">
                Add User
              </button>
            </form>
          </div>

          <div className="settings-section">
            <h3 className="section-title settings-title">
              <i className="fas fa-cog"></i> Settings
            </h3>

            {/* Notification Settings */}
            <div className="settings-group">
              <h4 className="settings-group-title">
                <i className="fas fa-bell"></i> Notifications
              </h4>
              <div className="settings-option">
                <div className="option-label">
                  None
                  <p className="option-description">Turn off notifications</p>
                </div>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="settings-option">
                <div className="option-label">
                  In-app
                  <p className="option-description">Turn on notifications</p>
                </div>
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider"></span>
                </label>
              </div>
            </div>

            {/* Visibility Settings */}
            <div className="settings-group">
              <h4 className="settings-group-title">
                <i className="fas fa-eye"></i> Visibility
              </h4>
              <div className="settings-option">
                <div className="option-label">
                  Territory visibility settings{" "}
                  <i className="fas fa-info-circle"></i>
                </div>
              </div>
              <div className="radio-group">
                <div className="radio-option">
                  <input
                    type="radio"
                    id="only-me"
                    name="visibility"
                    defaultChecked
                  />
                  <label htmlFor="only-me">Only me</label>
                </div>
                <div className="radio-option">
                  <input type="radio" id="users" name="visibility" />
                  <label htmlFor="users">Users</label>
                </div>
                <div className="radio-option">
                  <input type="radio" id="all" name="visibility" />
                  <label htmlFor="all">All</label>
                </div>
              </div>
            </div>

            {/* Change Password */}
            <div className="settings-group">
              <h4 className="settings-group-title">
                <i className="fas fa-lock"></i> Change Password
              </h4>
              <div className="form-group">
                <label>Current password</label>
                <input type="password" placeholder="Value" />
              </div>
              <div className="form-group">
                <label>New password</label>
                <input type="password" placeholder="Value" />
              </div>
              <div className="form-group">
                <label>Confirm password</label>
                <input type="password" placeholder="Value" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
