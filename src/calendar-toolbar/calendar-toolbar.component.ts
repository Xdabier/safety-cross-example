import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {characterMap, ICalendarCharacter} from '../config/characters.config';

export interface ISelectDateOption {
  label: string;
  value: number;
}

@Component({
  selector: 'app-calendar-toolbar',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './calendar-toolbar.component.html',
  styleUrl: './calendar-toolbar.component.css'
})
export class CalendarToolbarComponent implements OnInit, OnChanges {
  @Input() selectedYear: number = new Date().getFullYear();
  @Input() selectedMonth: number = new Date().getMonth();
  @Input() selectedCharacter: ICalendarCharacter = '+';

  @Output() selectedYearChange = new EventEmitter<number>();
  @Output() selectedMonthChange = new EventEmitter<number>();
  @Output() selectedCharacterChange = new EventEmitter<ICalendarCharacter>();

  years: ISelectDateOption[] = []

  months: ISelectDateOption[] = []

  charactersOptions = Object.keys(characterMap).map(key => ({
    label: key.toUpperCase(),
    value: key
  }));

  private _initMonthsAndYearsOptions() {
    this.years = Array(40).fill(0).map((_, i) => {
      return {
        label: new Date(2000 + i, 0, 1).getFullYear().toString(),
        value: 2000 + i
      };
    })

    this.months = Array(12).fill(0).map((_, i) => {
      return {
        label: new Date(this.selectedYear, i, 1).toLocaleString(undefined, { month: 'long' }),
        value: i
      };
    });
  }

  ngOnInit() {
    this._initMonthsAndYearsOptions();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedYear']) {
      this._initMonthsAndYearsOptions();
    }
  }
}
