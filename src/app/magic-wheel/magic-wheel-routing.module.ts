import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MagicWheelPage } from './magic-wheel.page';

const routes: Routes = [
  {
    path: '',
    component: MagicWheelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MagicWheelPageRoutingModule {}
