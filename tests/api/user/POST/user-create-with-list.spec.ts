import { test } from "../../fixtures/api.fixture";
import { expect } from "@playwright/test";

test.describe.serial("POST /user/createWithList API Tests", () => {

    test("Should create multiple users successfully", async ({ apiFixture }) => {
        await test.step("Send POST request to create multiple users", async () => {
            const usersPayload = [
                {
                    id: 0,
                    username: `user_${Date.now()}_1`,
                    firstName: "Playwright",
                    lastName: "TestOne",
                    email: `testone_${Date.now()}@mailinator.com`,
                    password: "playwright@123",
                    phone: "8080808080",
                    userStatus: 0,
                },
                {
                    id: 0,
                    username: `user_${Date.now()}_2`,
                    firstName: "Playwright",
                    lastName: "TestTwo",
                    email: `testtwo_${Date.now()}@mailinator.com`,
                    password: "playwright@123",
                    phone: "9090909090",
                    userStatus: 0,
                },
            ];

            const response = await apiFixture.post(`user/createWithList`, {
                data: usersPayload,
            });

            expect(response.ok()).toBeTruthy();
            expect(response.status()).toBe(200);
        });
    });

    test("Should return error when sending an empty user list", async ({ apiFixture }) => {
        await test.step("Send POST request with an empty list", async () => {
            const emptyListPayload = [""];

            const response = await apiFixture.post(`user/createWithList`, {
                data: emptyListPayload,
            });

            expect(response.status()).not.toBe(200);
        });
    });

    test("Should return error when sending invalid user data", async ({ apiFixture }) => {
        await test.step("Send POST request with incorrect user data", async () => {
            const invalidUsersPayload = [
                {
                    id: "invalid_id",
                    username: 123456,
                    firstName: true,
                    email: 999999,
                    password: null,
                },
            ];

            const response = await apiFixture.post(`user/createWithList`, {
                data: invalidUsersPayload,
            });

            expect(response.status()).not.toBe(200);
        });
    });

});
