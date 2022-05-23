import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrucksComponent } from './trucks/trucks.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TrucksComponent],
  exports: [TrucksComponent],
})
export class UiModule {}
