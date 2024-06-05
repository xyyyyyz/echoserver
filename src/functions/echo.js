const { app } = require("@azure/functions");

async function echo(request, context) {
    context.log(`Http function processed request for url "${request.url}"`);

    return {
        status: 200,
        jsonBody: {
            url: request.url,
            headers: request.headers,
            body: request.body
        }
    };
};

app.http('echo', {
    route: "/{restOfPath}",
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: echo
});

module.exports = echo