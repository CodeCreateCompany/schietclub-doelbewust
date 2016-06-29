"use strict";
var home_content_component_1 = require('./home-content.component');
var info_component_1 = require('./info.component');
exports.ContentRoutes = [
    {
        path: '',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: home_content_component_1.HomeComponent
    },
    {
        path: 'info',
        component: info_component_1.InfoComponent
    }
];
