import React from "react";
import { render } from "@testing-library/react";
import DocumentCard from "../DocumentCard";

test("renders DocumentCard", () => {
  const user = { 
    id: 1, 
    first_name: "John", 
    last_name: "Doe",
    email: "john@test.com",
    avatar: "https://reqres.in/img/faces/1-image.jpg"
  };
  const { container } = render(
    <DocumentCard user={user} onEdit={() => {}} onDelete={() => {}} />
  );
  expect(container).toBeInTheDocument();
});