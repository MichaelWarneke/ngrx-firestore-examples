import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { getIsAuthenticated, getError } from '@ngrx-firestore-examples/auth';
import { AuthActionTypes } from '@ngrx-firestore-examples/auth/src/+state/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  isAuthenticated$: Observable<boolean>;
  error$: Observable<string>;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.isAuthenticated$ = this.store.select(getIsAuthenticated);
    this.error$ = this.store.select(getError);
  }

  signIn() {
    this.store.dispatch({type: AuthActionTypes.LOGIN, payload: {email: "a@b.com", password: "123456"}});
  }

  signOut() {
    this.store.dispatch({type: AuthActionTypes.LOGOUT, payload: null});
  }

}
