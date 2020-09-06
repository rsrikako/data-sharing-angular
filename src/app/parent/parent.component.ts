import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  value = ""; // value to be shared between parent and child
  constructor() { }

  ngOnInit() {
  }

}
