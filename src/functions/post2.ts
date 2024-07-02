import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function postFunction(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    return { body: `Hello, ${request.params.name || 'user'} ${request.params.lastname || 'lastname'}!` };
};

app.http('postFunction', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: postFunction,
    route: "postFunction"
});
