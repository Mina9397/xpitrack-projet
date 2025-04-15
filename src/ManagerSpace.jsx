import React from "react"
import Sidebar from "./Sidebar"
import Header from "./Header"

function ManagerSpace() {
  return React.createElement(
    "div",
    { className: "app-container" },
    React.createElement(Sidebar, null),
    React.createElement(
      "div",
      { className: "main-content" },
      React.createElement(Header, { title: "Manager space" }),
      React.createElement(
        "div",
        { className: "manager-content" },
        React.createElement(
          "div",
          { className: "alerts-container" },
          React.createElement(
            "div",
            { className: "alert alert-danger" },
            React.createElement(
              "div",
              { className: "alert-content" },
              React.createElement("strong", null, '"Chicken"'),
              " is out of stock. Restock immediately!",
            ),
          ),
          React.createElement(
            "div",
            { className: "alert alert-warning" },
            React.createElement(
              "div",
              { className: "alert-content" },
              React.createElement("strong", null, '"Milk"'),
              " will expire in 3 days. Consider discounting it!",
            ),
          ),
          React.createElement(
            "div",
            { className: "alert alert-success" },
            React.createElement(
              "div",
              { className: "alert-content" },
              React.createElement("strong", null, '"Rice"'),
              " has only 5 units left.",
            ),
          ),
        ),
        React.createElement(
          "div",
          { className: "legend" },
          React.createElement(
            "div",
            { className: "legend-item" },
            React.createElement("span", { className: "legend-color legend-red" }),
            "Out of stock",
          ),
          React.createElement(
            "div",
            { className: "legend-item" },
            React.createElement("span", { className: "legend-color legend-yellow" }),
            "Near Expiry",
          ),
          React.createElement(
            "div",
            { className: "legend-item" },
            React.createElement("span", { className: "legend-color legend-green" }),
            "Low Stock",
          ),
        ),
        React.createElement(
          "div",
          { className: "inventory-audit" },
          React.createElement("h3", null, "Inventory Audit"),
          React.createElement("p", null, "Perform a physical stock count and update your system."),
          React.createElement("button", { className: "btn btn-primary" }, "Start Audit"),
        ),
      ),
    ),
  )
}

export default ManagerSpace
