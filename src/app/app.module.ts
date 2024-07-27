import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ErrorHandler } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptorService } from './errorHandle/error-interceptor.service';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ApiService } from '../../projects/tools/src/lib/api.service';


 class CustomErrorHandler implements ErrorHandler{
  handleError(error: any): void {
    console.log('An error occured',error)
  }
 }

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SinglePostComponent,
    FooterComponent,
    CategoryListComponent,

 
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [ApiService,{provide:ErrorHandler,useClass:CustomErrorHandler},{provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptorService,multi:true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
