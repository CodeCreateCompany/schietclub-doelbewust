
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {provide} from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
// import { enableProdMode } from '@angular/core';


import {APP_ROUTER_PROVIDERS } from './app.routes';
import { AppComponent } from './app.component';

// enableProdMode();

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS
])
.catch(err => console.error(err));
