import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DefaultPageComponent } from './default-page/default-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StoreDashboardComponent } from './store-dashboard/store-dashboard.component';
import { StoreDetailsComponent } from './components/store-details/store-details.component';
import { BusinessDetailsComponent } from './components/business-details/business-details.component';
import { DomainDetailsComponent } from './components/domain-details/domain-details.component';
import { TemplateDetailsComponent } from './components/template-details/template-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/common-modules/material/material.module';
import { PricingPlanComponent } from './components/pricing-plan/pricing-plan.component';
import { BillDetailsComponent } from './components/bill-details/bill-details.component';


@NgModule({
  declarations: [
    DefaultPageComponent,
    DashboardComponent,
    StoreDashboardComponent,
    StoreDetailsComponent,
    BusinessDetailsComponent,
    DomainDetailsComponent,
    TemplateDetailsComponent,
    PricingPlanComponent,
    BillDetailsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ]
})
export class DashboardModule { }
