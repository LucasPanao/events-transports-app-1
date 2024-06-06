import { Component } from '@angular/core';

interface Feedback {
  name: string;
  photo: string;
  text: string;
}

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent {
  feedbacks: Feedback[] = [
    {
      name: 'Ana',
      photo: './assets/robot.png',
      text: 'Excelente serviço! Adorei a viagem.'
    },
    {
      name: 'Pedro',
      photo: './assets/robot.png',
      text: 'Ótima experiência. Recomendo a todos!'
    },
    {
      name: 'Maria',
      photo: './assets/robot.png',
      text: 'Transporte confortável e seguro. Voltarei mais vezes.'
    },
    {
      name: 'Maria',
      photo: './assets/robot.png',
      text: 'Transporte confortável e seguro. Voltarei mais vezes.'
    },
    {
      name: 'Maria',
      photo: './assets/robot.png',
      text: 'Transporte confortável e seguro. Voltarei mais vezes.'
    },
    {
      name: 'Maria',
      photo: './assets/robot.png',
      text: 'Transporte confortável e seguro. Voltarei mais vezes.'
    }
    
  ];
}
