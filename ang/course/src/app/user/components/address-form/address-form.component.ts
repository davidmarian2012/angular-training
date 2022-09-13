import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {

  public form = this.fb.group({
    addresses: this.fb.array([])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get addresses(){
    return this.form.controls["addresses"] as FormArray;
  }

  addAddress(){
    const addressForm = this.fb.group({
      addressLine: ['', Validators.required],
      city: [''],
      zip: [''],
    })

    addressForm.get('city').valueChanges
    .subscribe(cityValue => {
      const zipControl = addressForm.get('zip');
      if(cityValue){
        zipControl.enable();
        zipControl.addValidators(Validators.required);
      }
      else
      {
        zipControl.disable();
        zipControl.reset();
        zipControl.removeValidators(Validators.required);
      }
    })

    this.addresses.push(addressForm);
  }

  deleteAddress(i: number){
    this.addresses.removeAt(i);
  }

  

}