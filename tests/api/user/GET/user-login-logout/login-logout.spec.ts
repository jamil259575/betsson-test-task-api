import { test } from "../../../fixtures/user-fixture";
import { expect } from "@playwright/test";
import {user} from "../../../../../paths/user/main-url";
import {login, logout} from "../../../../../paths/user/GET/login-logout";

test.describe.serial("User Login & Logout API Tests", () => {

    test("Should log in with valid credentials", async ({ apiFixture, createdUser }) => {
        let responseData;

        await test.step("Send GET request to log in the user", async () => {
            const responseLogin = await apiFixture.get(`${user}/${login}`, {
                params: {
                    username: createdUser.username,
                    password: "playwright@123",
                },
            });
            expect(responseLogin.ok()).toBeTruthy();
            expect(responseLogin.status()).toBe(200);
            responseData = await responseLogin.json();
        });

        await test.step("Validate login success message", async () => {
            expect(responseData.message).toContain("logged in user session");
        });
    });

    test("Should log out user successfully", async ({ apiFixture }) => {
        await test.step("Send GET request to log out", async () => {
            const responseLogout = await apiFixture.get(`${user}/${logout}`);
            expect(responseLogout.ok()).toBeTruthy();
            expect(responseLogout.status()).toBe(200);
        });
    });
});
