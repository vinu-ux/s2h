import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-business-details',
  templateUrl: './business-details.component.html',
  styleUrls: ['./business-details.component.scss']
})
export class BusinessDetailsComponent implements OnInit{
  bussinessDetailForm!: FormGroup;
  sellPlans: any[] = [];
    constructor(private fb: FormBuilder){}

    ngOnInit(): void {
this.getSellPlans();
    }

    createForm(){
      this.bussinessDetailForm = this.fb.group({
        sellPlannin: ['', Validators.required],
        experience: ['', Validators.required],
        totalCount: ['', Validators.required],
      });
    }

     displayManufactureFn(data: any): string {
    return data && data.manuFactorName ? data.manuFactorName : '';
  }

    getSellPlans(){
      this.sellPlans = [
    "Digital Products",
    "Fashion & Apparel",
    "Health & Wellness",
    "Food & Beverage",
    "Home & Living",
    "Electronics & Gadgets",
    "Automotive",
    "Sports & Outdoors",
    "Education & Learning",
    "Business & Professional Services",
    "Handmade & Craft",
    "Toys & Games",
    "Pet Supplies",
    "Travel & Tourism",
    "Real Estate & Property"
  ]
    }

}
