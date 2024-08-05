import { describe, it, beforeEach, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import {
  toPunctuatedString,
  renderParsedHTML,
  linkBtnToEnterKey,
  toHashedPath,
} from "../utils/utils";

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
    expect(await screen.findByText("testing")).toBeInTheDocument();
  });

  it("Should correctly render stringified HTML as HTML", async () => {
    renderParsedHTML(`<button>test</button>`, "test-div");
    expect(await screen.findByRole("button")).toBeInTheDocument();
  });
});

describe("Click button on enter tests", () => {
  beforeEach(() => {
    const testFunction = () => {
      const btn = document.getElementById("test-btn");
      if (btn) btn.innerHTML = "testing";
    };
    render(<a id="test-btn" data-testid="test-btn" onClick={testFunction}></a>);
  });

  it("Should click the specified button on enter", async () => {
    linkBtnToEnterKey("test-btn");
    const linkEl = screen.getByTestId("test-btn");

    if (linkEl) {
      fireEvent.keyDown(linkEl, { key: "Enter" });
      expect(await screen.findByText("testing")).toBeInTheDocument();
    }
  });
});

describe("Dynamic path tests", () => {
  it("Should add the specified ID to the path if provided", async () => {
    expect(toHashedPath("InformationM")).toStrictEqual(
      "/archive-visualizer/#InformationM"
    );
  });

  it("Should leave the base URl unchanged if no ID is provided", () => {
    expect(toHashedPath("")).toStrictEqual("/archive-visualizer/");
  });
});
