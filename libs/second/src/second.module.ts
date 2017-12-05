import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SecondPageComponent } from './second-page/second-page.component';

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild([{path: '', pathMatch: 'full', component: SecondPageComponent}]) 
  ],
  declarations: [SecondPageComponent]
})
export class SecondModule {
}
