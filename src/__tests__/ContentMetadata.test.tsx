import { describe, beforeEach, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import ContentMetadata from "../components/ContentMetadata.tsx";
import { MOCK_METADATA, INCLUDE_KEYS } from "../constants.ts";

describe("Metadata rendering tests", () => {
  beforeEach(() => {
    render(<ContentMetadata data={MOCK_METADATA} />);
  });

  it("Should display the correct keys", () => {
    INCLUDE_KEYS.forEach(key => {
        expect(screen.getByText(key.toUpperCase())).toBeInTheDocument();
    })
  });

  it("Should display the correct values", () => {
    // Length method used instead of toBeInTheDocument to account for duplicates i.e. InformationM
    INCLUDE_KEYS.forEach(key => {
        expect(screen.getAllByText(MOCK_METADATA[key])).length.greaterThan(0);
    })
  })
});
