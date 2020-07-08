import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import Comic from 'src/app/models/comic.model';
import Creator from 'src/app/models/creator.model';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  id: number;

  private readonly API = `${environment.marvelAPI.baseAPI}/comics${environment.marvelAPI.apiKey}&limit=40&offset=40`;

  constructor(private http: HttpClient) {

  }

  getAllComics(): Observable<Comic[]> {
    return this.http.get<Comic[]>(this.API).pipe(map((res: any) => res.data.results));
  }

  getCreators(id: number): Observable<Creator[]> {
    return this.http.get<Creator[]>(`${environment.marvelAPI.baseAPI}/comics/${id}/${environment.marvelAPI.creators}`).pipe(map((res: any) => res.data.results));
  }


}
