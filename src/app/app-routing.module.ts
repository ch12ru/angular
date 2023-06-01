import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PredictionDerailsComponent } from './prediction-derails/prediction-derails.component';
import {MegaDashboardComponent} from './mega-dashboard/mega-dashboard.component';

const routes: Routes = [

  {path: 'prediction-details', component: PredictionDerailsComponent},
  {path: 'mega-dashboard', component: MegaDashboardComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
