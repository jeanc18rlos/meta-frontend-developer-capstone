import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "./input";

describe("Input Component", () => {
  const mockOnChange = jest.fn();
  const mockOnBlur = jest.fn();

  const renderComponent = (props) =>
    render(
      <Input
        onChange={mockOnChange}
        onBlur={mockOnBlur}
        name="test-input"
        placeholder="Enter text"
        {...props}
      />
    );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders an input field with the correct attributes", () => {
    renderComponent();

    const input = screen.getByPlaceholderText("Enter text");

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");
    expect(input).toHaveAttribute("name", "test-input");
    expect(input).toHaveClass("input");
  });

  test("applies the 'filled' class when 'isEmpty' is true", () => {
    renderComponent({ isEmpty: true });

    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toHaveClass("filled");
  });

  test("calls 'onChange' when input value changes", () => {
    renderComponent();

    const input = screen.getByPlaceholderText("Enter text");

    fireEvent.change(input, { target: { value: "Test value" } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(expect.any(Object));
  });

  test("calls 'onBlur' when the input loses focus", () => {
    renderComponent();

    const input = screen.getByPlaceholderText("Enter text");

    fireEvent.blur(input);

    expect(mockOnBlur).toHaveBeenCalledTimes(1);
    expect(mockOnBlur).toHaveBeenCalledWith(expect.any(Object));
  });

  test("renders with a custom 'type' attribute", () => {
    renderComponent({ type: "email" });

    const input = screen.getByPlaceholderText("Enter text");

    expect(input).toHaveAttribute("type", "email");
  });

  test("renders with a custom 'id' attribute", () => {
    renderComponent({ id: "custom-id" });

    const input = screen.getByPlaceholderText("Enter text");

    expect(input).toHaveAttribute("id", "custom-id");
  });
});
