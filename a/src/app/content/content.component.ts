import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'content',
  template: `
    <h1> content here </h1>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})

export class ContentComponent { }
