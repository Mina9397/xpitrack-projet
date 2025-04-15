import React from "react"
import Sidebar from "./Sidebar"
import Header from "./Header"

function EmployeesList() {
  return React.createElement(
    "div",
    { className: "app-container" },
    React.createElement(Sidebar, null),
    React.createElement(
      "div",
      { className: "main-content" },
      React.createElement(Header, { title: "Admin service" }),
      React.createElement(
        "div",
        { className: "employees-content" },
        React.createElement(
          "div",
          { className: "back-link" },
          React.createElement("i", { className: "fas fa-arrow-left" }),
        ),
        React.createElement("h2", { className: "page-title" }, "Employees"),
        React.createElement("p", { className: "page-description" }, "Here is a list of all employees"),
        React.createElement(
          "div",
          { className: "action-bar" },
          React.createElement("button", { className: "btn btn-primary" }, "Add employee"),
        ),
        React.createElement(
          "div",
          { className: "table-container" },
          React.createElement(
            "table",
            { className: "table" },
            React.createElement(
              "thead",
              null,
              React.createElement(
                "tr",
                null,
                React.createElement("th", null, React.createElement("input", { type: "checkbox" })),
                React.createElement("th", null, "Employee Name"),
                React.createElement("th", null, "Email Address"),
                React.createElement("th", null, "Role"),
                React.createElement("th", null, "Action"),
              ),
            ),
            React.createElement(
              "tbody",
              null,
              React.createElement(
                "tr",
                null,
                React.createElement("td", null, React.createElement("input", { type: "checkbox" })),
                React.createElement(
                  "td",
                  null,
                  React.createElement("img", { src: "/images/avatar.jpg", alt: "User", className: "user-avatar" }),
                  "Lindsey Stroud",
                ),
                React.createElement("td", null, "lindsey.stroud@gmail.com"),
                React.createElement("td", null, "Stock Management"),
                React.createElement(
                  "td",
                  null,
                  React.createElement(
                    "div",
                    { className: "action-buttons" },
                    React.createElement("button", { className: "edit-button" }, "Edit"),
                    React.createElement("button", { className: "delete-button" }, "Delete"),
                  ),
                ),
              ),
              React.createElement(
                "tr",
                null,
                React.createElement("td", null, React.createElement("input", { type: "checkbox" })),
                React.createElement(
                  "td",
                  null,
                  React.createElement("img", { src: "/images/avatar.jpg", alt: "User", className: "user-avatar" }),
                  "Sarah Brown",
                ),
                React.createElement("td", null, "sarah.brown@gmail.com"),
                React.createElement("td", null, "Chef service"),
                React.createElement(
                  "td",
                  null,
                  React.createElement(
                    "div",
                    { className: "action-buttons" },
                    React.createElement("button", { className: "edit-button" }, "Edit"),
                    React.createElement("button", { className: "delete-button" }, "Delete"),
                  ),
                ),
              ),
              React.createElement(
                "tr",
                null,
                React.createElement("td", null, React.createElement("input", { type: "checkbox" })),
                React.createElement(
                  "td",
                  null,
                  React.createElement("img", { src: "/images/avatar.jpg", alt: "User", className: "user-avatar" }),
                  "Michael Owen",
                ),
                React.createElement("td", null, "michael.owen@gmail.com"),
                React.createElement("td", null, "Manager"),
                React.createElement(
                  "td",
                  null,
                  React.createElement(
                    "div",
                    { className: "action-buttons" },
                    React.createElement("button", { className: "edit-button" }, "Edit"),
                    React.createElement("button", { className: "delete-button" }, "Delete"),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    ),
  )
}

export default EmployeesList
