import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CharactersDetailsComponent } from './components/characters/characters-details/characters-details.component';
import { CharactersListComponent } from './components/characters/characters-list/characters-list.component';

export const routes: Routes = [
{
    path: '',
    component: HomepageComponent
  },
  {
    path: 'characters',
    component: CharactersListComponent
  },
  {
    path: 'characters/:id',
    component: CharactersDetailsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];
