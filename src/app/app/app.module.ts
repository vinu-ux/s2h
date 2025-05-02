import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateStoreComponent } from './components/create-store/create-store.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { PlansComponent } from './components/plans/plans.component';
import { MyTicketComponent } from './components/my-ticket/my-ticket.component';
import { OpenTicketComponent } from './components/open-ticket/open-ticket.component';
import { PrivateSlideComponent } from './private-slide/private-slide.component';
import { TemplateOneComponent } from './template-one/template-one.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DndModule } from 'ngx-drag-drop';
import { FontStyleComponent } from './style-component/font-style/font-style.component';
import { MarginPaddingComponent } from './style-component/margin-padding/margin-padding.component';
import { ImagComponent } from './style-component/imag/imag.component';
import { LinkComponent } from './style-component/link/link.component';
import { SectionComponent } from './style-component/section/section.component';
import { DivsComponent } from './style-component/divs/divs.component';
import { ColorsComponent } from './style-component/colors/colors.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    CreateStoreComponent,
    TransactionsComponent,
    PlansComponent,
    MyTicketComponent,
    OpenTicketComponent,
    PrivateSlideComponent,
    TemplateOneComponent,
    FontStyleComponent,
    MarginPaddingComponent,
    ImagComponent,
    LinkComponent,
    SectionComponent,
    DivsComponent,
    ColorsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ScrollingModule,
    DndModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
