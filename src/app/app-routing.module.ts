import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'Login',
    loadChildren: () =>
      import('./Login/Login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'Estoque',
    loadChildren: () =>
      import('./Estoque/Estoque.module').then((m) => m.EstoquePageModule),
  },
  {
    path: 'Sobre',
    loadChildren: () =>
      import('./Sobre/Sobre.module').then((m) => m.SobrePageModule),
  },
  {
    path: '',
    redirectTo: 'Login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
