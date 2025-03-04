import { test as baseTest, request, APIRequestContext } from '@playwright/test';
import { userPayload } from "../../../payloads/created-user/created-user";
import { userName } from "../../../payloads/created-user/user-name";

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
        const response = await apiFixture.post('user', { data: userPayload });
        await use({ username: userName });
    }
});
