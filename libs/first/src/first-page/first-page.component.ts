import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FakeData } from '@ngrx-firestore-examples/db';
import { Observable } from 'rxjs/Observable';
import { selectFirstAll } from '../+state/first.reducer';


@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  fakeData$: Observable<FakeData[]>;
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.fakeData$ = this.store.select(selectFirstAll);
  }

}
