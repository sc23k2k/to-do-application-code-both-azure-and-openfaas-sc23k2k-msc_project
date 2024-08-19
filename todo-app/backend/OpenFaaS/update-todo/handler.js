const { CosmosClient } = require("@azure/cosmos");
const endpoint = process.env.COSMOS_ENDPOINT;
const key = process.env.COSMOS_KEY;
const client = new CosmosClient({ endpoint, key });
const databaseId = process.env.COSMOS_DATABASE_ID;
const containerId = process.env.COSMOS_CONTAINER_ID;

module.exports = async function (context) {
    const id = context.params.id;
    const { resource: item } = await client
        .database(databaseId)
        .container(containerId)
        .item(id)
        .read();

    item.completed = !item.completed;

    const { resource: updatedItem } = await client
        .database(databaseId)
        .container(containerId)
        .item(id)
        .replace(item);

    return {
        status: 200,
        body: updatedItem
    };
};
