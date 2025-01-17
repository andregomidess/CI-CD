import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function get2(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.get('name') || await request.text() || 'world';

    return { body: `Rota get 2, ${name}!` };
};

app.http('get2', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: get2,
    route: "get2"
});
