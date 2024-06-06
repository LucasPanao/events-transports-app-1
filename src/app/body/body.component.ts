import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {
  posts = [
    {
      photo: './assets/alok.png',
      name: 'Post 1',
      date: new Date(),
      value: 100,
      info: 'Additional information about Post 1',
    },
    {
      photo: './assets/luan.jpg',
      name: 'Post 1',
      date: new Date(),
      value: 100,
      info: 'Additional information about Post 1',
    },
    {
      photo: './assets/anitta.png',
      name: 'Post 1',
      date: new Date(),
      value: 100,
      info: 'Additional information about Post 1',
    },
    {
      photo: './assets/luisa.jpg',
      name: 'Post 1',
      date: new Date(),
      value: 100,
      info: 'Additional information about Post 1',
    },
    {
      photo: './assets/alok.png',
      name: 'Post 1',
      date: new Date(),
      value: 100,
      info: 'Additional information about Post 1',
    },
    {
      photo: './assets/luan.jpg',
      name: 'Post 1',
      date: new Date(),
      value: 100,
      info: 'Additional information about Post 1',
    },
    {
      photo: './assets/anitta.png',
      name: 'Post 1',
      date: new Date(),
      value: 100,
      info: 'Additional information about Post 1',
    },
    {
      photo: './assets/luisa.jpg',
      name: 'Post 1',
      date: new Date(),
      value: 100,
      info: 'Additional information about Post 1',
    }
  ];
}
