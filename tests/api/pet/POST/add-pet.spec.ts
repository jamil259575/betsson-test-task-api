import { expect } from '@playwright/test';
import { test } from '../../fixtures/api.fixture';
import {
    payloadInvalidId,
    payloadInvalidStatus,
    payloadMissingName,
    petPayload
} from "../../../../payloads/pet/POST/post-payload-pet";
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
        const response = await apiFixture.post('/pet', {
            data: payloadInvalidId,
            headers: headers
        });
        expect(response.status()).not.toBe(200);
    });

    test('should fail to add pet with invalid status value', async ({ apiFixture }) => {
        const response = await apiFixture.post('/pet', {
            data: payloadInvalidStatus,
            headers: { 'Content-Type': 'application/json' }
        });
        expect(response.status()).not.toBe(200);
    });
});
