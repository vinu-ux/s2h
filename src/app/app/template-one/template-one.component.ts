import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { cssProperty, designsTag, tempHtml } from './sty';
import suneditor from 'suneditor'
import { HttpClient } from '@angular/common/http';
import plugins from 'suneditor/src/plugins'
import { CdkDragDrop, moveItemInArray, CdkDropListGroup, CdkDropList, CdkDrag,transferArrayItem } from '@angular/cdk/drag-drop';
import { DndDropEvent } from 'ngx-drag-drop';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';
import { TemplateOneService } from './template-one.service';

@Component({
  selector: 'app-template-one',
  templateUrl: './template-one.component.html',
  styleUrls: ['./template-one.component.scss']
})
export class TemplateOneComponent implements OnInit,OnChanges{

  doneList: any[] = [];
  cssProperty = cssProperty
  sidebarItems = designsTag;
  design: any[] = []
  editDesign: any;
  editStyleStatus = 'navigation'
  htmlContent: string = '';
  templateUrl: SafeResourceUrl;


  constructor(public tempServe: TemplateOneService,private sanitizer: DomSanitizer,
    private http: HttpClient
  ){
    this.templateUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/templates/template1.html');

  }

  designpatern = {
     templatePath: 'assets/html/temp.html' }
    // { templatePath: 'assets/html/another.html' }, // etc.

  getSafeUrl(path: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(path);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);


  }

  ngOnInit(): void {
    const parser = new DOMParser();
const doc = parser.parseFromString(tempHtml, 'text/html');
this.htmlContent = doc.body.innerHTML;

    this.http.get('assets/html/temp.html', { responseType: 'text' }).subscribe(html => {
      // Extract <body> content only
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const bodyContent = doc.body.innerHTML;
      this.htmlContent = bodyContent;

      // Optional: Dynamically inject CSS links
      const links = doc.head.querySelectorAll('link[rel="stylesheet"]');
      links.forEach(link => {
        const newLink = document.createElement('link');
        newLink.rel = 'stylesheet';
        newLink.href = (link as HTMLLinkElement).href;
        document.head.appendChild(newLink);
      });
    });

  //   suneditor.create('sample', {
  //     plugins: plugins,
  //     buttonList: [
  //         ['undo', 'redo'],
  //         ['font', 'fontSize', 'formatBlock'],
  //         ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
  //         ['fontColor', 'hiliteColor', 'textStyle'],
  //         ['align', 'horizontalRule', 'list', 'lineHeight'],
  //         ['table', 'link', 'image', 'video', 'audio' /** ,'math' */], // You must add the 'katex' library at options to use the 'math' plugin.
  //         ['fullScreen', 'showBlocks', 'codeView'],
  //         ['preview', 'print'],
  //         ['save', 'template'],
  //         /** ['dir', 'dir_ltr', 'dir_rtl'] */ // "dir": Toggle text direction, "dir_ltr": Right to Left, "dir_rtl": Left to Right
  //     ]
  // })
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
    item['id']=Math.random().toString(36).substr(2, 9)


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
    // event.data['id']=Math.random().toString(36).substr(2, 9)
    // this.droppedItems.push(event.data);
  }
}



editSection(item: any){
  this.editDesign = item
}


}
