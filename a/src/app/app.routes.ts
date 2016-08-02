import { provideRouter, RouterConfig }  from '@angular/router';

import { HomeRoutes } from './+home/index';
import {LocationStrategy, PathLocationStrategy} from '@angular/common'

const routes: RouterConfig = [
    ...HomeRoutes
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
