import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeDataViewComponent } from './fake-data-view.component';

describe('FakeDataViewComponent', () => {
  let component: FakeDataViewComponent;
  let fixture: ComponentFixture<FakeDataViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeDataViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
