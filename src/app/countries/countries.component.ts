import { Component, OnInit } from '@angular/core';
import { Country } from '../Country';
import { CountryService } from '../country.service';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries: Country[];
  selectedCountry: Country;

  constructor( private countryService: CountryService ) { }

  onChange(country): void {
    this.selectedCountry = country;
  }

  getCountries(): void {
    this.countryService.getCountries().subscribe(countries => this.countries = countries);
  }

  ngOnInit() {
    this.getCountries();
  }

}
