import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import {HeroService} from './service/hero.service';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { Code404Component } from './code404/code404.component';
import { FormComponent } from './form/form.component';
import { HelpComponent } from './help/help.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './service/in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ProductResolve} from './guard/product.resolve';
import {ProductService} from './service/product.service';
import { ProductComponent } from './product/product.component';
import { AnotherProductComponent } from './another-product/another-product.component';
import {LoggerService} from './service/logger.service';
import {AnotherProductService} from './service/another-product.service';
import { ValidateFormComponent } from './validate-form/validate-form.component';
import { MobileValidatorDirective } from './directive/mobile-validator.directive';
import { PipeComponent } from './pipe/pipe.component';
import { MultiplePipe } from './pipes/multiple.pipe';
import {InterceptorService} from './service/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    Code404Component,
    FormComponent,
    HelpComponent,
    HeroSearchComponent,
    DashboardComponent,
    ProductComponent,
    AnotherProductComponent,
    ValidateFormComponent,
    MobileValidatorDirective,
    PipeComponent,
    MultiplePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    {provide: HeroService, useClass: HeroService},
    {provide: ProductService, useClass: ProductService},
    LoggerService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

/**
 * 1.NgModule装饰器来声明一个模块
 * 2.declarations属性声明模块中有什么东西，这里只能声明组件、指令、管道
 * 3.imports属性声明此模块依赖的其他摸块
 * 4.providers声明模块提供的服务,这些服务是需要依赖注入的，这里定义了一个对象在被注入到组件之前如何被实例化
 * 5.bootstrap声明模块的主组件
 */
