import {Component} from '@angular/core';
import {NavigationBarComponent} from './navigation-bar.component';


@Component({
    selector: 'my-app',
    template: `
        <navigation-bar></navigation-bar>
    `,
	directives: [NavigationBarComponent]
})

export class AppComponent {

}
