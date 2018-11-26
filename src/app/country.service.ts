import { Injectable } from '@angular/core';
import { Country } from './country';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class CountryService {

  //URL from whence countries shall be fetched
  private cUrl = 'https://xc-ajax-demo.herokuapp.com/api/countries/'

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.cUrl);
  }

  addCountry(country: Country): Observable<Country>
  {
    //console.log("Recived in service");
    //console.log(`country name: ${country.name}`);
    //console.log(`country code: ${country.code}`)

    return this.http.post<Country>(this.cUrl, country, httpOptions)
  }

  constructor(private http: HttpClient) { }
}
