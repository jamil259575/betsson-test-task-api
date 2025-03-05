import { test } from "../../fixtures/api.fixture";
import { expect } from "@playwright/test";
import { invalidUsersPayload, usersPayload } from "../../../../payloads/user/POST/post-user-payloads-with-array";
import { createUserWithArray } from "../../../../paths/user/POST/user-create";

test.describe.serial("POST /user/createWithArray API Tests", () => {

    test("Should create multiple users successfully", async ({ apiFixture }) => {
        await test.step("Send POST request to create multiple users", async () => {
            const response = await apiFixture.post(createUserWithArray, {
                data: usersPayload,
            });
            expect(response.ok()).toBeTruthy();
            expect(response.status()).toBe(200);
        });
    });

    test("Should return error when sending invalid user data", async ({ apiFixture }) => {
        await test.step("Send POST request with incorrect user data", async () => {
            const response = await apiFixture.post(createUserWithArray, {
                data: invalidUsersPayload,
            });
            expect(response.status()).not.toBe(200);
        });
    });
});
