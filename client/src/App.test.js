import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render } from "@testing-library/react";
import { extractData } from "./components/Chart";

test("renders without crashing", () => {
  render(<App />);
});

test("is loading", () => {
  let actual = extractData([], true);
  expect(actual).toBe(undefined);
});

test("creates an array", () => {
  let actual = extractData(
    [
      {
        name: "Tierna Davidson",
        country: "United States",
        searches: 1,
        id: 100
      },
      { name: "Tierna Davidson", country: "England", searches: 5, id: 100 }
    ],
    false
  );
  let expected = [
    { x: "United States", y: 1, label: "United States" },
    { x: "England", y: 5, label: "England" }
  ];
  expect(actual).toBe(expected);
});
