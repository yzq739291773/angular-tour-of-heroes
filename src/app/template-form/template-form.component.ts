import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSubmit(v,valid){
    console.log(v)
    console.log(22,valid)
  }
  mobileValid:boolean = true;
  mobileUntouched:boolean = true;
  onMobileInput(form:NgForm){
    if(form){
      this.mobileValid = form.form.get('mobile').valid;
      this.mobileUntouched = form.form.get('mobile').untouched;
    }
  }

  onClick(username){
    console.log(username.value)
  }

}
