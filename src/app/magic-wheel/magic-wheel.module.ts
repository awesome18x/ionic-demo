import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MagicWheelPageRoutingModule } from './magic-wheel-routing.module';

import { MagicWheelPage } from './magic-wheel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MagicWheelPageRoutingModule
  ],
  declarations: [MagicWheelPage]
})
export class MagicWheelPageModule {}
