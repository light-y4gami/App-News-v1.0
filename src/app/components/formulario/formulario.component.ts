import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() parametrosSeleccionados = new EventEmitter<any>();

  categoriaSeleccionada: string = '';
  paisSeleccionado: string = '';

  categorias: any[] = [
    {value: 'general', nombre: 'General'},
    {value: 'business', nombre: 'Business'},
    {value: 'entertainment', nombre: 'Entertainment'},
    {value: 'health', nombre: 'Health'},
    {value: 'science', nombre: 'Science'},
    {value: 'sports', nombre: 'Sports'},
    {value: 'technology', nombre: 'Technology'},
  ]

  paises: any[] = [
    {value: 'us', nombre: 'USA'},
    {value: 'ch', nombre: 'Suiza'},
    {value: 'it', nombre: 'Italia'},
    {value: 'jp', nombre: 'Japón'},
    {value: 'ru', nombre: 'Rusia'},
    {value: 'gb', nombre: 'United Kingdom'},
  ]

  constructor() {}

  ngOnInit(): void {
    this.categoriaSeleccionada = this.categorias[0].value; // set first category to default
    this.paisSeleccionado = this.paises[0].value; // set first default country
  }

  buscarNoticia() {
    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado,
    }
    this.parametrosSeleccionados.emit(PARAMETROS);
  }
}
