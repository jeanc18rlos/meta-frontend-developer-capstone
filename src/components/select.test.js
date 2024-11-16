import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Select } from "./select";

describe("Select Component", () => {
  const mockOnChange = jest.fn();
  const mockOnBlur = jest.fn();

  const options = [
    { value: "option1", label: "Option 1", icon: "icon1" },
    { value: "option2", label: "Option 2", icon: "icon2" },
    { value: "option3", label: "Option 3", icon: "icon3" },
  ];

  const renderComponent = (props = {}) =>
    render(
      <Select
        onChange={mockOnChange}
        onBlur={mockOnBlur}
        name="test-select"
        placeholder="Select an option"
        options={options}
        {...props}
      />
    );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders the Select component with placeholder", () => {
    renderComponent();

    expect(screen.getByLabelText("Select an option")).toBeInTheDocument();
    expect(screen.getByText("Select an option")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("displays options when opened", () => {
    renderComponent();

    const header = screen.getByLabelText("Select an option");

    fireEvent.click(header);

    options.forEach((option) => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });

  test("calls onChange when an option is selected", () => {
    renderComponent();

    const header = screen.getByLabelText("Select an option");
    fireEvent.click(header);

    const option = screen.getByText("Option 2");
    fireEvent.click(option);

    expect(mockOnChange).toHaveBeenCalledWith({
      target: { name: "test-select", value: "option2" },
    });

    expect(screen.getByLabelText("Option 2")).toBeInTheDocument(); // Verify selection
  });

  test("closes the dropdown on blur", () => {
    renderComponent();

    const header = screen.getByLabelText("Select an option");
    fireEvent.click(header);

    const optionsContainer = screen.getByRole("listbox", { hidden: true });
    expect(optionsContainer).toHaveClass("open");

    fireEvent.blur(header);

    expect(optionsContainer).not.toHaveClass("open");
  });

  test("resets selection when value is cleared", () => {
    const { rerender } = renderComponent({ value: "option1" });

    expect(screen.getByText("Option 1")).toBeInTheDocument();

    rerender(
      <Select
        onChange={mockOnChange}
        onBlur={mockOnBlur}
        name="test-select"
        placeholder="Select an option"
        options={options}
        value=""
      />
    );

    expect(screen.getByText("Select an option")).toBeInTheDocument();
  });

  test("handles keyboard navigation and selection", () => {
    renderComponent();

    const header = screen.getByLabelText("Select an option");
    fireEvent.keyDown(header, { key: "Enter" });

    const option = screen.getByText("Option 3");
    fireEvent.keyDown(option, { key: "Enter" });

    expect(mockOnChange).toHaveBeenCalledWith({
      target: { name: "test-select", value: "option3" },
    });

    expect(screen.getByLabelText("Option 3")).toBeInTheDocument();
  });

  test("does not open the dropdown on blur outside the component", () => {
    renderComponent();

    const header = screen.getByLabelText("Select an option");
    fireEvent.click(header);

    const outsideElement = document.createElement("div");
    document.body.appendChild(outsideElement);

    fireEvent.blur(screen.getByRole("button"), {
      relatedTarget: outsideElement,
    });

    const optionsContainer = screen.getByRole("listbox", { hidden: true });
    expect(optionsContainer).not.toHaveClass("open");
  });
});
