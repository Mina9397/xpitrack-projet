import React from "react"
import Sidebar from "./Sidebar"
import Header from "./Header"

function Reports() {
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
        { className: "reports-content" },
        React.createElement(
          "div",
          { className: "back-link" },
          React.createElement("i", { className: "fas fa-arrow-left" }),
        ),
        React.createElement(
          "h2",
          { className: "page-title" },
          "Generation & Visualization Reports / Configuring notifications",
        ),
        React.createElement(
          "div",
          { className: "reports-container" },
          React.createElement(
            "div",
            { className: "report-section" },
            React.createElement("h3", { className: "section-title" }, "Generation & Visualization Reports"),
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement("label", null, "REPORT TYPE"),
              React.createElement("select", null, React.createElement("option", null, "stock")),
            ),
            React.createElement(
              "div",
              { className: "filter-section" },
              React.createElement("h4", null, "FILTER"),
              React.createElement(
                "div",
                { className: "form-row" },
                React.createElement(
                  "div",
                  { className: "form-group" },
                  React.createElement("label", null, "CATEGORY"),
                  React.createElement("select", null, React.createElement("option", null, "Drinks")),
                ),
                React.createElement(
                  "div",
                  { className: "form-group" },
                  React.createElement("label", null, "PRODUCT"),
                  React.createElement("select", null, React.createElement("option", null, "Cake")),
                ),
              ),
            ),
            React.createElement(
              "div",
              { className: "period-section" },
              React.createElement("h4", null, "PERIOD"),
              React.createElement(
                "div",
                { className: "form-row" },
                React.createElement(
                  "div",
                  { className: "form-group" },
                  React.createElement("label", null, "start date"),
                  React.createElement("input", { type: "date" }),
                ),
                React.createElement(
                  "div",
                  { className: "form-group" },
                  React.createElement("label", null, "end date"),
                  React.createElement("input", { type: "date" }),
                ),
              ),
            ),
            React.createElement("button", { className: "btn btn-primary btn-block" }, "GENERATE REPORT"),
          ),
          React.createElement(
            "div",
            { className: "alert-section" },
            React.createElement("h3", { className: "section-title" }, "Alert Settings"),
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement("label", null, "SELECTED PRODUCT"),
              React.createElement("input", { type: "text", value: "Milk", readOnly: true }),
            ),
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement("label", null, "Minimum Threshold:"),
              React.createElement("input", { type: "number", value: "20" }),
            ),
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement("label", null, "EXPIRATION:"),
              React.createElement("input", { type: "text", value: "5 DAYS" }),
            ),
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement("label", null, "Notify:"),
              React.createElement(
                "div",
                { className: "checkbox-group" },
                React.createElement(
                  "div",
                  { className: "checkbox" },
                  React.createElement("input", { type: "checkbox", id: "stock-manager", checked: true }),
                  React.createElement("label", { htmlFor: "stock-manager" }, "Stock Manager"),
                ),
                React.createElement(
                  "div",
                  { className: "checkbox" },
                  React.createElement("input", { type: "checkbox", id: "manager", checked: true }),
                  React.createElement("label", { htmlFor: "manager" }, "Manager"),
                ),
              ),
            ),
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement("label", null, "Method:"),
              React.createElement(
                "div",
                { className: "checkbox-group" },
                React.createElement(
                  "div",
                  { className: "checkbox" },
                  React.createElement("input", { type: "checkbox", id: "email", checked: true }),
                  React.createElement("label", { htmlFor: "email" }, "Email"),
                ),
                React.createElement(
                  "div",
                  { className: "checkbox" },
                  React.createElement("input", { type: "checkbox", id: "in-app", checked: true }),
                  React.createElement("label", { htmlFor: "in-app" }, "In-App notification"),
                ),
              ),
            ),
            React.createElement("button", { className: "btn btn-primary btn-block" }, "SAVE ALERT"),
          ),
        ),
        React.createElement(
          "div",
          { className: "export-section" },
          React.createElement("button", { className: "btn btn-secondary" }, "Export pdf"),
        ),
      ),
    ),
  )
}

export default Reports
