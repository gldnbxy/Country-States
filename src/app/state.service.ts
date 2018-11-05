import { Injectable } from '@angular/core';
import { State } from './state';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class StateService {
  //The Country Code
  cCode: string;
  //The generic state url
  sUrl: string;

  //Setter for country code
  setcCode(cc: string)
  {
    this.cCode = cc;
    this.sUrl = `https://xc-ajax-demo.herokuapp.com/api/countries/${this.cCode}/states/`
  }

  //Getter for states for given country
  getStates(): Observable<State[]>
  {
    return this.http.get<State[]>(this.sUrl);    
  }

  
  constructor(private http: HttpClient) { }
}
