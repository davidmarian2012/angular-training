import { Injectable } from '@angular/core';
import { Vehicle } from '../vehicles/interfaces/vehicle';
import { VEHICLES } from '../vehicles/mocking/mock-vehicles';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  getVehicles(): Vehicle[]{
    return VEHICLES;
  }

  constructor() { }
}
