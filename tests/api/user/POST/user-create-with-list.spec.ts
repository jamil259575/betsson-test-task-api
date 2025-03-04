import { test } from "../../fixtures/api.fixture";
import { expect } from "@playwright/test";
import {invalidUsersPayload, usersPayload} from "../../../../payloads/user/POST/post-user-payloads-with-list";

test.describe.serial("POST /user/createWithList API Tests", () => {

    test("Should create multiple users successfully", async ({ apiFixture }) => {
        await test.step("Send POST request to create multiple users", async () => {
            const response = await apiFixture.post(`user/createWithList`, {
                data: usersPayload,
            });
            expect(response.ok()).toBeTruthy();
            expect(response.status()).toBe(200);
        });
    });

    test("Should return error when sending invalid user data", async ({ apiFixture }) => {
        await test.step("Send POST request with incorrect user data", async () => {
            const response = await apiFixture.post(`user/createWithList`, {
                data: invalidUsersPayload,
            });
            expect(response.status()).not.toBe(200);
        });
    });

});
