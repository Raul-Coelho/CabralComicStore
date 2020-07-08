import Comic from 'src/app/models/comic.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public nav: any;
  public comic: Comic;
  public items: Comic[] = [];

  constructor(
    private router: Router,

  ) {
    this.nav = this.router.getCurrentNavigation();
  }

  getRecivedComic() {
    this.items = [];
    this.comic = this.nav.extras.state.selectedComic;
  }

  ngOnInit(): void {
    console.log(this.getRecivedComic());
  }

}
