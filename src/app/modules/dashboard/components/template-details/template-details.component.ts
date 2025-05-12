import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-template-details',
  templateUrl: './template-details.component.html',
  styleUrls: ['./template-details.component.scss']
})
export class TemplateDetailsComponent implements OnInit{
  template = new FormControl('');
  constructor(){}

  ngOnInit(): void {

  }

  createForm(){

  }
}
