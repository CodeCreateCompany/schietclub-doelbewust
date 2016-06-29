import { Component } from '@angular/core';
import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';

@Component({
    selector: 'app-component',
    template: `
    <navigation-bar></navigation-bar>
    ` ,// Using backticks allows multi-line templates
    directives: [ NavigationBarComponent ]
})
export class AppComponent {
    public isTestable: boolean = true;

    // Angular 2 uses a tree of components to create an app.
    // This component is the root node of that tree.
}
