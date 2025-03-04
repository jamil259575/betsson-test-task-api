export const orderPayload = {
    id: 0,
    petId: Math.floor(Math.random() * 10000) + 1,
    quantity: Math.floor(Math.random() * 10) + 1,
    shipDate: new Date(Date.now() + Math.floor(Math.random() * 1000000000)).toISOString(),
    status: "placed",
    complete: false
};

export const invalidPayloadMissingField = {
    id: 0,
    shipDate: new Date(Date.now() + Math.floor(Math.random() * 1000000000)).toISOString(),
    status: "placed",
    complete: false
};

export const invalidPetIdPayload = {
    id: 0,
    petId: "invalid_petId",
    quantity: 5,
    shipDate: new Date(Date.now() + Math.floor(Math.random() * 1000000000)).toISOString(),
    status: "placed",
    complete: false
};

export const invalidStatusValuePayload = {
    id: 0,
    petId: Math.floor(Math.random() * 10000) + 1,
    quantity: Math.floor(Math.random() * 10) + 1,
    shipDate: new Date(Date.now() + Math.floor(Math.random() * 1000000000)).toISOString(),
    status: "invalid_status",
    complete: false
};