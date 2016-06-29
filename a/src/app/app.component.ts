import { Component } from '@angular/core';
import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';
import {ContentComponent} from './content/content.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'app-component',
    template: `
    <navigation-bar></navigation-bar>
    <content></content>
    ` ,// Using backticks allows multi-line templates
    directives: [ NavigationBarComponent, ContentComponent, ROUTER_DIRECTIVES ]
})
export class AppComponent {
    public isTestable: boolean = true;

    // Angular 2 uses a tree of components to create an app.
    // This component is the root node of that tree.
}
