import { test } from "../../fixtures/user-fixture";
import { expect } from "@playwright/test";
import { invalidPayload, updatePayload } from "../../../../payloads/user/PUT/put-user-payloads";

test.describe.serial("PUT /user/{username} API Tests", () => {
    test("Should successfully update user details", async ({ apiFixture, createdUser }) => {
        await test.step("Send PUT request to update user details", async () => {
            const response = await apiFixture.put(`user/${createdUser.username}`, {
                data: updatePayload,
            });
            expect(response.ok()).toBeTruthy();
            expect(response.status()).toBe(200);
        });
    });

    test(" Should return error when updating user with invalid payload", async ({ apiFixture, createdUser }) => {
        await test.step("Send PUT request with incorrect data types", async () => {
            const response = await apiFixture.put(`user/${createdUser.username}`, {
                data: invalidPayload,
            });
            expect(response.status()).toBe(500);
        });
    });
});
