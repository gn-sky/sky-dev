import { Injectable } from '@nestjs/common';

interface Truck {
  number: string;
}

@Injectable()
export class AppService {
  trucks: Truck[] = [{ number: 'Truck S600' }, { number: 'Truck 2'}];

  getTrucks(): Truck[] {
    return this.trucks;
  }

  addTruck() {
    this.trucks.push({
      number: `New truck ${Math.floor(Math.random() * 1000)}`
    })
  }
}
