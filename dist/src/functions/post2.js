"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postFunction = void 0;
const functions_1 = require("@azure/functions");
function postFunction(request, context) {
    return __awaiter(this, void 0, void 0, function* () {
        context.log(`HTTP function processed request for URL: "${request.url}"`);
        return { body: `Hello, ${request.params.name} ${request.params.lastname}!` };
    });
}
exports.postFunction = postFunction;
;
functions_1.app.http('postFunction', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: postFunction,
    route: "postFunction"
});
//# sourceMappingURL=post2.js.map