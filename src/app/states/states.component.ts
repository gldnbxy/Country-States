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

  @Input() cCode: string;

  states: State[];

  getStates(){
    this.stateService.getStates(this.cCode).subscribe(states => this.states = states);
  }

  constructor(private stateService: StateService) { }

  ngOnInit() {
    this.getStates();
  }

}
