import React from "react"
import Sidebar from "./Sidebar"
import Header from "./Header"

function Overview() {
  return React.createElement(
    "div",
    { className: "app-container" },
    React.createElement(Sidebar, {}),
    React.createElement(
      "div",
      { className: "main-content" },
      React.createElement(Header, { title: "Manager space" }),
      React.createElement(
        "div",
        { className: "overview-content" },
        React.createElement(
          "div",
          { className: "back-link" },
          React.createElement("i", { className: "fas fa-arrow-left" }),
        ),
        React.createElement(
          "div",
          { className: "alert alert-warning" },
          React.createElement("i", { className: "fas fa-exclamation-triangle" }),
          "The product is Near expiration: ",
          React.createElement("i", { className: "fas fa-shopping-cart" }),
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
                React.createElement("th", null, "Name"),
                React.createElement("th", null, "Category"),
                React.createElement("th", null, "Quantity"),
                React.createElement("th", null, "Snag"),
              ),
            ),
            React.createElement(
              "tbody",
              null,
              React.createElement(
                "tr",
                null,
                React.createElement("td", null, "Lait Délice 1L"),
                React.createElement("td", null, "Beverages"),
                React.createElement("td", null, "25"),
                React.createElement("td", null, "Near expiration"),
              ),
              React.createElement(
                "tr",
                null,
                React.createElement("td", null, "Fresh Tomatoes"),
                React.createElement("td", null, "Fruits & Vegetables"),
                React.createElement("td", null, "30"),
                React.createElement("td", null, "A few damaged pieces"),
              ),
              React.createElement(
                "tr",
                null,
                React.createElement("td", null, "Eggs (12 pieces)"),
                React.createElement("td", null, "Fresh Products"),
                React.createElement("td", null, "18"),
                React.createElement("td", null, "Cracked shells"),
              ),
              React.createElement(
                "tr",
                null,
                React.createElement("td", null, "Danone Yogurt (x4)"),
                React.createElement("td", null, "Dairy Products"),
                React.createElement("td", null, "28"),
                React.createElement("td", null, "Illegible label"),
              ),
            ),
          ),
        ),
      ),
    ),
  )
}

export default Overview
