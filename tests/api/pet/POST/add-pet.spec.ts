import { expect } from '@playwright/test';
import { test } from '../../fixtures/api.fixture';
import { payloadMissingName, petPayload } from "../../../../payloads/addpet/addPet";
import { headers } from "../../../../headers/headers";

test.describe('POST /pet API Tests', () => {
    test('should successfully add a new pet', async ({ apiFixture }) => {
        const response = await apiFixture.post('pet', {
            data: petPayload,
            headers: headers
        });
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
    });

    test('should fail to add pet when required field "name" is missing', async ({ apiFixture }) => {
        const response = await apiFixture.post('/pet', {
            data: payloadMissingName,
            headers: headers
        });
        expect(response.status()).not.toBe(200);
        expect(response.status()).toBe(404);

    });

    test('should fail to add pet when "id" is not a number', async ({ apiFixture }) => {
        const payloadInvalidId = {
            id: "invalid_id",
            category: { id: 2113, name: "playwright doggies" },
            name: 'Tommy Cash',
            photoUrls: ["https://example.com/dog.jpg"],
            tags: [{ id: 1710, name: "blue" }],
            status: "available"
        };

        const response = await apiFixture.post('/pet', {
            data: payloadInvalidId,
            headers: { 'Content-Type': 'application/json' }
        });
        expect(response.status()).not.toBe(200);
    });

    test('should fail to add pet with invalid status value', async ({ apiFixture }) => {
        const payloadInvalidStatus = {
            id: 6203,
            category: { id: 2114, name: "playwright doggies" },
            name: 'Tommy Cash',
            photoUrls: ["https://example.com/dog.jpg"],
            tags: [{ id: 1711, name: "blue" }],
            status: "unknown"
        };

        const response = await apiFixture.post('/pet', {
            data: payloadInvalidStatus,
            headers: { 'Content-Type': 'application/json' }
        });
        expect(response.status()).not.toBe(200);
    });
});
