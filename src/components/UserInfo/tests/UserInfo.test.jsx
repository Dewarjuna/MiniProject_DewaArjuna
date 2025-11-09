import React from "react";
import { render } from "@testing-library/react";
import UserInfo from "../UserInfo";

test("renders user info", () => {
  const { container } = render(<UserInfo label="Name" value="John Doe" />);
  expect(container).toBeInTheDocument();
});