import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageComponent } from './login/page/page.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { WithAcessComponent } from './login/page/with-acess/with-acess.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, CommonModule, AppRoutingModule],
  declarations: [
    AppComponent,
    LoginComponent,
    PageComponent,
    WithAcessComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
