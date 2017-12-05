import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild([{path: '', pathMatch: 'full', component: LoginPageComponent}]) 
  ],
  declarations: [LoginPageComponent]
})
export class LoginModule {
}
