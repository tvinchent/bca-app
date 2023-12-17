import { expect, test } from "vitest";

const sum = (a, b) => a + b;

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

// import { describe, it, expect } from "vitest";
// import { render, screen } from "@testing-library/react";

// import App from "./App";

// describe("App", () => {
//   it("renders headline", async () => {
//     render(<App />);
//     screen.findByText("BCA");
//     expect(await screen.findByText(/BCA/)).toBeInTheDocument();
//   });
// });

// // import { test, expect, describe, beforeEach } from "vitest";
// // import { render, test, expect } from "@testing-library/react";
// import { render } from "@testing-library/react";
// import App from "./App"; // Adjust the path to your App component

// test('renders the text "BCA"', () => {
//   // Render the component
//   const { getByText } = render(<App />);

//   // Use the getByText query to find the text in the rendered component
//   const textElement = getByText("BCA");

//   // Assert that the text is present in the component
//   expect(textElement).toBeInTheDocument();
// });

// describe("App", () => {
//   beforeEach(() => {
//     render(<App />);
//   });

//   test('renders "BCA" text', async () => {
//     const bcaText = await screen.findByText(/BCA/i);
//     expect(bcaText).toBeInTheDocument();
//   });
// });
