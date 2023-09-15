import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EstoquePage } from './Estoque.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { EstoquePageRoutingModule } from './Estoque-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    EstoquePageRoutingModule
  ],
  declarations: [EstoquePage]
})
export class EstoquePageModule {}
