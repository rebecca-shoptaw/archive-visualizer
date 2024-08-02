import { describe, beforeEach, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Homepage from "../components/Homepage";

describe("Homepage tests", () => {
  beforeEach(() => {
    render(<Homepage />);
  });

  it("Should display the correct title", () => {
    expect(screen.getByRole("heading")).toHaveTextContent("Visualizer");
  });

  it('Should render the search form', () => {
    const searchForm = screen.getByTestId('search-form');
    expect(searchForm).toBeInTheDocument();
  })
});
