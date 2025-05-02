import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TemplateOneService {

  constructor(private sanitizer: DomSanitizer){

    }


    assignValues(item: any,key: any, value: any){
      if ('tag' in item) {
        item[key] = value
      }

      const mainKey = Object.keys(item).find(key => key !== 'options');
      if (mainKey && item[mainKey]?.tag){
        item[mainKey][key] = value
      }
      console.log(item);

      return item
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

  buildTagHtml(tagItem: any): string {
    const tagMatch = tagItem.tag.match(/<(\w+)>/);
    const tagName = tagMatch ? tagMatch[1] : 'div';
    const color = tagItem.color || 'black';
    const bg = tagItem.background ? `background-color: ${tagItem.background};` : '';
    const fntSize = tagItem.size ? `font-size: ${tagItem.size};` : ''
    const weight = tagItem.weight ? `font-weight: ${tagItem.weight};` : ''
    const text = tagItem.text || '';
    const clas = tagItem.class || '';

    return `<${tagName} class="${clas}" style="color: ${color}; ${bg} ${fntSize} ${weight}">${text}</${tagName}>`;
  }



}
