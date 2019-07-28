import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-items-form',
  templateUrl: './items-form.component.html',
  styleUrls: ['./items-form.component.scss']
})
export class ItemsFormComponent implements OnInit {

  items: string[];
  newItem: string;

  constructor() {
  }

  ngOnInit() {
    this.items = ["Angular 4", "AngularJS", "ReactJS"];
    this.newItem = "Default";
  }

  pushItem = (): void => {
    if (this.newItem === "") return;
    this.items.push(this.newItem);
    this.newItem = "";
  }

  removeItem = (i: number): void => {
    this.items.splice(i, 1);
  }

}
