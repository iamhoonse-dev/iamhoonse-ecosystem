import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SiteHeader from ".";

describe("<SiteHeader/>", () => {
  test("header 요소로 렌더링되어야 합니다.", () => {
    render(<SiteHeader />);
    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  });
});
