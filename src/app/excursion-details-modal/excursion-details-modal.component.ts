import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Post } from '../IPosts';

@Component({
  selector: 'app-excursion-details-modal',
  templateUrl: './excursion-details-modal.component.html',
  styleUrls: ['./excursion-details-modal.component.css']
})
export class ExcursionDetailsModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Post) {}
}
