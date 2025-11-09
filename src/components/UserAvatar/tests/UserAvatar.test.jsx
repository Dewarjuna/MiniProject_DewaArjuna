import React from "react";
import { render, screen } from "@testing-library/react";
import UserAvatar from "../UserAvatar";

test("renders avatar", () => {
  render(<UserAvatar src="test.jpg" alt="Test" />);
  expect(screen.getByRole("img")).toHaveAttribute("src", "test.jpg");
});