import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DeleteModal from "../DeleteModal";

test("confirm and cancel call handlers", () => {
  const onConfirm = jest.fn();
  const onClose = jest.fn();
  render(<DeleteModal isOpen onConfirm={onConfirm} onClose={onClose} user={null} />);
  fireEvent.click(screen.getByRole("button", { name: /delete user/i }));
  expect(onConfirm).toHaveBeenCalled();
  fireEvent.click(screen.getByRole("button", { name: /cancel/i }));
  expect(onClose).toHaveBeenCalled();
});