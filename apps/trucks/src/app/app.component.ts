import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Truck } from '@skydev/data';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'skydev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'trucks';
  trucks$: Observable<Truck[]>;

  constructor(private readonly http: HttpClient) {
    this.trucks$ = this.fetch();
  }

  addTruck(): void {
    this.http.post('/api/addTruck', {}).pipe(
      take(1)
    ).subscribe(() => {
      this.trucks$ = this.fetch();
    });
  }

  private fetch(): Observable<Truck[]> {
    return this.http.get<Truck[]>('/api/trucks');
  }
}
