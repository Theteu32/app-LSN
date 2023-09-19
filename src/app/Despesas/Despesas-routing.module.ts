import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DespesasPage } from './Despesas.page';

const routes: Routes = [
  {
    path: '',
    component: DespesasPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DespesasPageRoutingModule {}
