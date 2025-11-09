import React from "react";
import { render } from "@testing-library/react";
import Menu from "../Menu";

test("renders Menu", () => {
  const { container } = render(<Menu />);
  expect(container).toBeInTheDocument();
});