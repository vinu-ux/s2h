import { Component, OnInit, ViewChild } from '@angular/core';
import { PrivateSlideComponent } from './private-slide/private-slide.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
pageStatus:  boolean = false

constructor(private router: Router){

}

ngOnInit(): void {
if (this.pageStatus) {
this.router.navigate([''])
} else {
  this.router.navigate(['deafult-page'])

}


}


}
