import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CustomShapeCalendarTooltipDirective} from '../custom-shape-calendar-tooltip.directive';
import {characterMap, ICalendarCharacter} from '../config/characters.config';

export interface IMarkedDate {
  date: Date;
  markColor: string;
  markText: string;
}

export interface ICalendarCell {
  characterIndex: number;
  date: Date;
}

@Component({
  selector: 'app-custom-shape-calendar',
  imports: [
    CustomShapeCalendarTooltipDirective
  ],
  templateUrl: './custom-shape-calendar.component.html',
  styleUrl: './custom-shape-calendar.component.css'
})
export class CustomShapeCalendarComponent implements OnInit, OnChanges {
  @Input() cellSize: number = 40;
  @Input() markedDates: IMarkedDate[] = [];
  @Input() selectedDate: Date = new Date();
  @Input() character: ICalendarCharacter = '+';

  gridIndexes = Array(49).fill(0).map((_, i) => i);
  characterCellsArray: number[] = [];
  daysArray: ICalendarCell[] = [];

  private _getMatrixIndexes(): number[] {
    const rows = characterMap[this.character];
    if (!rows) return [];

    const indexes: number[] = [];
    for (let row = 0; row < 7; row++) {
      const binary = rows[row].toString(2).padStart(7, '0');
      for (let col = 0; col < 7; col++) {
        if (binary[col] === '1') {
          indexes.push(row * 7 + col);
        }
      }
    }
    return indexes;
  }

  private _mapMonthDaysToCharacterIndexes(characterIndexes: number[]): ICalendarCell[] {
    const daysInSelectedMonth = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth() + 1, 0).getDate();

    const mappedIndexes: ICalendarCell[] = [];
    for (let i = 0; i < daysInSelectedMonth; i++) {
      mappedIndexes.push({
        characterIndex: characterIndexes[i],
        date: new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), i + 1)
      });
    }
    return mappedIndexes;
  }

  private _getCellMarkedDate(index: number): IMarkedDate | undefined {
    return this.markedDates.find(markedDate => {
      const cellDay = this.daysArray.find(day => {
        const isSameDay = markedDate.date.getDate() === day.date.getDate();
        const isSameMonth = markedDate.date.getMonth() === day.date.getMonth();
        const isSameYear = markedDate.date.getFullYear() === day.date.getFullYear();

        return isSameDay && isSameMonth && isSameYear;
      });

      return cellDay && cellDay.characterIndex === index;
    });
  }

  isCellADay(index: number): boolean {
    const day = this.daysArray.find(day => day.characterIndex === index);

    return !!day;
  }

  dayInfoNumber(index: number): string {
    const day = this.daysArray.find(day => day.characterIndex === index);

    if (!day) return '';

    return day.date.getDate() + '';
  }

  drawCalendar() {
    const characterIndexes = this._getMatrixIndexes();
    this.characterCellsArray = characterIndexes;

    this.daysArray = this._mapMonthDaysToCharacterIndexes(characterIndexes);
  }

  getCellColor(index: number): string {
    const markedDate = this._getCellMarkedDate(index);

    if (markedDate) {
      return markedDate.markColor;
    }

    return '';
  }

  getCellText(index: number): string {
    const markedDate = this._getCellMarkedDate(index);

    if (markedDate) {
      return markedDate.markText;
    }

    return '';
  }

  ngOnInit() {
    this.drawCalendar();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['character'] || changes['selectedDate']) {
      this.drawCalendar();
    }
  }

  trackByGridIndex(index: number, item: number): number {
    return item; // Directly return the numeric value
  }
}

