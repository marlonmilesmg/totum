import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarinsuranceComponent } from './carinsurance/carinsurance.component';
import { HealthinsuranceComponent } from './healthinsurance/healthinsurance.component';

@NgModule({
  declarations: [
    AppComponent,
    CarinsuranceComponent,
    HealthinsuranceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
