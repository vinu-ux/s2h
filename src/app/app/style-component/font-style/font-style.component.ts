import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TemplateOneService } from 'src/app/template-one/template-one.service';

@Component({
  selector: 'app-font-style',
  templateUrl: './font-style.component.html',
  styleUrls: ['./font-style.component.scss']
})
export class FontStyleComponent {

  @Input() item: any;
  @Input() design: any = [];
  @Input() editSty: any;
  @Output() back: EventEmitter<any> = new EventEmitter<any>()
  @Output() changeEve: EventEmitter<any> = new EventEmitter<any>()
  @Output() save: EventEmitter<any> = new EventEmitter<any>()

  sizeText: any = 'px'

  constructor(public tempServe: TemplateOneService){}


  changeededData(eve: any,key: any){

console.log(this.editSty);

let val = eve.target.value+ (key == 'size'? this.sizeText : '')
    this.design.forEach((element: any) => {
      if(element.id == this.item.id) element  = this.tempServe.assignValues(this.item,key,val)
    this.item.html = this.tempServe.renderHtml(element)
    });

    this.changeEve.emit(this.design)
  }

  savedData(){
    this.save.emit()
  }

}
