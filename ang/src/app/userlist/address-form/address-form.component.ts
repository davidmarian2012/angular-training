import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {

  addresses = new FormGroup({
    addressLine: new FormControl('', [
      Validators.required
    ]),
    city: new FormControl(''),
    zip: new FormControl(0)
  })

  constructor() { }

  ngOnInit(): void {
  }

}
