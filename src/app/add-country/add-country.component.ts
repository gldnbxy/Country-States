import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {

  constructor(private countryService: CountryService) { }

  acountry: Country;

  add(countryName: string, countryCode: string)
  {
    let name = countryName.trim();
    let code = countryCode.trim();

    //console.log(`name: ${name}`);
    //console.log(`code: ${code}`);

    if(!countryName || !countryCode) { 
      console.log("Error nothing in input");
      return;
    }

    //console.log("sent to service");
    this.countryService.addCountry({ name, code } as Country)
      .subscribe(country => this.acountry = country);
  }

  ngOnInit() {
  }
}