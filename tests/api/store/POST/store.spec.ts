import { expect } from '@playwright/test';
import { test } from '../../fixtures/api.fixture';
import { headers } from "../../../../headers/headers";

test.describe('POST /store/order API Tests', () => {

    test('Should successfully create an order with valid data', async ({ apiFixture }) => {
        const orderPayload = {
            id: 0,
            petId: Math.floor(Math.random() * 10000) + 1, // Random pet ID
            quantity: Math.floor(Math.random() * 10) + 1, // Random quantity between 1 and 10
            shipDate: new Date(Date.now() + Math.floor(Math.random() * 1000000000)).toISOString(), // Future ISO date
            status: "placed", // Valid status
            complete: false
        };

        const postResponse = await apiFixture.post('store/order', {
            data: orderPayload,
            headers: headers
        });

        expect(postResponse.status()).toBe(200);
        const responseBody = await postResponse.json();
        expect(responseBody).toHaveProperty('id');
        expect(responseBody.petId).toBe(orderPayload.petId);
        expect(responseBody.quantity).toBe(orderPayload.quantity);
        expect(responseBody.status).toBe(orderPayload.status);
    });

    test('Should fail to create an order when required fields are missing', async ({ apiFixture }) => {
        const invalidPayload = {
            id: 0, // Let API generate ID
            shipDate: new Date(Date.now() + Math.floor(Math.random() * 1000000000)).toISOString(), // Future ISO date
            status: "placed", // Valid status
            complete: false
        };
        const postResponse = await apiFixture.post('/store/order', {
            data: invalidPayload,
            headers: headers
        });
        expect(postResponse.status()).not.toBe(200);
    });

    test('Should fail to create an order when petId is a string', async ({ apiFixture }) => {
        const invalidPayload = {
            id: 0,
            petId: "invalid_petId", // Wrong type
            quantity: 5,
            shipDate: new Date(Date.now() + Math.floor(Math.random() * 1000000000)).toISOString(),
            status: "placed",
            complete: false
        };

        const postResponse = await apiFixture.post('store/order', {
            data: invalidPayload,
            headers: headers
        });

        expect(postResponse.status()).not.toBe(200); // Expect error response (likely 400)
        const responseBody = await postResponse.json();
        expect(responseBody).toHaveProperty('message');
    });

    test('Should fail to create an order with an invalid status value', async ({ apiFixture }) => {
        const invalidPayload = {
            id: 0,
            petId: Math.floor(Math.random() * 10000) + 1,
            quantity: Math.floor(Math.random() * 10) + 1,
            shipDate: new Date(Date.now() + Math.floor(Math.random() * 1000000000)).toISOString(),
            status: "invalid_status",
            complete: false
        };
        const postResponse = await apiFixture.post('/store/order', {
            data: invalidPayload,
            headers: headers
        });
        expect(postResponse.status()).toBe(404);
    });
});
