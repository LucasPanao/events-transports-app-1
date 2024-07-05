import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { MatDialog } from '@angular/material/dialog';
import { ExcursionDetailsModalComponent } from '../excursion-details-modal/excursion-details-modal.component';
import { convertMonthName, months } from '../functions';
import { Post } from '../IPosts';

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
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(public dialog: MatDialog, private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe((data: any) => {
      this.posts = data;
      this.handleMonth();
      this.isLoading = false;
    },
    (error) => {
      this.errorMessage = 'Ocorreu um erro ao carregar os eventos. Por favor, tente novamente mais tarde.';
      this.isLoading = false;
    });
  }

  showDetails(post: Post): void {
    const dialogRef = this.dialog.open(ExcursionDetailsModalComponent, {
      width: '400px',
      data: {
        name: post.name,
        dateArrival: post.dateArrival,
        scheduleSantos: post.scheduleSantos,
        schedulePraiaGrande: post.schedulePraiaGrande,
        scheduleSaoVicente: post.scheduleSaoVicente,
        scheduleCubatao: post.scheduleCubatao,
        scheduleReturn: post.scheduleReturn
      },
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
