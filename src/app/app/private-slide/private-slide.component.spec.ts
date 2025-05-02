import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateSlideComponent } from './private-slide.component';

describe('PrivateSlideComponent', () => {
  let component: PrivateSlideComponent;
  let fixture: ComponentFixture<PrivateSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateSlideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
