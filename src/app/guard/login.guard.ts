import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

export class LoginGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let loggedIn:boolean = Math.random() < 0.5;
    if(!loggedIn){
      console.log("用户未登陆");
    }
    return loggedIn;
  }
}
