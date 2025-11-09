import React from "react";
import { render } from "@testing-library/react";
import Hero from "../Hero";

test("renders Hero component", () => {
  const { container } = render(<Hero />);
  expect(container).toBeInTheDocument();
});