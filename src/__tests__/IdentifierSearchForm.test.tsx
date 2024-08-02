import { describe, beforeEach, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import IdentifierSearchForm from "../components/IdentifierSearchForm";

describe("Identifier search form tests", () => {
  beforeEach(() => {
    render(<IdentifierSearchForm />);
  });

  it("Should render the search input", () => {
    expect(
      screen.getByLabelText("Enter any Internet Archive identifier below:")
    ).toBeInTheDocument();
  });

  it("Should render an initially empty input", () => {
    expect(screen.getByRole("textbox")).toHaveTextContent("");
  });

  it("Should render a search button", () => {
    const searchBtn = document.getElementById(
      "search-button"
    ) as HTMLAnchorElement;
    expect(searchBtn).toBeInTheDocument();
  });

  it("Should link to the homepage if no identifier has been entered", () => {
    const searchBtn = document.getElementById(
      "search-button"
    ) as HTMLAnchorElement;
    expect(searchBtn.href).toMatch(/archive-visualizer\/$/i);
  });

  it("Should link to the identifier if an identifier has been entered", () => {
    const input = screen.getByLabelText(
      "Enter any Internet Archive identifier below:"
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "InformationM" } });

    const searchBtn = document.getElementById(
      "search-button"
    ) as HTMLAnchorElement;
    expect(searchBtn.href).toMatch(/InformationM/i);
  });
});
