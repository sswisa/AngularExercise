import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {IUser} from "../../models/interfaces";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

interface ILoginForm {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  languages: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  formType: string;

  constructor(private http: HttpClient,
              private router: Router) {}

  ngOnInit() {
    this.formType = 'template';
    this.loginForm = new FormGroup({
      firstname: new FormControl("Shimon", Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('^[a-zA-Z]+$')
      ])),
      lastname: new FormControl("Swisa", this.textValidator),
      username: new FormControl(""),
      password: new FormControl(""),
      languages: new FormControl("")
    });
  }

  textValidator = (control: FormControl): any => {
    if (control.value.length < 3) {
      return {'lastname': true};
    }
  };

  onSubmit = (): void => {
    this.http.post("http://localhost:8081/login", <IUser>{
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    })
      .subscribe(
        data => {
          console.log(data);
          const token: string = data["token"];
          if (token) {
            localStorage.setItem('currentUser', JSON.stringify({
              username: this.loginForm.value.username,
              token: token
            }));
            this.router.navigate(['/login']);
          }
        },
        err => {
          throw err;
        }
      );
  }

}
