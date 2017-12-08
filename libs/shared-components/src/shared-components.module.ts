import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakeDataViewComponent } from './components/fake-data-view/fake-data-view.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FakeDataViewComponent],
  exports: [FakeDataViewComponent]
})
export class SharedComponentsModule {
}
