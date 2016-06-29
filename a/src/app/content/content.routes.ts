import { RouterConfig } from '@angular/router';

import { ContentComponent } from './content.component';
import { HomeComponent } from './home-content.component';
import { InfoComponent } from './info.component';

export const ContentRoutes: RouterConfig = [
  {
    path: '',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'info',
    component: InfoComponent
  }


];
