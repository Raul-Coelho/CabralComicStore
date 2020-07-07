import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  private readonly API = `${environment.marvelAPI.baseAPI}/comics${environment.marvelAPI.apiKey}`;

  constructor(private http: HttpClient) {

  }

  getAllComics(): Observable<any> {
    return this.http.get<any>(this.API).pipe(map((res: any) => res.data.results));
  }

}
