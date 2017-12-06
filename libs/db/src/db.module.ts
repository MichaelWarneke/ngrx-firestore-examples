import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthDbService } from './services/auth-db.service';
import { DataDbService } from './services/data-db.service';
import { firebaseData } from 'firebase-data';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(firebaseData), 
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
  ]
})
export class DbModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DbModule,
      providers: [AuthDbService, DataDbService]
    }
  }
}
