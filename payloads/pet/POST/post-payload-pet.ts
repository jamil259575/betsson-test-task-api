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
    photoUrls: ["https://example.com/dog.jpg"],
    tags: [{ id: 1709, name: "blue" }],
    status: "available"
};

export const payloadInvalidId = {
    id: "invalid_id",
    category: { id: 2113, name: "playwright doggies" },
    name: 'Tommy Cash',
    photoUrls: ["https://example.com/dog.jpg"],
    tags: [{ id: 1710, name: "blue" }],
    status: "available"
};

export const payloadInvalidStatus = {
    id: 6203,
    category: { id: 2114, name: "playwright doggies" },
    name: 'Tommy Cash',
    photoUrls: ["https://example.com/dog.jpg"],
    tags: [{ id: 1711, name: "blue" }],
    status: "unknown"
};