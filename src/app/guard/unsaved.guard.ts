import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {FormComponent} from '../form/form.component';
import {Observable} from 'rxjs';

export class UnsavedGuard implements CanDeactivate<FormComponent>{
  canDeactivate(component: FormComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return window.confirm("你还没有保存，确定要离开吗？");
  }

}
