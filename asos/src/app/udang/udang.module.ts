import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UdangPageRoutingModule } from './udang-routing.module';

import { UdangPage } from './udang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UdangPageRoutingModule
  ],
  declarations: [UdangPage]
})
export class UdangPageModule {}
