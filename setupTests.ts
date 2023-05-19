import { TextEncoder } from "util";
import { configure } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";

Object.defineProperty(window, "TextEncoder", {
  writable: true,
  value: TextEncoder,
});

jest.setTimeout(30000);

// jest.retryTimes(1);

configure({
  asyncUtilTimeout: 25000,
});
