import { Component } from '@angular/core';

@Component({
    selector: 'home',
    template: `
        <header class="intro">
            <div class="intro-body">
                <div class="container">
                    <div class="row">
                        <img src="images/logo-home.png" class="img-responsive">
                    </div>
                </div>
            </div>
        </header>
    `,
    host: {'class' : 'content-body'},
})

export class HomeComponent {

}
