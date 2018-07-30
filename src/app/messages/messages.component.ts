import { Component, OnInit } from '@angular/core';
import { MessageService } from '../service/message.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  public id:number;
  public productId: number;
  public productName: string;
  constructor(public messageService: MessageService, private routeInfo:ActivatedRoute) {}

  ngOnInit() {
    //参数快照(存在参数不会及时更新的问题)
    // this.id = this.routeInfo.snapshot.params['id'];
   //参数订阅
    this.routeInfo.params.subscribe((params:Params) => {
      this.id = params['id'];
    })

    this.routeInfo.data.subscribe((data:{product:Product}) =>{
      this.productId = data.product.id;
      this.productName = data.product.name;
    })

  }

}

export class Product {
  constructor( public id: number, public name: string){

  }
}
