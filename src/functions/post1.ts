import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function post1(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.get('algo') || await request.text() || 'world';

    return { body: `Rota de post 1, ${name}!` };
};

app.http('post1', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: post1,
    route: "post1"
});
