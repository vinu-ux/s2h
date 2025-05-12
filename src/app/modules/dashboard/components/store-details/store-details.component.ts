import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.scss']
})
export class StoreDetailsComponent implements OnInit{
  storeDetailForm!: FormGroup;
  previewUrl!: string;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    // this.createForm()
    this.createForm1()

  }



  createForm(){
    this.storeDetailForm = this.fb.group({
      storeName: ['', Validators.required],
      storeLogo: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      whatsapp: ['', Validators.required]
    });
  }
  createForm1(){
    this.storeDetailForm = this.fb.group({
      storeName: [''],
      storeLogo: [''],
      address: [''],
      phone: [''],
      email: [''],
      whatsapp: ['']
    });
  }

  fetchImage(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.previewUrl = reader.result as string;
    };

    reader.readAsDataURL(file);
  }

  focusAll(){
    this.storeDetailForm.markAllAsTouched();
  }

  submit(eve: HTMLAnchorElement){
    eve.click();
    console.log(this.storeDetailForm.value);
  }



}
