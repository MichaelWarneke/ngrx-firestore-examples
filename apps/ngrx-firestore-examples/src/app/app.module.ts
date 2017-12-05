import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './+state/app.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { DbModule } from '@ngrx-firestore-examples/db';
import { AuthModule, AuthGuard } from '@ngrx-firestore-examples/auth';
import { reducers, metaReducers } from './+state/app.index';
import { CustomRouterStateSerializer } from './shared/utils';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot(
      [
        { path: '', component: LandingPageComponent },
        { path: 'login', loadChildren: '@ngrx-firestore-examples/login#LoginModule' }, 
        { path: 'first', loadChildren: '@ngrx-firestore-examples/first#FirstModule', canLoad: [AuthGuard] }, 
        { path: 'second', loadChildren: '@ngrx-firestore-examples/second#SecondModule', canLoad: [AuthGuard] }
      ],
      {
        initialNavigation: 'enabled'
      }
    ),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule,
    EffectsModule.forRoot([AppEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    DbModule.forRoot(),
    AuthModule.forRoot(),
  ],
  declarations: [AppComponent, LandingPageComponent],
  bootstrap: [AppComponent],
  providers: [
    AppEffects,
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer }
  ]
})
export class AppModule { }
