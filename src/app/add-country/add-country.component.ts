import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {

  add(countryId: number, countryCode: string, countryName: string)
  {
    console.log(`ID: ${countryId}, Code: ${countryCode}, Name: ${countryName}`);
  }

  constructor(private acountry: Country, countryService: CountryService) { }

  ngOnInit() {
  }

}
