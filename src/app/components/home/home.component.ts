import { Component } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'news-api';
  listaDeNoticias: any[] = [];

  loading = false;

  constructor(private _api: NoticiasService) {

  }

  buscarNoticias(parametro: any) {
    this.loading = true;
    this.listaDeNoticias = [];
    
    let timeout: number = 3000;
    
    setTimeout(() => {
      this._api.getNoticias(parametro).subscribe(result => {
        this.loading = false;
        this.listaDeNoticias = result.articles;
      })
    }, timeout);
  }
}
