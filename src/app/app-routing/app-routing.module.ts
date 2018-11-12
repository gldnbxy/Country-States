import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from '../countries/countries.component';
import { AddCountryComponent } from '../add-country/add-country.component';
import { AddStateComponent } from '../add-state/add-state.component';


const routes: Routes = [
  { path: '', redirectTo: '/country-state', pathMatch: 'full' },
  { path: 'country-state', component: CountriesComponent },
  { path: 'addCountry', component: AddCountryComponent },
  { path: 'addStates', component: AddStateComponent}
]
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
