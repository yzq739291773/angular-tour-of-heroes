import { Directive } from '@angular/core';
import {NG_VALIDATORS} from '@angular/forms';
import {mobileValidator} from '../validator/validator';

@Directive({
  //这是指令的引用名，可以更改
  selector: '[mobile]',
  providers:[{provide:NG_VALIDATORS, useValue:mobileValidator,multi:true}]
})
export class MobileValidatorDirective {

  constructor() { }

}
