import { Component, Input } from '@angular/core';
import { FakeData } from '@ngrx-firestore-examples/db';

@Component({
  selector: 'fake-data-view',
  templateUrl: './fake-data-view.component.html',
  styleUrls: ['./fake-data-view.component.css']
})
export class FakeDataViewComponent {

  @Input() fakeData: FakeData[];
  
}
