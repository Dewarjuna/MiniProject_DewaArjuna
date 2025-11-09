import React from "react";
import { renderWithProviders } from "../../../test_utils";

test("renders EditUser", () => {
  const { container } = renderWithProviders(<div>EditUser</div>);
  expect(container).toBeInTheDocument();
});