import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  //1.响应式比哦啊单的三个类，以及如何利用这三个类的用法

  // 构成表单的基本元素，通常代表一个input，但是也可以代表一个复杂的表单如日历，参数为表单元素的初始值
  // username:FormControl = new FormControl("aaa");
  //
  // 既可以代表表单的一部分，也可以代表整个表单
  // formModel:FormGroup = new FormGroup({
  //   from : new FormControl(),
  //   to:new FormControl()
  // })
  //
  // 代表一个可以增长的字段集合,注意他接受的参数是一个数组，没有一个相关的key,访问里面的子集只能用序号
  // emials:FormArray = new FormArray([
  //   new FormControl(),
  //   new FormControl(),
  // ])

  //2.响应式表单的指令

  // 响应式表单的指令不能和模板式表单的指令一样，可以别本地模板变量引用，他是不能被引用的。所以他只能在代码中操作，而不能在模板中操作
  formModel:FormGroup = new FormGroup({
    username : new FormControl("aaa"),
    dateRange:new FormGroup({
      from : new FormControl(),
      to: new FormControl()
    }),
    emails:new FormArray([
      new FormControl("aa.com"),
      new FormControl("bb.com")
    ])
  })

  // userName:FormControl = new FormControl("aaa");

  addEmail(){
    let emails = this.formModel.get("emails") as FormArray;
    emails.push(new FormControl());
  }

  onSubmit(){
    console.log(this.formModel.value);
  }

  constructor(){

  }
  ngOnInit() {
  }
}
