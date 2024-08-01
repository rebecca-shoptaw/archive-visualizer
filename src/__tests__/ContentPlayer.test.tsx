import { describe, beforeEach, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import ContentPlayer from "../components/ContentPlayer.tsx";

describe("Player rendering tests", () => {
  beforeEach(() => {
    render(<ContentPlayer contentId="InformationM" />);
  });

  it("Should render an iframe", () => {
    const iframe = document.querySelector('iframe');

    expect(iframe).toBeInTheDocument();
  });

  it('Should dynamically generate the iframe title', () => {
    expect(screen.getByTitle('Video for InformationM')).toBeInTheDocument();
  });

  it('Should dynamically set the iframe source', () => {
    const iframe = document.querySelector('iframe');
    if (iframe) {
        expect(iframe.src).toContain('InformationM');
    }
  })
});
