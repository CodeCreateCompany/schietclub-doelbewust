import { provideRouter, RouterConfig }  from '@angular/router';
import { ContentRoutes } from './content/content.routes';
import {LocationStrategy, PathLocationStrategy} from '@angular/common'

export const routes: RouterConfig = [
    ...ContentRoutes
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
