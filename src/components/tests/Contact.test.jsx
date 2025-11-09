import React from "react";
import { render } from "@testing-library/react";
import Contact from "../Contact";

test("renders Contact component", () => {
  const { container } = render(<Contact />);
  expect(container).toBeInTheDocument();
});