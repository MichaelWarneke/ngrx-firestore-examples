import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LogoutPageComponent } from './logout-page/logout-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([ 
      {path: '', pathMatch: 'full', component: LogoutPageComponent}
    ]), 
    ],
  declarations: [LogoutPageComponent]
})
export class LogoutModule {
}
