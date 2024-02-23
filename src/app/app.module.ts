import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidencesComponent } from './residences/residences.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { AppartmentdetailComponent } from './appartmentdetail/appartmentdetail.component';
import { AppartmentformComponent } from './appartmentform/appartmentform.component';
import { HeaderComponent } from './header/header.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ResidenceformComponent } from './residenceform/residenceform.component';

@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponent,
    ApartmentsComponent,
    AppartmentdetailComponent,
    AppartmentformComponent,
    HeaderComponent,
    NotfoundComponent,
    ResidenceformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
