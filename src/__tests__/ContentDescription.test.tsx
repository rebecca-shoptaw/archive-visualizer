import { describe, beforeEach, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import ContentDescription from "../components/ContentDescription.tsx";
import { MOCK_METADATA, MOCK_RELATEDWORKS } from "../constants.ts";

describe("Description rendering tests", () => {
  beforeEach(() => {
    render(<ContentDescription data={MOCK_METADATA} relatedWorks={MOCK_RELATEDWORKS} />);
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

  it("Should render an empty description div", () => {
    expect(document.getElementById("full-description")).toBeDefined();
  });
});
