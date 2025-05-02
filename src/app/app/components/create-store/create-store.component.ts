import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-create-store',
  templateUrl: './create-store.component.html',
  styleUrls: ['./create-store.component.scss']
})
export class CreateStoreComponent {

  isStoreCreate: boolean = false;

  activeSection = 'store-details';
  imagePath = '../../../assets/img/time.png'

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  menuItems = [
    { label: 'Store Details', sectionId: 'store-details' },
    { label: 'Tell us about your business', sectionId: 'tell-us' },
    { label: 'Check Domain Availability', sectionId: 'domain-avail' },
  ];

scrollToSection(sectionId: string): void {
  const container = this.scrollContainer.nativeElement;
  const target = container.querySelector('#' + sectionId);

  if (target) {
    const offsetTop = target.offsetTop - 180;
    container.scrollTo({ top: offsetTop, behavior: 'smooth' });
  }
}

onScroll(event: any): void {
  const sectionIds = ['store-details',  'tell-us','domain-avail'];
  for (let id of sectionIds) {
    const section = document.getElementById(id);
    const rect = section?.getBoundingClientRect();

    if (rect && rect.top >0 && rect.bottom >= 50) {
      this.activeSection = id;
      break;
    }
  }
}

onFileSelected(fileInput: HTMLInputElement) {
  const file = fileInput.files?.[0];
  if (file) {
    const imagePath = URL.createObjectURL(file);
    this.imagePath = imagePath
    console.log('Image Path:', imagePath);
    // You can use this path to display a preview, etc.
  }
  else this.imagePath = '../../../assets/img/time.png'
}

clearImage(fileInput: HTMLInputElement) {
  fileInput.value = '';         // Clear the file input
  this.imagePath =  '../../../assets/img/time.png';        // Clear the preview path
}

}
