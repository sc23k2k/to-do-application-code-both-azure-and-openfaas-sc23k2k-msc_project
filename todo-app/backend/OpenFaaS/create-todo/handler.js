const { CosmosClient } = require("@azure/cosmos");
const endpoint = process.env.COSMOS_ENDPOINT;
const key = process.env.COSMOS_KEY;
const client = new CosmosClient({ endpoint, key });
const databaseId = process.env.COSMOS_DATABASE_ID;
const containerId = process.env.COSMOS_CONTAINER_ID;

module.exports = async function (context) {
    const item = JSON.parse(context.body);
    const { resource: createdItem } = await client
        .database(databaseId)
        .container(containerId)
        .items.create(item);

    return {
        status: 201,
        body: createdItem
    };
};
