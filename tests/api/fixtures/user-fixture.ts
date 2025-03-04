import { test as baseTest, request, APIRequestContext } from '@playwright/test';

type UserFixture = {
    apiFixture: APIRequestContext;
    createdUser: { username: string };
};

export const test = baseTest.extend<UserFixture>({
    apiFixture: async ({ baseURL }, use) => {
        const apiContext = await request.newContext({ baseURL: baseURL });
        await use(apiContext);
        await apiContext.dispose();
    },

    createdUser: async ({ apiFixture }, use) => {
        const userName = `user_${Date.now()}`;
        const userPayload = {
            id: 0,
            username: userName,
            firstName: "Playwright",
            lastName: "Testing",
            email: `${userName}@mailinator.com`,
            password: "playwright@123",
            phone: "8080808080",
            userStatus: 0,
        };

        const response = await apiFixture.post('user', { data: userPayload });
        await use({ username: userName });
    }
});
