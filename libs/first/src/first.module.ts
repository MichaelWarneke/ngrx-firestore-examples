import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { firstReducer } from './+state/first.reducer';
import { firstInitialState } from './+state/first.init';
import { FirstEffects } from './+state/first.effects';
import { SharedComponentsModule } from '@ngrx-firestore-examples/shared-components';

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild([{path: '', pathMatch: 'full', component: FirstPageComponent}]), 
    StoreModule.forFeature('first', firstReducer), 
    EffectsModule.forFeature([FirstEffects]),
    SharedComponentsModule,
  ],
  declarations: [FirstPageComponent],
  providers: [FirstEffects]
})
export class FirstModule {
}
