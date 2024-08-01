import { describe, beforeEach, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import ContentDescription from "../components/ContentDescription.tsx";
import { MOCK_METADATA } from "../constants.ts";

describe("Description rendering tests", () => {
  beforeEach(() => {
    render(<ContentDescription data={MOCK_METADATA} />);
  });

  it("Should display the correct title", () => {
    expect(screen.getByText(/Information Machine, The/i)).toBeInTheDocument();
  });

  it("Should display the correct publisher", () => {
    expect(screen.getByText(/Eames/i)).toBeInTheDocument();
  });

  it("Should display the correct year", () => {
    expect(screen.getByText(/1958/i)).toBeInTheDocument();
  });

  it("Should display the correct description", () => {
    expect(
      screen.getByText(/InformationM Test Description/i)
    ).toBeInTheDocument();
  });
});
