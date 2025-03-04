import { expect } from '@playwright/test';
import { test } from '../../../fixtures/api.fixture';

test.describe('GET /pet/findByStatus API Tests', () => {

    test('should return pets with status "available"', async ({ apiFixture }) => {
        const response = await apiFixture.get('pet/findByStatus?status=available');
        expect(response.status()).toBe(200);
        const pets = await response.json();
        expect(Array.isArray(pets)).toBeTruthy();
        pets.forEach((pet: any) => {
            expect(pet.status).toBe('available');
        });
    });

    test('should return an empty array for a non-existent status', async ({ apiFixture }) => {
        const response = await apiFixture.get('pet/findByStatus?status=nonexistent');
        expect(response.status()).toBe(200);
        const pets = await response.json();
        expect(Array.isArray(pets)).toBeTruthy();
        expect(pets.length).toBe(0);
    });
});
