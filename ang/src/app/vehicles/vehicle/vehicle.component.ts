import { Component, OnInit, Input} from '@angular/core';
import { Vehicle } from 'src/app/vehicle';
import { VehicleService } from 'src/app/shared/vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  @Input() selectedId?: number;

  vehicles: Vehicle[] = [];
  getVehicles(): void{
    this.vehicles = this.vehicleService.getVehicles();
    console.log(this.vehicles);
  }

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.getVehicles();
  }

}
