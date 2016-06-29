"use strict";
var router_1 = require('@angular/router');
var content_routes_1 = require('./content/content.routes');
exports.routes = content_routes_1.ContentRoutes.slice();
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
