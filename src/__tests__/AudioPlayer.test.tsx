import { describe, beforeEach, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import AudioPlayer from "../components/AudioPlayer.tsx";

describe("Audio player rendering tests", () => {
  beforeEach(() => {
    render(<AudioPlayer contentId="count_montecristo_1308_librivox" />);
  });

  it("Should render an iframe", () => {
    const iframe = document.querySelector("iframe");

    expect(iframe).toBeInTheDocument();
  });

  it("Should dynamically generate the iframe title", () => {
    expect(
      screen.getByTitle("Audio player for The Count of Monte Cristo")
    ).toBeInTheDocument();
  });

  it("Should dynamically set the iframe source", () => {
    const iframe = document.querySelector("iframe");
    if (iframe) {
      expect(iframe.src).toContain("count_montecristo_1308_librivox");
    }
  });

  it("Should always include the playlist parameter", () => {
    const iframe = document.querySelector("iframe");
    if (iframe) {
      expect(iframe.src).toContain("&playlist=1");
    }
  });

  it("Should display the work's image next to the player", () => {
    expect(
      screen.getByTestId("count_montecristo_1308_librivox-img")
    ).toBeInTheDocument();
  });
});
