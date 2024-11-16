import React from "react";
import { Chevron } from "./icons"; // Adjust as needed
import "./datePicker.css";

export const DatePicker = ({
  onChange,
  name,
  placeholder = "Select a date",
  id,
  value
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const [currentMonth, setCurrentMonth] = React.useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = React.useState(
    new Date().getFullYear()
  );

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  const generateDays = (month, year) => {
    const totalDays = daysInMonth(month, year);
    return Array.from({ length: totalDays }, (_, i) => i + 1);
  };

  const selectDate = (day) => {
    const newDate = new Date(currentYear, currentMonth, day);
    setIsOpen(false);
    onChange({ target: { name, value: newDate } });
  };

  return (
    <div
      className="datepicker"
      onBlur={(e) => {
        if (e.currentTarget.contains(e.relatedTarget)) {
        } else {
          setIsOpen(false);
        }
      }}
    >
      <input type="hidden" aria-labelledby={name} value={value} />
      <div
        tabIndex="0"
        role="button"
        data-testid="datepicker-header"
        className={`datepicker-header ${value ? "active" : ""} ${
          isOpen ? "open" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
      >
        <label id={name} data-testid="label-val">
          {value ? value.toLocaleDateString() : placeholder}
        </label>
        <Chevron
          position={isOpen ? "up" : "down"}
          stroke={value ? "white" : "#495e57"}
        />
      </div>
      {isOpen && (
        <div className="datepicker-options">
          <div className="datepicker-controls">
            <button
              data-testid="prev-month"
              onClick={() => {
                setCurrentMonth((prev) => (prev > 0 ? prev - 1 : 11));
                if (currentMonth === 0) {
                  setCurrentYear((prev) => prev - 1);
                }
              }}
            >
              <Chevron position="left" stroke="white" />
            </button>
            <span>
              {new Date(currentYear, currentMonth).toLocaleString("default", {
                month: "long",
              })}{" "}
              {currentYear}
            </span>
            <button
              data-testid="next-month"
              onClick={() => {
                setCurrentMonth((prev) => (prev < 11 ? prev + 1 : 0));
                if (currentMonth === 11) {
                  setCurrentYear((prev) => prev + 1);
                }
              }}
            >
              <Chevron position="right" stroke="white" />
            </button>
          </div>
          <div className="datepicker-days">
            {generateDays(currentMonth, currentYear).map((day) => (
              <div
                key={day}
                role="button"
                className="datepicker-day"
                tabIndex="0"
                onClick={() => selectDate(day)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    selectDate(day);
                  }
                }}
              >
                {day}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
