import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {
  posts = [
    {
      photo: './assets/hopi-hari.jpg',
      name: 'Post 1',
      date: new Date(),
      value: 100,
      info: 'Additional information about Post 1',
    },
    {
      photo: 'https://via.placeholder.com/150',
      name: 'Post 2',
      date: new Date(),
      value: 200,
      info: 'Additional information about Post 2',
    },
  ];
}
