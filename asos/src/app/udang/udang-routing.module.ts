import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UdangPage } from './udang.page';

const routes: Routes = [
  {
    path: '',
    component: UdangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UdangPageRoutingModule {}
