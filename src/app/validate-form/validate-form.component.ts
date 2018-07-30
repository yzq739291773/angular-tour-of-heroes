import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
// import {Observable , of} from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-validate-form',
  templateUrl: './validate-form.component.html',
  styleUrls: ['./validate-form.component.css']
})
export class ValidateFormComponent implements OnInit {

  //自定义校验器
  // 这些校验器可以移到单独的文件中，以便其他页面共用这些相同的校验器

  //对单一字段进行校验(13511111111)
  mobileValidator(control:FormControl):any{
    console.log("自定义校验器",control)
    let myreg = /^(((13[0-9]{1})| (15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    let valid = myreg.test(control.value);
    console.log("111111校验结果为："+valid);
    // 返回空代表校验通过
    return valid ? null : {mobile:true}
  }

  //异步校验器
  mobileAsyncValidator(control:FormControl):any{
    console.log("自定义校验器",control)
    let myreg = /^(((13[0-9]{1})| (15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    let valid = myreg.test(control.value);
    console.log("111111校验结果为："+valid);
    // 返回空代表校验通过
    // return Observable.of(valid ? null : {mobile:true}).delay(5000);
  }

  //对多个字段进行效验(密码和确认密码一致)
  equalValidator(group: FormGroup):any{
    let password:FormControl = group.get("password") as FormControl;
    let pconfirm:FormControl = group.get("pconfirm") as FormControl;
    let valid:boolean = (password.value === pconfirm.value);
    console.log("密码校验结果："+ valid);

    //对于校验字段的提示信息，前面都是硬编码在模板中，其实也可以由校验器提供
    return valid ? null : {equal:{desc:'密码与确认密码不一致'}}
  }


  formModel:FormGroup;

  // constructor() {
  //   this.formModel = new FormGroup({
  //     username:new FormControl(),
  //     mobile:new FormControl(),
  //     passwordGroup:new FormGroup({
  //       password:new FormControl(),
  //       pconfirm:new FormControl()
  //     })
  //   });
  // }

  //FormBuilder重构
  constructor(fb:FormBuilder){
    this.formModel = fb.group({
      //第一个参数为默认值，第二个参数为校验器数组，第三个为异步校验器数组
      username:['默认值',[Validators.required, Validators.minLength(6)]],
      mobile:['',this.mobileValidator,this.mobileAsyncValidator],

      //同时校验几个字段，就对formGroup定义校验器
      passwordGroup:fb.group({
        password:['',Validators.minLength(6)],
        pconfirm:[]
      },{validator:this.equalValidator})
    })
  }
  ngOnInit() {
  }
  onSubmit(){

    //校验单个表单
    let isValid:boolean = this.formModel.get('username').valid;
    console.log("username的效验结果"+isValid);

    //不仅可以知道效验是否通过，还可以知道具体的校验信息
    let errors:any = this.formModel.get('username').errors;
    console.log('username的错误信息是：'+JSON.stringify(errors));

    //  只有当表单中所有的校验器都成功时，表单校验器才为true
    if(this.formModel.valid){
      console.log(this.formModel.value)
    }
  }

}
