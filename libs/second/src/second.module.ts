import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SecondPageComponent } from './second-page/second-page.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { secondReducer } from './+state/second.reducer';
import { secondInitialState } from './+state/second.init';
import { SecondEffects } from './+state/second.effects';
import { SecondService } from './services/second.service';
import { SharedComponentsModule } from '@ngrx-firestore-examples/shared-components';

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild([{path: '', pathMatch: 'full', component: SecondPageComponent}]), 
    StoreModule.forFeature('second', secondReducer), 
    EffectsModule.forFeature([SecondEffects]),
    SharedComponentsModule
  ],
  declarations: [SecondPageComponent],
  providers: [SecondEffects, SecondService]
})
export class SecondModule {
}
