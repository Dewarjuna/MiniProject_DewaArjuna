import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SearchBar from "../SearchBar";

test("calls onSearchChange after debounce when text is typed", async () => {
  const onSearchChange = jest.fn();
  render(<SearchBar searchQuery="" onSearchChange={onSearchChange} />);
  const input = screen.getByPlaceholderText(/search/i);
  
  fireEvent.change(input, { target: { value: "George" } });
  
  await waitFor(() => {
    expect(onSearchChange).toHaveBeenCalledWith("George");
  }, { timeout: 500 });
});