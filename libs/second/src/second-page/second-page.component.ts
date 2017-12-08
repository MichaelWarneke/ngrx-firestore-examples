import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FakeData } from '@ngrx-firestore-examples/db';
import { SecondService } from '../services/second.service';


@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {

  fakeData$: Observable<FakeData[]>;
  constructor(private service: SecondService) { }

  ngOnInit() {
    this.fakeData$ = this.service.getData();
  }
}
