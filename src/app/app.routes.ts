import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CharactersComponent } from './components/characters/characters.component';

export const routes: Routes = [
{
    path: '',
    component: HomepageComponent
  },
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];
