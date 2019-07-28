import {Component, OnInit} from "@angular/core";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'sort'
})

@Component({
  selector: 'app-pipes',
  templateUrl: 'pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  uppercase: string;
  lowercase: string;
  day: Date;
  numbers: number[];

  constructor() {
  }

  ngOnInit() {
    this.uppercase = "uppercase";
    this.lowercase = "LOWERCASE";
    this.day = new Date(1986, 6, 9);
    this.numbers = [21, 3, 1, 8, 12];
  }

}
