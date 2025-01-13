import { test, expect } from "@playwright/test";
import { connect, disconnect } from "./dbHelpers";
import { clearDB } from "../../backend/src/db";

import User, { UserRole } from "../../backend/src/entities/User";
import Job from "../../backend/src/entities/Job";

test.beforeAll(connect);
test.beforeEach(clearDB);
test.afterAll(disconnect);

test("title test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("link", { name: "OPPORTUNITÉS" }).click();
  await expect(page.locator("h2")).toContainText("OPPORTUNITÉS");
});
