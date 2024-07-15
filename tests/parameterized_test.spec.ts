import { test, expect, type Page } from "@playwright/test";
import { checkNumberOfTodosInLocalStorage } from "../helper-fns";
import { TODO_ITEMS } from "../helper-fns/data";



test.beforeEach(async ({ page }) => {
  await page.goto(process.env.PAGE as string);
});


test("should clear text input field when an item is added", async ({
  page,
}) => {
  // create a new todo locator
  const newTodo = page.getByPlaceholder("What needs to be done?");

  // Create one todo item.
  await newTodo.fill(TODO_ITEMS[0]);
  await newTodo.press("Enter");

  // Check that input is empty.
  await expect(newTodo).toBeEmpty();
  await checkNumberOfTodosInLocalStorage(page, 1);
});
