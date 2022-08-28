import { Component, OnInit} from '@angular/core';
import { Vehicle } from '../interfaces/vehicle';
import { VehicleService } from 'src/app/shared/vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  vehicles: Vehicle[] = [];
  getVehicles(): void{
    this.vehicles = this.vehicleService.getVehicles();
  }

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.getVehicles();
  }

}
