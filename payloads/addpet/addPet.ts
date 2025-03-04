export const petPayload = {
    "id": 6201,
    "category": {
        "id": 2111,
        "name": "playwright doggies"
    },
    "name": "Tommy cash",
    "photoUrls": [
        "string"
    ],
    "tags": [
        {
            "id": 1708,
            "name": "blue"
        }
    ],
    "status": "available"
}

export const payloadMissingName = {
    id: 6202,
    category: { id: 2112, name: "playwright doggies" },
    // Missing the 'name' field
    photoUrls: ["https://example.com/dog.jpg"],
    tags: [{ id: 1709, name: "blue" }],
    status: "available"
};