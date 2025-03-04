export const updatePayload = {
    firstName: "UpdatedFirstName",
    lastName: "UpdatedLastName",
    email: "updated_email@mailinator.com",
    password: "new_secure_password",
    phone: "9090909090",
    userStatus: 1,
};

export const invalidPayload = {
    firstName: 12345,
    lastName: true,
    email: 99999,
    password: null,
    phone: false,
    userStatus: "active",
};