import { Component, OnInit } from '@angular/core';
import { cssProperty, designsTag } from './sty';
import suneditor from 'suneditor'
import plugins from 'suneditor/src/plugins'
import { CdkDragDrop, moveItemInArray, CdkDropListGroup, CdkDropList, CdkDrag,transferArrayItem } from '@angular/cdk/drag-drop';
import { DndDropEvent } from 'ngx-drag-drop';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-template-one',
  templateUrl: './template-one.component.html',
  styleUrls: ['./template-one.component.scss']
})
export class TemplateOneComponent implements OnInit{

  doneList: any[] = [];
  cssProperty = cssProperty
  sidebarItems = designsTag;
  design: any[] = []
  editDesign: any;

  constructor(private sanitizer: DomSanitizer){

  }

  ngOnInit(): void {

    suneditor.create('sample', {
      plugins: plugins,
      buttonList: [
          ['undo', 'redo'],
          ['font', 'fontSize', 'formatBlock'],
          ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
          ['fontColor', 'hiliteColor', 'textStyle'],
          ['align', 'horizontalRule', 'list', 'lineHeight'],
          ['table', 'link', 'image', 'video', 'audio' /** ,'math' */], // You must add the 'katex' library at options to use the 'math' plugin.
          ['fullScreen', 'showBlocks', 'codeView'],
          ['preview', 'print'],
          ['save', 'template'],
          /** ['dir', 'dir_ltr', 'dir_rtl'] */ // "dir": Toggle text direction, "dir_ltr": Right to Left, "dir_rtl": Left to Right
      ]
  })
  }


  getFirstKey(obj: any): string {
    return Object.keys(obj)[0];
  }

  hasSubmenu(item: any): boolean {
    const key = this.getFirstKey(item);
    return item[key]?.options?.hasSub === 'Y';
  }

  isCollapsed(item: any): boolean {
    const key = this.getFirstKey(item);
    return item[key]?.options?.collapse === true;  // Ensure collapse is properly set
  }

  toggleCollapse(item: any): void {
    const key = this.getFirstKey(item);
    item[key].options.collapse = !item[key].options.collapse;
  }

  getSubItems(item: any): string[] {
    const key = this.getFirstKey(item);
    return Object.keys(item[key])
      .filter(k => k !== 'options');
  }

  getSubItemData(item: any, subKey: string): any {
    const key = this.getFirstKey(item);
    return item[key][subKey];
  }




  onDraggableMoved(item: any) {
    console.log(item);

    this.design.push(item)
    console.log("--dragged: ",this.design);
  }



  dragNdDrop(event: any, action: any) {
    event.stopPropagation();
  }

  drop(event: CdkDragDrop<any>) {
    console.log(event.container.data);
    console.log(event.previousContainer.data);

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  droppedItems: any[] = [];

onDropItem(event: any) {
  if (event?.data) {
    event.data['id']=Math.random().toString(36).substr(2, 9)
    this.droppedItems.push(event.data);
  }
}

renderHtml(item: any) {
  // Handle empty or invalid item
  let html =``;
  if (!item || typeof item !== 'object') return '';

  // If item has direct tag (like h1)
  if ('tag' in item) {
    html = this.buildTagHtml(item);
    item['html']=this.buildTagHtml(item)
  }

  // If item is wrapped under another key (like 'button', 'header', etc.)
  const mainKey = Object.keys(item).find(key => key !== 'options');
  if (mainKey && item[mainKey]?.tag){
    html = this.buildTagHtml(item[mainKey]);
    item[mainKey]['html'] = this.buildTagHtml(item[mainKey])
  }

  return this.sanitizer.bypassSecurityTrustHtml(html);
}

editSection(item: any){
  this.editDesign = item
}

buildTagHtml(tagItem: any): string {
  const tagMatch = tagItem.tag.match(/<(\w+)>/);
  const tagName = tagMatch ? tagMatch[1] : 'div';
  const color = tagItem.color || 'black';
  const bg = tagItem.background ? `background-color: ${tagItem.background};` : '';
  const fntSize = tagItem.size ? `font-size: ${tagItem.size};` : ''
  const text = tagItem.text || '';
  const clas = tagItem.class || '';

  return `<${tagName} class="${clas}" style="color: ${color}; ${bg} ${fntSize}">${text}</${tagName}>`;
}
}
