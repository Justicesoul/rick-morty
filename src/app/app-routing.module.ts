import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './pages/characters/character/character.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { LocationComponent } from './pages/locations/location/location.component';
import { LocationsComponent } from './pages/locations/locations.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full'
  },
  {
    path: 'characters',
    component: CharactersComponent,
  },
  {
    path: 'characters/:id',
    component: CharacterComponent
  },
  {
    path: 'locations',
    component: LocationsComponent,
  },
  {
    path: 'locations/:param',
    component: LocationComponent
  },
  {
    path: '**',
    redirectTo: 'characters',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
