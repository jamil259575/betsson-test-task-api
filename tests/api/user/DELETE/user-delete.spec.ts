import { test } from "../../fixtures/user-fixture";
import { expect } from "@playwright/test";

test.describe.serial("DELETE /user/{username} API Tests", () => {

  test("Should return error when deleting a non-existent user", async ({ apiFixture }) => {
    await test.step("Send DELETE request for a user that does not exist", async () => {
      const response = await apiFixture.delete(`user/non_existent_user`);
      expect(response.status()).toBe(404);
    });
  });

  test("Should return error when deleting without specifying a username", async ({ apiFixture }) => {
    await test.step("Send DELETE request without a username", async () => {
      const response = await apiFixture.delete(`user/`);
      expect(response.status()).not.toBe(200);
    });
  });
});
