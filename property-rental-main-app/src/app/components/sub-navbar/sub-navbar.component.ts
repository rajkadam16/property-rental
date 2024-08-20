import { Component } from '@angular/core';

@Component({
  selector: 'app-sub-navbar',
  templateUrl: './sub-navbar.component.html',
  styleUrls: ['./sub-navbar.component.css']
})
export class SubNavbarComponent {
  daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  daysInMonth: number[] = [];
  emptyCells: number[] = [];
searchText: any;

  ngOnInit(): void {
    this.generateCalendar(new Date().getMonth(), new Date().getFullYear());
  }

  generateCalendar(month: number, year: number): void {
    this.daysInMonth = [];
    this.emptyCells = [];

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayIndex = new Date(year, month, 1).getDay();

    for (let i = 0; i < firstDayIndex; i++) {
      this.emptyCells.push(i);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      this.daysInMonth.push(day);
    }
  }

  selectDate(day: number): void {
    alert(`Selected date: ${day}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`);
  }
}
