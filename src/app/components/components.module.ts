import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarComponent } from './navbar/navbar.component';
import { ModalComponent } from './modal/modal.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PagesRoutingModule } from './../pages/pages-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CarouselComponent,
    HeaderComponent,
    ModalComponent,
    NavbarComponent
  ],
  imports: [
    MDBBootstrapModule,
    CommonModule,
    RouterModule,
  ],
  exports: [
    CarouselComponent,
    HeaderComponent,
    ModalComponent,
    NavbarComponent
  ]
})
export class ComponentsModule { }
