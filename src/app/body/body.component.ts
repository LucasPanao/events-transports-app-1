import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { MatDialog } from '@angular/material/dialog';
import { ExcursionDetailsModalComponent } from '../excursion-details-modal/excursion-details-modal.component';
import { convertMonthName, months } from '../functions';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  posts: any[] = [];
  groupedPosts: { [key: string]: any[] } = {};
  monthName: string[] = [];
  monthYearNames: string[] = [];

  constructor(public dialog: MatDialog, private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe((data: any) => {
      this.posts = data;
      this.handleMonth();
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

  handleMonth(): void {
    
    this.posts.forEach((post) => {
      const month = post.date.getMonth() + 1;
      const year = post.date.getFullYear();
      const monthName = convertMonthName([month])[0]; 
      const monthYear = `${monthName} - ${year}`;

      if (!this.groupedPosts[monthYear]) {
        this.groupedPosts[monthYear] = [];
      }
      this.groupedPosts[monthYear].push(post);
    });

    this.monthYearNames = [...new Set(Object.keys(this.groupedPosts))];
    this.monthYearNames.sort((a, b) => {
      const [monthA, yearA] = a.split(' - ');
      const [monthB, yearB] = b.split(' - ');
      return yearA !== yearB ? +yearA - +yearB: months.indexOf(monthA) - months.indexOf(monthB);
    });
  }

}
