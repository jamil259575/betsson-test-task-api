import { expect } from "@playwright/test";
import { test } from "../../fixtures/api.fixture";
import { headers } from "../../../../headers/headers";
import {
  invalidPayload,
  invalidPetIdPayload,
  orderPayload,
} from "../../../../payloads/store/POST/post-store-payload";
import { storePath } from "../../../../paths/store/POST/store-order";

test.describe("POST /store/order API Tests", () => {
  test("Should successfully create an order with valid data", async ({
    apiFixture,
  }) => {
    const postResponse = await apiFixture.post(storePath, {
      data: orderPayload,
      headers: headers,
    });

    expect(postResponse.status()).toBe(200);
    const responseBody = await postResponse.json();
    expect(responseBody).toHaveProperty("id");
    expect(responseBody.petId).toBe(orderPayload.petId);
    expect(responseBody.quantity).toBe(orderPayload.quantity);
    expect(responseBody.status).toBe(orderPayload.status);
  });

  test("Should fail to create an order when required fields are missing", async ({
    apiFixture,
  }) => {
    const postResponse = await apiFixture.post(storePath, {
      data: invalidPayload,
      headers: headers,
    });
    expect(postResponse.status()).not.toBe(200);
  });

  test("Should fail to create an order when petId is a string", async ({
    apiFixture,
  }) => {
    const postResponse = await apiFixture.post(storePath, {
      data: invalidPetIdPayload,
      headers: headers,
    });
    expect(postResponse.status()).not.toBe(200);
    const responseBody = await postResponse.json();
    expect(responseBody).toHaveProperty("message");
  });
});
