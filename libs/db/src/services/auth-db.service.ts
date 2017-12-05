import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { User } from 'firebase/app';

@Injectable()
export class AuthDbService {

  constructor(private afAuth: AngularFireAuth) { }

  login(email: string, password: string): Promise<any> {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(val => {
        return Promise.resolve(val);
      })
      .catch(val => {
        return Promise.reject(val);
      });
  }

  logout(): Promise<any> {
    return this.afAuth.auth
      .signOut()
      .then(val => {
        return Promise.resolve(val);
      })
      .catch(val => {
        return Promise.reject(val);
      });
  }

  getAuthState(): Observable<User> {
    return this.afAuth.authState;
  }
}
