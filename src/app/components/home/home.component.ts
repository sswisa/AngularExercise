import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import { Observable, forkJoin } from 'rxjs';
declare var require: any;
const characters = require("../../jsons/characters.json").characters;

interface ICharacter {
  name: string;
  url: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  characters: ICharacter[];
  films;
  errMsg: string;

  constructor(private http: HttpClient,
              private router: Router) {}

  ngOnInit() {
    this.characters = <ICharacter[]>characters;
  }

  fetchMovie (character: ICharacter) {
    this.http.get(character.url)
      .subscribe((data) => {
          let filmsRequests = [];
          data["films"].forEach((filmUrl: string) => {
            filmsRequests.push(this.http.get(filmUrl));
          });
          forkJoin(filmsRequests).subscribe(results => {
            this.films = results;
          });
        },
        err => {
          this.films = null;
          this.errMsg = `${err.status} - didn't found "${character.name}"`;
          throw err;
        }
      );
  }

}


// export class HomeComponent implements OnInit {
//
//   arr: string[];
//   isTrue: boolean;
//
//   constructor() {}
//
//   ngOnInit() {
//     this.arr = [];
//     for (let i = 0; i < 10; i++) {
//       this.arr.push('Item ' + i);
//     }
//     this.isTrue = false;
//   }
//
// }
