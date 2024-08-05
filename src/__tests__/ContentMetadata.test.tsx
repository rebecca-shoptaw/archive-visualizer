import { describe, beforeEach, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import ContentMetadata from "../components/ContentMetadata.tsx";
import { MOCK_METADATA, INCLUDE_KEYS } from "../constants.ts";
import { toDateString, toPunctuatedString } from "../utils/utils.ts";

describe("Metadata rendering tests", () => {
  beforeEach(() => {
    render(<ContentMetadata data={MOCK_METADATA} />);
  });

  it("Should display the correct keys", () => {
    INCLUDE_KEYS.forEach((key) => {
      if (MOCK_METADATA[key]) {
        expect(screen.getByText(key.toUpperCase())).toBeInTheDocument();
      }
    });
  });

  it("Should display the correct values", () => {
    // Length method used instead of toBeInTheDocument to account for duplicates i.e. InformationM
    INCLUDE_KEYS.forEach((key) => {
      if (MOCK_METADATA[key]) {
        if (key === "publicdate") {
          expect(
            screen.getByText(
              toDateString(MOCK_METADATA[key], { showTime: true })
            )
          ).toBeInTheDocument();
        } else
          expect(
            screen.getAllByText(toPunctuatedString(MOCK_METADATA[key]))
          ).length.greaterThan(0);
      }
    });
  });
});
