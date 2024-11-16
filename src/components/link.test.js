import React from "react";
import { render, screen } from "@testing-library/react";
import { Link } from "./link";
import { BrowserRouter as Router } from "react-router-dom";

describe("Link Component", () => {
  const renderComponent = (props) =>
    render(
      <Router>
        <Link {...props}>Test Link</Link>
      </Router>
    );

  test("renders an external link with the correct attributes", () => {
    renderComponent({ type: "external", url: "https://example.com", className: "external-link" });

    const link = screen.getByRole("link", { name: "Test Link" });

    expect(link).toHaveAttribute("href", "https://example.com");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noreferrer");
    expect(link).toHaveClass("external-link");
  });

  test("renders a phone link with the correct href", () => {
    renderComponent({ type: "phone", url: "123456789", className: "phone-link" });

    const link = screen.getByRole("link", { name: "Test Link" });

    expect(link).toHaveAttribute("href", "tel:123456789");
    expect(link).toHaveClass("phone-link");
  });

  test("renders a mail link with the correct href", () => {
    renderComponent({ type: "mail", url: "test@example.com", className: "mail-link" });

    const link = screen.getByRole("link", { name: "Test Link" });

    expect(link).toHaveAttribute("href", "mailto:test@example.com");
    expect(link).toHaveClass("mail-link");
  });

  test("renders an internal link using React Router", () => {
    renderComponent({ type: "internal", url: "/internal-page", className: "internal-link" });

    const link = screen.getByRole("link", { name: "Test Link" });

    expect(link).toHaveAttribute("href", "/internal-page");
    expect(link).toHaveClass("internal-link");
  });

  test("renders an anchor link with the correct href", () => {
    renderComponent({ type: "anchor", url: "#section1", className: "anchor-link" });

    const link = screen.getByRole("link", { name: "Test Link" });

    expect(link).toHaveAttribute("href", "#section1");
    expect(link).toHaveClass("anchor-link");
  });

  test("renders a default internal link when type is not provided", () => {
    renderComponent({ url: "/default", className: "default-link" });

    const link = screen.getByRole("link", { name: "Test Link" });

    expect(link).toHaveAttribute("href", "/default");
    expect(link).toHaveClass("default-link");
  });
});
