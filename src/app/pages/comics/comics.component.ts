import { map, finalize } from 'rxjs/operators';
import Swal from 'sweetalert2'
import { ComicsService } from './../../services/comics/comics.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import Comic from 'src/app/models/comic.model';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  allComics: Comic[] = [];
  comics: Comic[] = [];
  newComic: Comic;

  constructor(private comicService: ComicsService) { }

  showLoading() {
    Swal.fire({
      title: 'Buscando Quadrinhos',
      html: 'Aguarde ... :)',
      timerProgressBar: true,
    })
    Swal.showLoading();
    this.allComics = [];
    this.comicService.getAllComics().pipe(
      map(allComics => this.allComics = allComics.filter(c => c.id > 0)),
      finalize(() => {
        this.allComics.forEach(element => {
          this.newComic = new Comic;
          this.newComic.title = element.title;
          this.newComic.description = element.description;
          this.newComic.format = element.format;
          this.newComic.creators = element.creators;
          this.newComic.prices = element.prices;
          this.newComic.thumbnail = element.thumbnail;
          this.comics.push(this.newComic);
        });
        console.log(this.comics);
        Swal.close();
      })
    ).subscribe();
  };

  ngOnInit() {

    this.showLoading();

  }

}
