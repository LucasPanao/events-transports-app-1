import { Component } from '@angular/core';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent {
  customOptions: any = {
    loop: true,
    margin: 10,
    autoplay: true,
    responsiveClass: true,
    navText: ['Anterior', 'Próximo'],
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      1024: {
        items: 4
      },
      1440: {
        items: 5
      }
    },
    nav: true,
    dots: true
  }
  
  title = 'FEEDBACKS';
  images = [
    {path: './assets/feedbacks/21.jpg'},
    {path: './assets/feedbacks/1.jpg'},
    {path: './assets/feedbacks/2.jpg'},
    {path: './assets/feedbacks/3.jpg'},
    {path: './assets/feedbacks/4.jpg'},
    {path: './assets/feedbacks/5.jpg'},
    {path: './assets/feedbacks/6.jpg'},
    {path: './assets/feedbacks/7.jpg'},
    {path: './assets/feedbacks/8.jpg'},
    {path: './assets/feedbacks/9.jpg'},
    {path: './assets/feedbacks/10.jpg'},
    {path: './assets/feedbacks/11.jpg'},
    {path: './assets/feedbacks/12.jpg'},
    {path: './assets/feedbacks/13.jpg'},
    {path: './assets/feedbacks/14.jpg'},
    {path: './assets/feedbacks/15.jpg'},
    {path: './assets/feedbacks/16.jpg'},
    {path: './assets/feedbacks/17.jpg'},
    {path: './assets/feedbacks/18.jpg'},
    {path: './assets/feedbacks/19.jpg'},
    {path: './assets/feedbacks/20.jpg'},
    {path: './assets/feedbacks/22.jpg'},
  ];
}
