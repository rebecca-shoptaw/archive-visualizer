import { describe, beforeEach, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import RelatedWorks from "../components/RelatedWorks.tsx";
import { MOCK_RELATEDWORKS } from "../constants.ts";
import {
  toCapitalized,
  toDateString,
  toPunctuatedString,
} from "../utils/utils.ts";

describe("Metadata rendering tests", () => {
  beforeEach(() => {
    render(<RelatedWorks data={MOCK_RELATEDWORKS} />);
  });

  it("Should display the correct titles", () => {
    MOCK_RELATEDWORKS.forEach((work) => {
      expect(
        screen.getByText(work._source.title.toString())
      ).toBeInTheDocument();
    });
  });

  it("Should display the correct creator, if applicable", () => {
    MOCK_RELATEDWORKS.forEach((work) => {
      if (work._source.creatorSorter) {
        expect(
          screen.getByText(
            toCapitalized(toPunctuatedString(work._source.creatorSorter))
          )
        ).toBeInTheDocument();
      }
    });
  });

  it("Should display the correct publish date, if applicable", () => {
    MOCK_RELATEDWORKS.forEach((work) => {
      if (work._source.publicdate) {
        expect(
          screen.getByText(toDateString(work._source.publicdate))
        ).toBeInTheDocument();
      }
    });
  });

  it("Should display a corresponding image", () => {
    MOCK_RELATEDWORKS.forEach((work) => {
      const workImage = screen.getByTestId(`${work._id}-img`);
      expect(workImage).toBeInTheDocument();
    });
  });

  it("Should display an image with the correct source", () => {
    MOCK_RELATEDWORKS.forEach((work) => {
      const workImage = screen.getByTestId(
        `${work._id}-img`
      ) as HTMLImageElement;
      expect(workImage.src).toStrictEqual(
        `https://archive.org/services/img/${work._id}`
      );
    });
  });
});
