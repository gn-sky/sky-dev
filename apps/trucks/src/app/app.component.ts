import { Component } from '@angular/core';

interface Truck {
  number: string;
}

@Component({
  selector: 'skydev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'trucks';
  trucks: Truck[] = [{ number: 'S600' }, { number: '2'}];

  addTruck() {
    const truck = { number: '3' };
    this.trucks.push(truck);
  }
}
