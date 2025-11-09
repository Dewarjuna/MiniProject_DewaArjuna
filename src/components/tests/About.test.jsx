import React from "react";
import { render } from "@testing-library/react";
import About from "../About";

test("renders About component", () => {
  const { container } = render(<About />);
  expect(container).toBeInTheDocument();
});