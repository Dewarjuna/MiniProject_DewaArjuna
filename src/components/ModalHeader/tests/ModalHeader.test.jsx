import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ModalHeader from "../ModalHeader";

test("renders title and calls onClose", () => {
  const onClose = jest.fn();
  render(<ModalHeader title="Test" onClose={onClose} />);
  expect(screen.getByText(/test/i)).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button"));
  expect(onClose).toHaveBeenCalled();
});