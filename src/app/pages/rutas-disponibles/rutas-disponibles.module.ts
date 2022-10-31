import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutasDisponiblesPageRoutingModule } from './rutas-disponibles-routing.module';

import { RutasDisponiblesPage } from './rutas-disponibles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutasDisponiblesPageRoutingModule
  ],
  declarations: [RutasDisponiblesPage]
})
export class RutasDisponiblesPageModule {}
