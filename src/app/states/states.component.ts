import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../country';
import { State } from '../state';
import { StateService } from '../state.service';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})

export class StatesComponent implements OnInit {

  @Input() country: Country;

  states: State[];

  info = this.country.code;

  getStates(){
    this.stateService.setcCode(this.info);
    this.stateService.getStates().subscribe(states => this.states = states);
  }

  constructor(private stateService: StateService) { }

  ngOnInit() {
  }

}
