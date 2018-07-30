import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  birthday:Date = new Date();
  PI:number = 3.1415926;
  size:number = 7;
  constructor() { }

  ngOnInit() {
  }

}
