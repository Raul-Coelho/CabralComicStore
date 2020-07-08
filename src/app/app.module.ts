import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    ComponentsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  exports: [
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
