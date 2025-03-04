import { test as baseTest, request, APIRequestContext } from '@playwright/test';

type ApiFixture = {
    apiFixture: APIRequestContext;
};

export const test = baseTest.extend<ApiFixture>({
    apiFixture: async ({ baseURL }, use) => {
        const APIContext = await request.newContext({
            baseURL: baseURL
        });
        await use(APIContext);
        await APIContext.dispose();
    },
});
