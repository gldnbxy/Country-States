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

  //URL from whence countries shall be fetched
  private cUrl = 'https://xc-ajax-demo.herokuapp.com/api/countries/'

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.cUrl);
  }
  constructor(private http: HttpClient) { }
}
