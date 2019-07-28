import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
declare var require: any;
const characters = require("../../jsons/characters.json").characters;

interface ICharacters {
  name: string;
  url: string;
}

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  characters: ICharacters;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.characters = <ICharacters>characters;
    //     // this.http.post("http://localhost:8081/login", <IUser>{
    //   username: this.loginForm.value.username,
    //   password: this.loginForm.value.password
    // })
    //   .subscribe(
    //     data => {
    //       console.log(data);
    //       const token: string = data["token"];
    //       if (token) {
    //         localStorage.setItem('currentUser', JSON.stringify({
    //           username: this.loginForm.value.username,
    //           token: token
    //         }));
    //         this.router.navigate(['/login']);
    //       }
    //     },
    //     err => {
    //       throw err;
    //     }
    //   );
  }

}
