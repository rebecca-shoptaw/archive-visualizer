import { describe, it, beforeEach, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { toPunctuatedString, renderParsedHTML } from "../utils/utils";

describe("String punctuation unit tests", () => {
  it("Should correctly turn a string array into a comma separated list", () => {
    expect(toPunctuatedString(["cat", "dog", "bird"])).toStrictEqual(
      "cat, dog, bird"
    );
  });

  it("Should return a regular string unchanged", () =>
    expect(toPunctuatedString("cat")).toStrictEqual("cat"));
});

describe("HTML rendering tests", () => {
  beforeEach(() => {
    render(<p id="test-div"></p>);
  });

  it("Should correctly insert the given text as inner HTML", async () => {
    renderParsedHTML("testing", "test-div");
  
      expect(await screen.findByText('testing')).toBeInTheDocument();

  });

  it('Should correctly render stringified HTML as HTML', async() => {
    renderParsedHTML(`<button>test</button>`, "test-div");
    expect(await screen.findByRole('button')).toBeInTheDocument();
  });
});
