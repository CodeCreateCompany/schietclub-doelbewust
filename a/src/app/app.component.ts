import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { NavbarComponent } from './shared/index';

@Component({
    moduleId: module.id,
    selector: 'sd-app',
    templateUrl: 'app.component.html',
    directives: [ ROUTER_DIRECTIVES, NavbarComponent ]
})
export class AppComponent {



}
