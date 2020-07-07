import Swal from 'sweetalert2'
import { ComicsService } from './../../services/comics/comics.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  allComics: Observable<any>;

  constructor(private comicService: ComicsService) { }

  showLoading() {
    Swal.fire({
      title: 'Buscando Quadrinhos',
      html: 'Aguarde ... :)',
      timerProgressBar: true,
    })
    Swal.showLoading();
    this.comicService.getAllComics().subscribe(res => {
      console.log(res);
      Swal.close();
    });
  };

  ngOnInit() {

    this.showLoading();


  }

}
