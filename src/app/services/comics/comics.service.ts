import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import Comic from 'src/app/models/comic.model';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  private readonly API = `${environment.marvelAPI.baseAPI}/comics${environment.marvelAPI.apiKey}`;

  constructor(private http: HttpClient) {

  }

  getAllComics(): Observable<Comic[]> {
    return this.http.get<Comic[]>(this.API).pipe(map((res: any) => res.data.results));
  }

}
