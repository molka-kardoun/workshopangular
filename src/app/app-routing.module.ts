import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './residences/residences.component';
import { ApartmentsComponent } from './apartments/apartments.component';

import {  ResidenceformComponent } from './residenceform/residenceform.component';
import {  AppartmentformComponent } from './appartmentform/appartmentform.component';
import {NotfoundComponent } from './notfound/notfound.component';
import {  AppartmentdetailComponent } from './appartmentdetail/appartmentdetail.component';
const routes: Routes = [
  {path:'',redirectTo:'residences',pathMatch:'full'},
  {path:'residences',component:ResidencesComponent},
  {path:'apartments/:idR', component:ApartmentsComponent},
  { path: 'home', component: ResidencesComponent },
  { path: 'addResidence', component:  ResidenceformComponent },
  { path: 'residences/:residenceId/apartments', component: ApartmentsComponent },
  { path: 'addApartment', component:   AppartmentformComponent },
  { path: '404', component: NotfoundComponent},
  { path: 'apartmentss/:id', component: AppartmentdetailComponent },
  { path: '**', redirectTo: '/404' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
