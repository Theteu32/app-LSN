import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'Login',
        loadChildren: () => import('../Login/Login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'Estoque',
        loadChildren: () => import('../Estoque/Estoque.module').then(m => m.EstoquePageModule)
      },
      {
        path: 'Sobre',
        loadChildren: () => import('../Sobre/Sobre.module').then(m => m.SobrePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/Login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/Login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
