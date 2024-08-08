import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private router: Router) {}

  correctPassword = 'kess1234';
  enteredPassword = '';
  accessGranted = false;

  checkPassword() {
    if (this.enteredPassword === this.correctPassword) {
      this.accessGranted = true;
    } else {
      alert('Senha incorreta!');
    }
  }

  navigateTo(route: string): void {
    switch (route) {
      case 'incluir-post':
        this.router.navigate(['/posts']);
        break;
      case 'editar-post':
        this.router.navigate(['/edit-posts']);
        break;
      case 'excluir-post':
        this.router.navigate(['/delete-posts']);
        break;
      default:
        break;
    }
  }
}
