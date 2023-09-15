import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importe o Router

@Component({
  selector: 'app-Login',
  templateUrl: 'Login.page.html',
  styleUrls: ['Login.page.scss'],
})
export class LoginPage {
  constructor(private router: Router) {}

  // Função para redirecionar para a página de estoque
  redirecionarParaEstoque() {
    this.router.navigate(['/Estoque']); // 'estoque' deve ser o nome da rota para a página de estoque
  }
}
