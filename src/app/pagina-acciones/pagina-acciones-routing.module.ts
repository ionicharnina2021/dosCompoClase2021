import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaAccionesPage } from './pagina-acciones.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaAccionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaAccionesPageRoutingModule {}
