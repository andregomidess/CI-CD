import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function get1(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.get('name') || await request.text() || 'world';

    return { body: `Rota get 1, ${name}!` };
};

app.http('get1', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: get1,
    route: "get1"
});
