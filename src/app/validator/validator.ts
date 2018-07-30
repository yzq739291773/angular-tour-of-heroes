import {FormControl} from '@angular/forms';

export function  mobileValidator(control:FormControl):any{
  console.log("自定义校验器",control)
  let myreg = /^(((13[0-9]{1})| (15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  let valid = myreg.test(control.value);
  console.log("111111校验结果为："+valid);
  // 返回空代表校验通过
  return valid ? null : {mobile:true}
}
