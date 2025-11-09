import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Register from "../Register";

test("renders Register", () => {
  const { container } = render(<BrowserRouter><Register /></BrowserRouter>);
  expect(container).toBeInTheDocument();
});