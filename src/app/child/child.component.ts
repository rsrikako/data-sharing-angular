import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  /*
    value is the variable's data in child component 
    which is to be shared with parent component variable
  */
  /*
    we use @Input decorator to bind the changes 
    in parent component variable to the child component variable
    Parent --> Child
  */
  @Input() value = '';
   /*
    we use @Output decorator to bind the changes 
    in Child component variable to the parent component variable
    Child --> Parent
    Using EventEmitter in @angular/core
  */
  @Output() valueChange = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  /*
    updateValue method is called by every keyup action 
    of the input field in child component
  */
  updateValue(event){

    this.value = event.target.value;
    /*
      we need to emit an event with the updated new value 
      wherever the value is changed in the child component
      using the EventEmitter which will be listened 
      and updated in the parent compinent
    */
    this.valueChange.emit(this.value);
  }
}
