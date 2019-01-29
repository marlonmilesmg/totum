import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarinsuranceComponent } from './carinsurance/carinsurance.component';
import { HealthinsuranceComponent } from './healthinsurance/healthinsurance.component';
import { AboutComponent } from './about/about.component';
import { AboutHomeComponent } from './about-home/about-home.component';
import { AboutSettingsComponent } from './about-settings/about-settings.component';
import { AboutSettings1Component } from './about-settings1/about-settings1.component';
import { AboutSettings2Component } from './about-settings2/about-settings2.component';
import { AboutSettings3Component } from './about-settings3/about-settings3.component';
import { AboutSettings4Component } from './about-settings4/about-settings4.component';
import { AboutSettings5Component } from './about-settings5/about-settings5.component';
import { AboutSettings6Component } from './about-settings6/about-settings6.component';
import { AboutSettings7Component } from './about-settings7/about-settings7.component';
import { AboutSettings8Component } from './about-settings8/about-settings8.component';
import { AboutSettings9Component } from './about-settings9/about-settings9.component';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PackagesComponent } from './packages/packages.component';
import { CarInsuranceTile9Component } from './car-insurance-tile9/car-insurance-tile9.component';
import { CarInsuranceTile1Component } from './car-insurance-tile1/car-insurance-tile1.component';
import { CarInsuranceCard1Component } from './car-insurance-card1/car-insurance-card1.component';

@NgModule({
  declarations: [
    AppComponent,
    CarinsuranceComponent,
    HealthinsuranceComponent,
    AboutComponent,
    AboutHomeComponent,
    AboutSettingsComponent,
    AboutSettings1Component,
    AboutSettings2Component,
    AboutSettings3Component,
    AboutSettings4Component,
    AboutSettings5Component,
    AboutSettings6Component,
    AboutSettings7Component,
    AboutSettings8Component,
    AboutSettings9Component,
    CompanyDashboardComponent,
    HomeComponent,
    LoginComponent,
    PackagesComponent,
    CarInsuranceTile9Component,
    CarInsuranceTile1Component,
    CarInsuranceCard1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
