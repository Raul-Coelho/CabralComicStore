import { CarouselComponent } from './../components/carousel/carousel.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ComicsComponent } from './comics/comics.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    PagesComponent,
    ComicsComponent,
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
