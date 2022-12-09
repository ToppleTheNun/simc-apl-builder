import { render, screen, within } from "@testing-library/react";
import { expect, test } from "vitest";

import Home from "../pages";

test("home", () => {
  render(<Home />);
  const main = within(screen.getByRole("main"));
  expect(
    main.getByRole("heading", { level: 2, name: /welcome home/i })
  ).toBeDefined();
});
