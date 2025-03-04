export const usersPayload = [
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

export const invalidUsersPayload = [
    {
        id: "invalid_id",
        username: 123456,
        firstName: true,
        email: 999999,
        password: null,
    },
];