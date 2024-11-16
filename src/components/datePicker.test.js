import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { DatePicker } from "./datePicker";

describe("DatePicker Component", () => {
  const mockOnChange = jest.fn();

  const renderComponent = (props = {}) =>
    render(
      <DatePicker
        onChange={mockOnChange}
        name="test-datepicker"
        placeholder="Select a date"
        {...props}
      />
    );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders the DatePicker component with placeholder", () => {
    renderComponent();

    expect(screen.getByText("Select a date")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveClass("datepicker-header");
  });

  test("toggles the datepicker dropdown on header click", () => {
    renderComponent();

    const header = screen.getByText("Select a date");

    fireEvent.click(header);
    expect(
      screen.getByText(
        `${new Date().toLocaleString("default", {
          month: "long",
        })} ${new Date().getFullYear()}`
      )
    ).toBeInTheDocument();

    fireEvent.click(header);
    expect(
      screen.queryByText(
        new Date().toLocaleString("default", { month: "long" })
      )
    ).not.toBeInTheDocument();
  });

  test("shows correct days for the current month", () => {
    renderComponent();

    const header = screen.getByText("Select a date");
    fireEvent.click(header);

    const days = new Date(
      new Date().getFullYear(),
      new Date().getMonth() + 1,
      0
    ).getDate();

    expect(screen.getAllByRole("button", { name: /\d+/ })).toHaveLength(days);
  });

  test("calls onChange with selected date", async () => {
    renderComponent();

    const header = screen.getByText("Select a date");
    fireEvent.click(header);

    const firstDay = screen.getByText("1");
    fireEvent.click(firstDay);

    await waitFor(() => {
      expect(mockOnChange).toHaveBeenCalledWith({
        target: {
          name: "test-datepicker",
          value: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        },
      });
    });
  });

  test("navigates to the previous month", () => {
    renderComponent();

    const header = screen.getByText("Select a date");
    fireEvent.click(header);

    const prevButton = screen.getByTestId("prev-month");
    fireEvent.click(prevButton);

    const previousMonthDate = new Date();
    previousMonthDate.setMonth(previousMonthDate.getMonth() - 1);

    const previousMonth =
      previousMonthDate.toLocaleString("default", { month: "long" }) +
      " " +
      previousMonthDate.getFullYear();

    expect(screen.getByText(previousMonth)).toBeInTheDocument();
  });
  test("navigates to the next month", () => {
    renderComponent();

    const header = screen.getByText("Select a date");
    fireEvent.click(header);

    const nextButton = screen.getByTestId("next-month");
    fireEvent.click(nextButton);

    const nextMonthDate = new Date();
    nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);

    const nextMonth =
      nextMonthDate.toLocaleString("default", { month: "long" }) +
      " " +
      nextMonthDate.getFullYear();

    expect(screen.getByText(nextMonth)).toBeInTheDocument();
  });

  test("closes dropdown when losing focus", () => {
    renderComponent();

    const header = screen.getByLabelText("Select a date");
    fireEvent.click(header);

    const datepicker = screen.getByRole("button");
    fireEvent.blur(datepicker);

    expect(
      screen.queryByText(
        new Date().toLocaleString("default", { month: "long" })
      )
    ).not.toBeInTheDocument();
  });
});
