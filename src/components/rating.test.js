import React from "react";
import { render, screen } from "@testing-library/react";
import Rating from "./rating";
import { Star } from "./icons"; // Mocking this component if needed

jest.mock("./icons", () => ({
  Star: ({ fill }) => <svg data-testid="star" fill={fill}></svg>,
}));

describe("Rating Component", () => {
  test("renders the correct number of stars", () => {
    render(<Rating rating={3} />);

    const stars = screen.getAllByTestId("star");
    expect(stars).toHaveLength(5); // Should always render 5 stars
  });

  test("renders the correct number of filled stars for rating 3", () => {
    render(<Rating rating={3} />);

    const filledStars = screen.getAllByTestId("star").filter((star) => {
      return star.getAttribute("fill") === "gold";
    });
    expect(filledStars).toHaveLength(3);
  });

  test("renders all gray stars for rating 0", () => {
    render(<Rating rating={0} />);

    const grayStars = screen.getAllByTestId("star").filter((star) => {
      return star.getAttribute("fill") === "gray";
    });
    expect(grayStars).toHaveLength(5);
  });

  test("renders all gold stars for rating 5", () => {
    render(<Rating rating={5} />);

    const filledStars = screen.getAllByTestId("star").filter((star) => {
      return star.getAttribute("fill") === "gold";
    });
    expect(filledStars).toHaveLength(5);
  });

  test("renders gray stars for ratings beyond the valid range", () => {
    render(<Rating rating={-1} />);

    const grayStars = screen.getAllByTestId("star").filter((star) => {
      return star.getAttribute("fill") === "gray";
    });
    expect(grayStars).toHaveLength(5);
  });

  test("renders the appropriate stars for a fractional rating", () => {
    render(<Rating rating={2.5} />);

    const filledStars = screen.getAllByTestId("star").filter((star) => {
      return star.getAttribute("fill") === "gold";
    });

    // The component only considers full stars for simplicity
    expect(filledStars).toHaveLength(2);

    const grayStars = screen.getAllByTestId("star").filter((star) => {
      return star.getAttribute("fill") === "gray";
    });
    expect(grayStars).toHaveLength(3);
  });
});
