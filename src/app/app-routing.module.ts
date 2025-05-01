import { CreateStoreComponent } from './components/create-store/create-store.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { PlansComponent } from './components/plans/plans.component';
import { MyTicketComponent } from './components/my-ticket/my-ticket.component';
import { OpenTicketComponent } from './components/open-ticket/open-ticket.component';
import { TemplateOneComponent } from './template-one/template-one.component';
import { PrivateSlideComponent } from './private-slide/private-slide.component';

const routes: Routes = [
  // {path: '',redirectTo: 'create-store', pathMatch: 'full',},
  // {path: 'create-store',component: CreateStoreComponent},
  {path: 'transactions',component: TransactionsComponent},
  {path: 'plans',component: PlansComponent},
  {path: 'view-ticket',component: MyTicketComponent},
  {path: 'open-ticket',component: OpenTicketComponent},
  {path: 'template-one', component: TemplateOneComponent},
  {path: 'deafult-page',component: PrivateSlideComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
