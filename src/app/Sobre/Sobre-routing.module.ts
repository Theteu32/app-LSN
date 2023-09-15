import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobrePage } from './Sobre.page';

const routes: Routes = [
  {
    path: '',
    component: SobrePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SobrePageRoutingModule {}
