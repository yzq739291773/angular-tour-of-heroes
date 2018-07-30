import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Product} from '../messages/messages.component';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class ProductResolve implements Resolve<Product>{
  constructor(private router: Router){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> | Promise<Product> | Product {
    let productId:number = route.params['id'];
    if(productId == 2){
      return new Product(2,"iphon7");
    }else{
      this.router.navigate(['/heroskjk']);
    }
    return undefined;
  }

}
