import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { AuthDbService } from '@ngrx-firestore-examples/db';
import { Observable } from 'rxjs/Observable';
import { map, take, tap } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanLoad {

  constructor(private authDb: AuthDbService, private router: Router) { }

  canLoad(route: Route): Observable<boolean> {
    let url = `/${route.path}`;

    return this.authDb
      .getAuthState().pipe(
        take(1),
        map(user => !!user),
        tap(loggedIn => {
          if (!loggedIn) {
            console.log(url + ' : access denied');
            this.router.navigate(['/login'])
          }
        })
      )
  }
}
