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
        { path: 'logout', loadChildren: '@ngrx-firestore-examples/logout#LogoutModule' }
/*        { path: 'login', loadChildren: '@daycare/login#LoginModule' },
        { path: 'logout', loadChildren: '@daycare/logout#LogoutModule', canLoad: [AuthGuard] },
        { path: 'profile', loadChildren: '@daycare/profile#ProfileModule', canLoad: [AuthGuard] },
        { path: 'attendance', loadChildren: '@daycare/attendance#AttendanceModule', canLoad: [AuthGuard] },
        { path: 'payment', loadChildren: '@daycare/payment#PaymentModule', canLoad: [AuthGuard] },
        { path: 'rebate', loadChildren: '@daycare/rebate#RebateModule', canLoad: [AuthGuard] },
        { path: 'summary', loadChildren: '@daycare/summary#SummaryModule', canLoad: [AuthGuard] }
      */      ],
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
