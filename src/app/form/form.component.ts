import { Component, OnInit } from '@angular/core';
// import {Observable} from 'rxjs';
// import {Http} from '@angular/http';
// import 'rxjs/Rx'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // public dataSource: Observable<any>;
  // public list: Array<any> = [];
  // constructor( private http: Http) {
    // let myHeaders:Headers = new Headers();
    // myHeaders.append("Authorization", "Basic 123456");
    // this.dataSource = this.http.get('/api/products').map(res => {
    //   res.json();
    // });

  // }

  ngOnInit() {
    // this.dataSource.subscribe(
    //   data=>{
    //     this.list = data;
    //   }
    // )
  }

}
