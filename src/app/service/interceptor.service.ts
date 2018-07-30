import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, mergeMap} from 'rxjs/operators';
// import {NzMessageService} from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})
//此拦截器还存在 类似警告的问题，但是不影响项目的运转，下次来处理此bug
export class InterceptorService implements HttpInterceptor {

  //此demo暂时未引用antd,因此暂时屏蔽此注入
  // constructor(private message: NzMessageService) {}
  constructor(){}
  //顶部全局提示信息
  createMessage(type: string, message:string): void {
    // this.message.create(type, message);
  }
  //错误处理函数
  errorReport(res){
    switch (res.code) {
      case 400:
        this.createMessage('error', `${res.code} + ${res.message}`);
        break;
      case 0:
        this.createMessage('error', `${res.code} + ${res.message}`);
        break;
      case 401:
        this.createMessage('error', `${res.code} + ${res.message}`);
        break;
      case 200:
        this.createMessage('error', `${res.code} + ${res.message}`);
        break;
      case 404:
        this.createMessage('error', `${res.code} + ${res.message}`);
        break;
      case 403:
        this.createMessage('error', `${res.code} + ${res.message}`);
        break;
      default:
        this.createMessage('error', `${res.code} + 未知错误`);
    }
  }

  //请求拦截器 添加头和默认的参数
  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
    console.log('interceptor',req);
    const jwtReq = req.clone({
      headers:req.headers.set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8'),
      params: req.params.set('token', sessionStorage.getItem('key'))
    });
    return next.handle(jwtReq)
      .pipe(
        mergeMap((event: any) => {
          if (event instanceof HttpResponse && event.status != 200) {
            console.log("请求错误 1", event);
            return Observable.create(observer => observer.error(event));
          }
          console.log("请求成功 2", event);
          return Observable.create(observer => observer.next(event)); //请求成功返回响应
        }),
        catchError((res: HttpResponse<any>) => {   //请求失败处理
          console.log("请求失败处理", res);
          this.createMessage('error', `res.statusText`);
          return Observable.create(observer => observer.error(event));
        })
      );

  }
}
