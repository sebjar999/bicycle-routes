import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciarSeccionPageRoutingModule } from './iniciar-seccion-routing.module';

import { IniciarSeccionPage } from './iniciar-seccion.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciarSeccionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IniciarSeccionPage]
})
export class IniciarSeccionPageModule { }
