import { test } from "../../fixtures/user-fixture";
import { expect } from "@playwright/test";

test.describe.serial("PUT /user/{username} API Tests", () => {
    test("Should successfully update user details", async ({ apiFixture, createdUser }) => {
        await test.step("Send PUT request to update user details", async () => {
            const updatePayload = {
                firstName: "UpdatedFirstName",
                lastName: "UpdatedLastName",
                email: "updated_email@mailinator.com",
                password: "new_secure_password",
                phone: "9090909090",
                userStatus: 1,
            };

            const response = await apiFixture.put(`user/${createdUser.username}`, {
                data: updatePayload,
            });

            expect(response.ok()).toBeTruthy();
            expect(response.status()).toBe(200);
            console.log("Update User Response:", await response.json());
        });
    });
});
