import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl} from "@angular/forms";
import {JSONP_HOME} from "@angular/http/src/backends/browser_jsonp";

interface IBaseConverter {
  decimal: string;
  binary: string;
  octal: string;
  hexa: string;
}

@Component({
  selector: "app-base-converter",
  templateUrl: "./base-converter.component.html",
  styleUrls: ["./base-converter.component.scss"]
})
export class BaseConverterComponent implements OnInit {

  baseConverter: FormGroup;
  b: number;
  o: number;
  h: number;

  constructor() {
  }

  ngOnInit() {
    this.b = 0;
    this.o = 0;
    this.h = 0;
    this.baseConverter = new FormGroup({
      decimal: new FormControl(""),
      binary: new FormControl(""),
      octal: new FormControl(""),
      hexa: new FormControl("")
    });
  }

  decimalChanged = (oldValue: string, newValue: string): void => {
    if (newValue !== "") {
      this.baseConverter.patchValue({
        binary: parseInt(newValue, 10).toString(2),
        octal: parseInt(newValue, 10).toString(8),
        hexa: parseInt(newValue, 10).toString(16)
      });
    } else {
      this.baseConverter.patchValue({
        binary: "",
        octal: "",
        hexa: ""
      });
    }
  }

  binaryChanged = (oldValue: string, newValue: string): void => {
    this.b++;
    if (this.b === 1) {
      if (newValue !== "")
        this.baseConverter.patchValue({decimal: parseInt(newValue, 2).toString(10)});
      else
        this.baseConverter.patchValue({decimal: ""});
      this.b = 0;
    }
  }

  octalChanged = (oldValue: string, newValue: string): void => {
    this.o++;
    if (this.o === 1) {
      if (newValue !== "")
        this.baseConverter.patchValue({decimal: parseInt(newValue, 8).toString(10)});
      else
        this.baseConverter.patchValue({decimal: ""});
      this.o = 0;
    }
  }

  hexaChanged = (oldValue: string, newValue: string): void => {
    this.h++;
    if (this.h === 1) {
      if (newValue !== "")
        this.baseConverter.patchValue({decimal: parseInt(newValue, 16).toString(10)});
      else
        this.baseConverter.patchValue({decimal: ""});
      this.h = 0;
    }
  }
}
