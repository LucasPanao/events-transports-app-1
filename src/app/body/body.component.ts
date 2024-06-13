import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { MatDialog } from '@angular/material/dialog';
import { ExcursionDetailsModalComponent } from '../excursion-details-modal/excursion-details-modal.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  posts: any[] = [];

  constructor(public dialog: MatDialog, private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe((data: any) => {
      this.posts = data;
    });
  }

  showDetails(post: any): void {
    const dialogRef = this.dialog.open(ExcursionDetailsModalComponent, {
      width: '400px',
      data: {
        dateArrival: post.dateArrival,
        dateDeparture: post.dateDeparture,
        schedules: post.schedules,
        cities: post.cities,
        whatsappLink: `https://wa.me/55${post.whatsappNumber}`,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
