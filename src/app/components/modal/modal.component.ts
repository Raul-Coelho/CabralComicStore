import { map, finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ComicsService } from './../../services/comics/comics.service';
import { MDBModalRef } from 'angular-bootstrap-md';
import Comic from 'src/app/models/comic.model';
import { Component, OnInit } from '@angular/core';
import Creator from 'src/app/models/creator.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  heading: string;
  comic: Comic;
  allCreators: Creator[] = [];
  creators: Creator[] = [];
  newcreator: Creator;

  constructor(
    public modalRef: MDBModalRef,
    private comicService: ComicsService
  ) { }

  getCreators() {
    this.allCreators = [];
    this.comicService.getCreators(this.comic.id).pipe(
      map(allCreators => this.allCreators = allCreators.filter(c => c.id > 0)),
      finalize(() => {
        this.allCreators.forEach(element => {
          this.newcreator = new Creator;
          this.newcreator.id = element.id;
          this.newcreator.firstName = element.firstName;
          this.newcreator.lastName = element.lastName;
          this.newcreator.fullName = element.fullName;
          this.newcreator.modified = element.modified;
          this.creators.push(this.newcreator);
        });
        console.log(this.creators);
      })
    ).subscribe();
  }

  ngOnInit(): void {
    this.getCreators();
  }
}
