import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const labelElement = getByText(/Password/i);
  expect(labelElement).toBeInTheDocument();
  const h3Element = getByText(/Log/i);
  expect(h3Element).toBeInTheDocument();
  const h3Element = getByText(/Log/i);
  expect(h3Element).toBeInTheDocument();
});
