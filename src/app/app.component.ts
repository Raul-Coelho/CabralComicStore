import { Md5 } from 'ts-md5/dist/md5';
import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { map, filter } from 'rxjs/operators';
import { ComicsService } from './services/comics/comics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {
  }

}
