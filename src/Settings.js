import React from "react"
import Sidebar from "./Sidebar"
import Header from "./Header"

function Settings() {
  return React.createElement(
    "div",
    { className: "app-container" },
    React.createElement(Sidebar, {}),
    React.createElement(
      "div",
      { className: "main-content" },
      React.createElement(Header, { title: "Admin service" }),
      React.createElement(
        "div",
        { className: "settings-content" },
        React.createElement(
          "div",
          { className: "back-link" },
          React.createElement("i", { className: "fas fa-arrow-left" }),
        ),
        React.createElement("h2", { className: "page-title" }, "Profile"),
        React.createElement(
          "div",
          { className: "profile-info" },
          React.createElement("div", { className: "profile-avatar" }),
          React.createElement(
            "div",
            { className: "profile-details" },
            React.createElement("h3", null, "MAJED KH"),
            React.createElement("p", null, "majed.k@gmail.com"),
            React.createElement("p", { className: "role" }, "ADMIN"),
          ),
          React.createElement("button", { className: "btn btn-primary" }, "Add User"),
        ),
        React.createElement(
          "div",
          { className: "settings-section" },
          React.createElement(
            "h3",
            { className: "section-title settings-title" },
            React.createElement("i", { className: "fas fa-cog" }),
            "settings",
          ),
          React.createElement(
            "div",
            { className: "settings-group" },
            React.createElement(
              "h4",
              { className: "settings-group-title" },
              React.createElement("i", { className: "fas fa-bell" }),
              "Notifications",
            ),
            React.createElement(
              "div",
              { className: "settings-option" },
              React.createElement(
                "div",
                { className: "option-label" },
                "None",
                React.createElement("p", { className: "option-description" }, "turn-off notifications"),
              ),
              React.createElement(
                "label",
                { className: "switch" },
                React.createElement("input", { type: "checkbox" }),
                React.createElement("span", { className: "slider" }),
              ),
            ),
            React.createElement(
              "div",
              { className: "settings-option" },
              React.createElement(
                "div",
                { className: "option-label" },
                "In-app",
                React.createElement("p", { className: "option-description" }, "turn-on notifications"),
              ),
              React.createElement(
                "label",
                { className: "switch" },
                React.createElement("input", { type: "checkbox", checked: true }),
                React.createElement("span", { className: "slider" }),
              ),
            ),
          ),
          React.createElement(
            "div",
            { className: "settings-group" },
            React.createElement(
              "h4",
              { className: "settings-group-title" },
              React.createElement("i", { className: "fas fa-eye" }),
              "Visibility",
            ),
            React.createElement(
              "div",
              { className: "settings-option" },
              React.createElement(
                "div",
                { className: "option-label" },
                "territory visibility settings",
                React.createElement("i", { className: "fas fa-info-circle" }),
              ),
            ),
            React.createElement(
              "div",
              { className: "radio-group" },
              React.createElement(
                "div",
                { className: "radio-option" },
                React.createElement("input", { type: "radio", id: "only-me", name: "visibility", checked: true }),
                React.createElement("label", { htmlFor: "only-me" }, "Only me"),
              ),
              React.createElement(
                "div",
                { className: "radio-option" },
                React.createElement("input", { type: "radio", id: "users", name: "visibility" }),
                React.createElement("label", { htmlFor: "users" }, "Users"),
              ),
              React.createElement(
                "div",
                { className: "radio-option" },
                React.createElement("input", { type: "radio", id: "all", name: "visibility" }),
                React.createElement("label", { htmlFor: "all" }, "ALL"),
              ),
            ),
          ),
          React.createElement(
            "div",
            { className: "settings-group" },
            React.createElement(
              "h4",
              { className: "settings-group-title" },
              React.createElement("i", { className: "fas fa-lock" }),
              "Change PassWord",
            ),
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement("label", null, "Current password"),
              React.createElement("input", { type: "password", placeholder: "Value" }),
            ),
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement("label", null, "New password"),
              React.createElement("input", { type: "password", placeholder: "Value" }),
            ),
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement("label", null, "Confirm password"),
              React.createElement("input", { type: "password", placeholder: "Value" }),
            ),
          ),
        ),
      ),
    ),
  )
}

export default Settings
