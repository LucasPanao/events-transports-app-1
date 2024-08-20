import { Component } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class PhotosComponent {
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
        items: 2
      },
      1024: {
        items: 3
      },
      1440: {
        items: 4
      }
    },
    nav: true,
    dots: true
  }
  
  title = 'Galeria de Fotos';
  images = [
    {path: './assets/alok.png'},
    {path: './assets/anitta.png'},
    {path: './assets/luisa.jpg'},
    {path: './assets/luan.jpg'},
    {path: './assets/luan.jpg'},
    {path: './assets/luan.jpg'},
    {path: './assets/luan.jpg'}
  ];
}
