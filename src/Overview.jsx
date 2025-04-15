import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "./Overview.css";
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
          React.createElement("i", { className: "fas fa-arrow-left" })
        ),
        React.createElement(
          "div",
          { className: "alert alert-warning" },
          React.createElement("i", {
            className: "fas fa-exclamation-triangle",
          }),
          "The product is Near expiration: ",
          React.createElement("i", { className: "fas fa-shopping-cart" })
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
                React.createElement("th", null, "Expiration Date"),
                React.createElement("th", null, "Status")
              )
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
                React.createElement("td", null, "2025-04-20"),
                React.createElement("td", { className: "status near" }, "Near")
              ),
              React.createElement(
                "tr",
                null,
                React.createElement("td", null, "Fresh Tomatoes"),
                React.createElement("td", null, "Fruits & Vegetables"),
                React.createElement("td", null, "30"),
                React.createElement("td", null, "A few damaged pieces"),
                React.createElement("td", null, "2025-05-10"),
                React.createElement(
                  "td",
                  { className: "status in-stock" },
                  "In Stock"
                )
              ),
              React.createElement(
                "tr",
                null,
                React.createElement("td", null, "Eggs (12 pieces)"),
                React.createElement("td", null, "Fresh Products"),
                React.createElement("td", null, "18"),
                React.createElement("td", null, "Cracked shells"),
                React.createElement("td", null, "2025-04-17"),
                React.createElement("td", { className: "status near" }, "Near")
              ),
              React.createElement(
                "tr",
                null,
                React.createElement("td", null, "Danone Yogurt (x4)"),
                React.createElement("td", null, "Dairy Products"),
                React.createElement("td", null, "0"),
                React.createElement("td", null, "Illegible label"),
                React.createElement("td", null, "2025-03-30"),
                React.createElement(
                  "td",
                  { className: "status out-of-stock" },
                  "Out of Stock"
                )
              )
            )
          )
        )
      )
    )
  );
}

export default Overview;
