import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaAccionesPageRoutingModule } from './pagina-acciones-routing.module';

import { PaginaAccionesPage } from './pagina-acciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaAccionesPageRoutingModule
  ],
  declarations: [PaginaAccionesPage]
})
export class PaginaAccionesPageModule {}
