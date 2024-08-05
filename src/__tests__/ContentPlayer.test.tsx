import { describe, beforeEach, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import ContentPlayer from "../components/ContentPlayer.tsx";

describe("Content player rendering tests", () => {
  beforeEach(() => {
    render(
      <ContentPlayer
        contentId="InformationM"
        contentTitle="Information Machine, The"
        type="MovingImage"
      />
    );
  });

  it("Should render an iframe", () => {
    const iframe = document.querySelector("iframe");

    expect(iframe).toBeInTheDocument();
  });

  it("Should dynamically generate the iframe title", () => {
    expect(
      screen.getByTitle("Player for Information Machine, The")
    ).toBeInTheDocument();
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
        contentTitle="Test Playlist"
        type="sound"
      />
    );
  });

  it("Should render an iframe", () => {
    const iframe = document.querySelector("iframe");
    expect(iframe).toBeInTheDocument();
  });

  it("Should render an audio player iframe"),
    () => {
      expect(
        screen.getByTitle("Audio player for Test Playlist")
      ).toBeInTheDocument();
    };
});
