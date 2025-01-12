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
  
  title = 'GALERIA DE FOTOS';
  images = [
    {path: './assets/fotos/foto1.jpg'},
    {path: './assets/fotos/foto2.jpg'},
    {path: './assets/fotos/foto3.jpg'},
    {path: './assets/fotos/foto4.jpg'},
    {path: './assets/fotos/foto5.jpg'},
    {path: './assets/fotos/foto6.jpg'},
    {path: './assets/fotos/foto7.jpg'},
    {path: './assets/fotos/foto8.jpg'},
    {path: './assets/fotos/foto9.jpg'},
    {path: './assets/fotos/foto10.jpg'},
    {path: './assets/fotos/foto11.jpg'},
    {path: './assets/fotos/foto12.jpg'},
    {path: './assets/fotos/foto13.jpg'},
    {path: './assets/fotos/foto14.jpg'},
    {path: './assets/fotos/foto15.jpg'},
    {path: './assets/fotos/foto16.jpg'}

  ];
}
