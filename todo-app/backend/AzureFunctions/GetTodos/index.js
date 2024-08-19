const { CosmosClient } = require("@azure/cosmos");
const endpoint = process.env.COSMOS_ENDPOINT;
const key = process.env.COSMOS_KEY;
const client = new CosmosClient({ endpoint, key });
const databaseId = process.env.COSMOS_DATABASE_ID;
const containerId = process.env.COSMOS_CONTAINER_ID;

module.exports = async function (context, req) {
    const { resources: items } = await client
        .database(databaseId)
        .container(containerId)
        .items.query("SELECT * from c")
        .fetchAll();

    context.res = {
        status: 200,
        body: items
    };
};
