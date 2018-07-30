import { Component, OnInit } from '@angular/core';
import {Observable, Observer} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  //利用Observable构造函数的静态方法of，定义一个Observable实例
  // myObservable: Observable = Observable.create(1, 2, 3);
  //定义一个Observe 观察者是（是一个对象，这个对象定义了一些回调函数来处理可观察对象可能会发来的三种通知：）
  // public myObserve = {
  //     next: x => console.log('Observe got a next value:' + x);
  //     error: err => console.error('Observe got an error:' + err);
  //     complete: () => console.log('Observe got a complete notification');
  // }
  ngOnInit() {
    //消费者订阅
    // this.myObservable.subscribe(this.myObserve);
  }

}
