import { Component, Input, OnInit } from '@angular/core';
import { Truck } from '@skydev/data';

@Component({
  selector: 'skydev-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.scss'],
})
export class TrucksComponent implements OnInit {
  @Input() trucks: Truck[] | null = [];
  
  constructor() {}

  ngOnInit(): void {}
}
