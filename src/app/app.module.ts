import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { StatesComponent } from './states/states.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AddCountryComponent } from './add-country/add-country.component';
import { AddStateComponent } from './add-state/add-state.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    StatesComponent,
    AddCountryComponent,
    AddStateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
