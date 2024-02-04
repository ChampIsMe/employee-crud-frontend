import { afterEach,beforeAll } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";


//Clean up after all tests
afterEach(() => {
  cleanup();
});