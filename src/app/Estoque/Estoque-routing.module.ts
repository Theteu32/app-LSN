import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstoquePage } from './Estoque.page';

const routes: Routes = [
  {
    path: '',
    component: EstoquePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstoquePageRoutingModule {}
