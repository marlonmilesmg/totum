import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { PackagesComponent } from './packages/packages.component';
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
import { CarInsuranceTile9Component} from './car-insurance-tile9/car-insurance-tile9.component';
import { CarInsuranceTile1Component } from './car-insurance-tile1/car-insurance-tile1.component';
import { CarInsuranceCard1Component } from './car-insurance-card1/car-insurance-card1.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'packages', component: PackagesComponent },
  { path: 'about', component: AboutHomeComponent },
  { path: 'about-settings', component: AboutSettingsComponent },
  { path: 'about-settings-1', component: AboutSettings1Component },
  { path: 'about-settings-2', component: AboutSettings2Component },
  { path: 'about-settings-3', component: AboutSettings3Component },
  { path: 'about-settings-4', component: AboutSettings4Component },
  { path: 'about-settings-5', component: AboutSettings5Component },
  { path: 'about-settings-6', component: AboutSettings6Component },
  { path: 'about-settings-7', component: AboutSettings7Component },
  { path: 'about-settings-8', component: AboutSettings8Component },
  { path: 'about-settings-9', component: AboutSettings9Component },
  { path: 'company-dashboard', component: CompanyDashboardComponent },
  { path: 'car-insurance-tile9', component: CarInsuranceTile9Component },
  { path: 'car-insurance-tile1', component: CarInsuranceTile1Component },
  { path: 'car-insurance-card1', component: CarInsuranceCard1Component },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
