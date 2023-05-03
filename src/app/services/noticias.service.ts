import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  KEY: string = 'f7fb0f3aea834c2e957c3a943afaf385';
  
  constructor(private http: HttpClient) { 

  }

  getNoticias(parametros: any): Observable<any> {
    const URL = `https://newsapi.org/v2/top-headlines?country=${parametros.pais}&category=${parametros.categoria}&apiKey=${this.KEY}`;
    return this.http.get(URL);
  }
}

