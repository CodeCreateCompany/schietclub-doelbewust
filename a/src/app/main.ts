import { bootstrap } from '@angular/platform-browser-dynamic';
// import { enableProdMode } from '@angular/core';
import { AppComponent } from './app.component';


import {APP_ROUTER_PROVIDERS } from './app.routes';
import {LocationStrategy, HashLocationStrategy} from '@angular/common'
import {provide} from '@angular/core'

// enableProdMode();

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
])
.catch(err => console.error(err));
