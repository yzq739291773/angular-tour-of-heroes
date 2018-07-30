import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';

  constructor(private router:Router){
      console.log(environment.domainUrl)
  }
  toMessage(){
    console.log("我是编程式导航函数11111")
    this.router.navigate(['/message',3]);
  }
}
