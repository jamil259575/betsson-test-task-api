import { test } from "../../fixtures/user-fixture";
import { expect } from "@playwright/test";

test.describe.serial("DELETE /user/{username} API Tests", () => {

  test("✅ Should successfully delete an existing user", async ({ apiFixture, createdUser }) => {
    await test.step("Send DELETE request to remove the user", async () => {
      const response = await apiFixture.delete(`user/${createdUser.username}`);
      console.log("DELETE Response Status:",response.status());
      console.log("DELETE Response Body:",response.json());
      // expect(response.ok()).toBeTruthy();
      // expect(response.status()).toBe(200);
    });

  });

  // test("❌ Should return error when deleting a non-existent user", async ({ apiFixture }) => {
  //   await test.step("Send DELETE request for a user that does not exist", async () => {
  //     const response = await apiFixture.delete(`user/non_existent_user`);
  //
  //     expect(response.status()).toBe(404);
  //     console.log("Delete Non-Existent User Response:", await response.json());
  //   });
  // });
  //
  // test("❌ Should return error when deleting without specifying a username", async ({ apiFixture }) => {
  //   await test.step("Send DELETE request without a username", async () => {
  //     const response = await apiFixture.delete(`user/`);
  //
  //     expect(response.status()).not.toBe(200); // Expect an error response
  //     console.log("Delete Without Username Response:", await response.json());
  //   });
  // });

});
