import { expect } from "@playwright/test";
import { test } from "../../fixtures/api.fixture";
import {
  wrongPayload,
  petPayload,
} from "../../../../payloads/pet/POST/post-payload-pet";
import { headers } from "../../../../headers/headers";
import { addPet } from "../../../../paths/pet/POST/add-pet";

test.describe("POST /pet API Tests", () => {
  test("should successfully add a new pet", async ({ apiFixture }) => {
    const response = await apiFixture.post(addPet, {
      data: petPayload,
      headers: headers,
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });

  test("should fail to add pet with wrong input", async ({ apiFixture }) => {
    const response = await apiFixture.post(addPet, {
      data: wrongPayload,
      headers: headers,
    });
    expect(response.status()).not.toBe(200);
  });
});
