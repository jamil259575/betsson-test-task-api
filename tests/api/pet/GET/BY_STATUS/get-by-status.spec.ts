import { expect } from '@playwright/test';
import { test } from '../../../fixtures/api.fixture';
import { availableStatus, nonExistentStatus, wrongStatusInput } from "../../../../../paths/pet/GET/get-by-status";

test.describe('GET /pet/findByStatus API Tests', () => {

    test('should return pets with status "available"', async ({ apiFixture }) => {
        const response = await apiFixture.get(availableStatus);
        expect(response.status()).toBe(200);
        const pets = await response.json();
        expect(Array.isArray(pets)).toBeTruthy();
        pets.forEach((pet: any) => {
            expect(pet.status).toBe('available');
        });
    });

    test('should return an empty array for a non-existent status', async ({ apiFixture }) => {
        const response = await apiFixture.get(nonExistentStatus);
        expect(response.status()).toBe(200);
        const pets = await response.json();
        expect(Array.isArray(pets)).toBeTruthy();
        expect(pets.length).toBe(0);
    });

    test('should return an empty array for a wrong status input', async ({ apiFixture }) => {
        const response = await apiFixture.get(wrongStatusInput);
        expect(response.status()).toBe(200);
        const pets = await response.json();
        expect(Array.isArray(pets)).toBeTruthy();
        expect(pets.length).toBe(0);
    });
});
