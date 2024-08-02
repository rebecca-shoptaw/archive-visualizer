import { describe, beforeEach, it, expect } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";

import ContentPlayer from "../components/ContentPlayer.tsx";

describe("Video player rendering tests", () => {
  beforeEach(() => {
    render(
      <ContentPlayer
        contentId="InformationM"
        mediaType="movies"
        filesCount={1}
      />
    );
  });

  it("Should render an iframe", () => {
    const iframe = document.querySelector("iframe");

    expect(iframe).toBeInTheDocument();
  });

  it("Should dynamically generate the iframe title", () => {
    expect(screen.getByTitle("Player for InformationM")).toBeInTheDocument();
  });

  it("Should dynamically set the iframe source", () => {
    const iframe = document.querySelector("iframe");
    if (iframe) {
      expect(iframe.src).toContain("InformationM");
    }
  });
});

describe("Audio player rendering tests", () => {
  beforeEach(() => {
    render(
      <ContentPlayer
        contentId="TestPlaylist"
        mediaType="audio"
        filesCount={10}
      />
    );
  });

  it("Should render an iframe", () => {
    const iframe = document.querySelector("iframe");
    expect(iframe).toBeInTheDocument();
  });

  it("Should dynamically generate the iframe title", () => {
    expect(screen.getByTitle("Player for TestPlaylist")).toBeInTheDocument();
  });

  it("Should dynamically set the iframe source", () => {
    const iframe = document.querySelector("iframe");
    if (iframe) {
      expect(iframe.src).toContain("TestPlaylist");
    }
  });

  it("Should add a playlist parameter if file count is greater than 1", () => {
    const iframe = document.querySelector("iframe");

    if (iframe) {
      expect(iframe.src).toContain("&playlist=1");
    }
  });

  it("Should not add a playlist parameter if file count is 1", () => {
    cleanup();
    render(
      <ContentPlayer contentId="TestAudio" mediaType="audio" filesCount={1} />
    );

    const iframe = document.querySelector("iframe");

    if (iframe) {
      expect(iframe.src).not.toContain("&playlist=1");
    }
  });
});
