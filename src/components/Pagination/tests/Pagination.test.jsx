import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "../Pagination";

test("calls next and previous handlers", () => {
  const onPrevPage = jest.fn();
  const onNextPage = jest.fn();
  
  render(
    <Pagination 
      currentPage={2} 
      totalPages={5} 
      onPrevPage={onPrevPage} 
      onNextPage={onNextPage} 
    />
  );
  
  fireEvent.click(screen.getByRole("button", { name: /next/i }));
  expect(onNextPage).toHaveBeenCalled();
  
  fireEvent.click(screen.getByRole("button", { name: /previous/i }));
  expect(onPrevPage).toHaveBeenCalled();
});