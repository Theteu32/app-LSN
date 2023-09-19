import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DespesasPage } from './Despesas.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { DespesasPageRoutingModule } from './Despesas-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    DespesasPageRoutingModule
  ],
  declarations: [DespesasPage]
})
export class DespesasPageModule {}
