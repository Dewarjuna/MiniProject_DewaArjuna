import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar";

test("renders Navbar", () => {
  const { container } = render(<BrowserRouter><Navbar /></BrowserRouter>);
  expect(container).toBeInTheDocument();
});