import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import UserTable from "../UserTable";

test("renders UserTable", () => {
  const users = [
    { id: 1, first_name: "John", last_name: "Doe", email: "john@test.com", avatar: "test.jpg" }
  ];
  const { container } = render(
    <BrowserRouter>
      <UserTable 
        users={users} 
        onEdit={() => {}} 
        onDelete={() => {}} 
        searchQuery="" 
      />
    </BrowserRouter>
  );
  expect(container).toBeInTheDocument();
});