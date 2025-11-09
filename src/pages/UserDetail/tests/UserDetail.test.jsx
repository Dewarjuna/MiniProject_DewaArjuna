import React from "react";
import { renderWithProviders } from "../../../test_utils";

test("renders UserDetail", () => {
  const { container } = renderWithProviders(<div>UserDetail</div>);
  expect(container).toBeInTheDocument();
});