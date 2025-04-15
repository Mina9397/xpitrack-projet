import React from "react"
import { Link } from "react-router-dom"

function Header({ title }) {
  return React.createElement(
    "header",
    { className: "header" },
    React.createElement("div", { className: "header-title" }, title),
    React.createElement(
      "div",
      { className: "search-bar" },
      React.createElement("input", {
        type: "text",
        placeholder: "Search here",
      }),
      React.createElement("button", null, React.createElement("i", { className: "fas fa-search" })),
    ),
    React.createElement(
      "div",
      { className: "user-profile" },
      React.createElement(
        "div",
        { className: "notification-icon" },
        React.createElement("i", { className: "fas fa-bell" }),
        React.createElement("span", { className: "notification-badge" }, "3"),
      ),
      React.createElement(
        Link,
        { to: "/profile" },
        React.createElement("img", {
          src: "/images/avatar.jpg",
          alt: "User Avatar",
          className: "avatar",
        }),
      ),
    ),
  )
}

export default Header
