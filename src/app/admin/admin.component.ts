import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private router: Router) {}

  navigateTo(route: string): void {
    switch (route) {
      case 'incluir-post':
        this.router.navigate(['/posts']);
        break;
      case 'editar-post':
        this.router.navigate(['/admin/editar']);
        break;
      case 'excluir-post':
        this.router.navigate(['/admin/excluir']);
        break;
      default:
        break;
    }
  }
}
