import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HeroesComponent } from './heroes/heroes.component';
import {Code404Component} from './code404/code404.component';
import {MessagesComponent} from './messages/messages.component';
import {FormComponent} from './form/form.component';
import {TemplateFormComponent} from './template-form/template-form.component';
import {HelpComponent} from './help/help.component';
import {LoginGuard} from './guard/login.guard';
import {UnsavedGuard} from './guard/unsaved.guard';
import {ProductResolve} from './guard/product.resolve';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProductComponent} from './product/product.component';
import {AnotherProductComponent} from './another-product/another-product.component';
import {ValidateFormComponent} from './validate-form/validate-form.component';
import {PipeComponent} from './pipe/pipe.component';

//注意：使用路由守卫时一定要改路由模块中的provides中声明该守卫
const routes:Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/form', pathMatch: 'full'},
  {path: 'form', component: FormComponent, children:[
      {path: '', component: ReactiveFormComponent},
      {path: 'validate', component: ValidateFormComponent},
      {path: 'template', component: TemplateFormComponent},
    ], canActivate: [LoginGuard], canDeactivate: [UnsavedGuard]},
  {path: 'heros', component: HeroesComponent},
  {path: 'product', component: ProductComponent},
  {path: 'anotherProduct', component: AnotherProductComponent},
  {path: 'pipe', component: PipeComponent},
  {
    path: 'message/:id',
    component: MessagesComponent,
    resolve: { product: ProductResolve}
    },
  {path: 'help', component: HelpComponent, outlet: 'aux'},
  {path: '**', component: Code404Component}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: [],
  providers: [LoginGuard, UnsavedGuard, ProductResolve]
})
export class AppRoutingModule { }

/**
 * 路由的几个重要的对象：
 *  1.Routes 路由配置，保存着那个url对应显示那个组件，以及在那个RouterOutlet中展示组件
 *  2.RouterOutlet在html中标记路由内容呈现的占位符指令
 *  3.Router负责在运行时执行路由的对象，可以通过调用起navigate()和navigateByUrl()方法来导航到一个指定的路由
 *  4.RouterLink在HTML中声明路由导航用滚动指令
 *  5.ActivateRoute当前激活的路由对象，保存着当前路由的信息，如路由地址，路由参数等
 * 注意：
 * 1.路由的路径不能写‘/’,因为这样是代表根路由，而首层路由，默认是根路由
 * 2.**匹配前面匹配不到的路由
 *
 */
