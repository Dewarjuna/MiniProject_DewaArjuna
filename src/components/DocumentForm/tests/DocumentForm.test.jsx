import React from "react";
import { render } from "@testing-library/react";
import DocumentForm from "../DocumentForm";

test("renders DocumentForm", () => {
  const { container } = render(
    <DocumentForm onSubmit={() => {}} onCancel={() => {}} />
  );
  expect(container).toBeInTheDocument();
});