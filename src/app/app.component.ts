import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  IMarkedDate,
  CustomShapeCalendarComponent
} from '../custom-shape-calendar/custom-shape-calendar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CalendarToolbarComponent} from '../calendar-toolbar/calendar-toolbar.component';
import {ICalendarCharacter} from '../config/characters.config';

const dummyMarkedDates: IMarkedDate[] = [
  {
    date: new Date(2018, 1, 1),
    markColor: 'red',
    markText: '1'
  },
  {
    date: new Date(2025, 2, 15),
    markColor: 'green',
    markText: '15'
  },
  {
    date: new Date(2025, 2, 28),
    markColor: 'yellow',
    markText: 'Hello there this is a long text and yellow too'
  },
  {
    date: new Date(2025, 2, 31),
    markColor: 'red',
    markText: 'Hello there this is a long text'
  }
];

@Component({
  selector: 'app-root',
  imports: [CustomShapeCalendarComponent, ReactiveFormsModule, FormsModule, CalendarToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'safety-cross-example';

  selectedYear: number = new Date().getFullYear();
  selectedMonth: number = new Date().getMonth();
  selectedCharacter: ICalendarCharacter = '+';
  markedDates: IMarkedDate[] = dummyMarkedDates;

  getSelectedDate() {
    return new Date(this.selectedYear, this.selectedMonth, 1);
  }

  onSelectedYearChange(year: number) {
    this.selectedYear = year;
  }

  onSelectedMonthChange(month: number) {
    this.selectedMonth = month;
  }

  onSelectedCharacterChange(character: ICalendarCharacter) {
    this.selectedCharacter = character;
  }
}
