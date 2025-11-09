import React from "react";
import { render } from "@testing-library/react";
import MenuItem from "../MenuItem";

test("renders MenuItem", () => {
  const { container } = render(
    <MenuItem name="Espresso" price="25000" description="Bold" />
  );
  expect(container).toBeInTheDocument();
});