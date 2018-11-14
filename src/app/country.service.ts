import { Injectable } from '@angular/core';
import { Country } from './country';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

const httpOptions = {
  header: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class CountryService {

  //a list of countries
  private countries: Country[];

  //URL from whence countries shall be fetched
  private cUrl = 'https://xc-ajax-demo.herokuapp.com/api/countries/'

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.cUrl);
  }

  addCountry(cid: number, cCode: string, cName: string): boolean
  {
    this.http.get<Country[]>(this.cUrl).subscribe(countries => this.countries = countries);
    return false;
  }

  constructor(private http: HttpClient) { }
}
