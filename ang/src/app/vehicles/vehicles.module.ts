import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleComponent } from './vehicle/vehicle.component';
import { SharedCardComponent } from '../shared/shared-card/shared-card.component';


@NgModule({
  declarations: [
    VehicleComponent,
    SharedCardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    VehicleComponent
  ]
})
export class VehiclesModule { }
