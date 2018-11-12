import { Injectable } from '@angular/core';
import { State } from './state';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class StateService { 
  //The generic state url
  sUrl: string;

  //Getter for states for given country
  getStates(cCode: string): Observable<State[]>
  {
    this.sUrl = `https://xc-ajax-demo.herokuapp.com/api/countries/${cCode}/states/`;
    console.log(this.sUrl);
    console.log("getting states in service");
    return this.http.get<State[]>(this.sUrl);    
  }

  
  constructor(private http: HttpClient) { }
}
