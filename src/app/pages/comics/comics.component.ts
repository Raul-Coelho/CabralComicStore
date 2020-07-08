import { ModalComponent } from './../../components/modal/modal.component';
import { map, finalize } from 'rxjs/operators';
import Swal from 'sweetalert2'
import { ComicsService } from './../../services/comics/comics.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import Comic from 'src/app/models/comic.model';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  allComics: Comic[] = [];
  comics: Comic[] = [];

  rareComics: Comic[] = [];
  comumComics: Comic[] = [];

  newComic: Comic;
  modalRef: MDBModalRef;

  listSize: number = 0;
  numberComicsRare: number = 0;

  constructor(
    private comicService: ComicsService,
    public modalService: MDBModalService,
  ) { }

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
        this.listSize = this.allComics.length;
        this.numberComicsRare = Math.round(this.listSize * 12 / 100);
        this.allComics.forEach(element => {
          this.newComic = new Comic;
          if (this.numberComicsRare != 0) {
            this.newComic.id = element.id;
            this.newComic.title = element.title;
            this.newComic.type = "RARA";
            this.newComic.description = element.description;
            this.newComic.format = element.format;
            this.newComic.creators = element.creators;
            this.newComic.prices = element.prices;
            this.newComic.thumbnail = element.thumbnail;
            this.rareComics.push(this.newComic);
            this.numberComicsRare--;
          } else {
            this.newComic.id = element.id;
            this.newComic.title = element.title;
            this.newComic.type = "COMUM";
            this.newComic.description = element.description;
            this.newComic.format = element.format;
            this.newComic.creators = element.creators;
            this.newComic.prices = element.prices;
            this.newComic.thumbnail = element.thumbnail;
            this.comumComics.push(this.newComic);
          }
        });
        console.log(this.listSize);
        Swal.close();
      })
    ).subscribe();
  };

  openModal(recivedComic: Comic) {
    this.modalRef = this.modalService.show(ModalComponent, {
      backdrop: true,
      keyboard: true,
      focus: true,
      show: false,
      ignoreBackdropClick: false,
      class: 'modal-side modal-top-right',
      containerClass: 'right',
      animated: true,
      data: {
        heading: 'Comic',
        comic: recivedComic
      }
    });
  }

  ngOnInit() {

    this.showLoading();


  }

}
