import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Post } from '../IPosts';
import { weekdays } from '../functions';

@Component({
  selector: 'app-excursion-details-modal',
  templateUrl: './excursion-details-modal.component.html',
  styleUrls: ['./excursion-details-modal.component.css'],
})
export class ExcursionDetailsModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Post) {}

  readonly weekdays = weekdays;

  convertDate(date: any): number {
    let newDate: any;
    newDate = new Date(date);
    newDate.setHours(newDate.getHours() + 7);
    return newDate.getDay();
  }
}
