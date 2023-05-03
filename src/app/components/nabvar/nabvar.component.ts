import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.css']
})
export class NabvarComponent implements OnInit {

  @Input() titulo: string;

  constructor() {
    this.titulo = '';
  }

  ngOnInit(): void {
      
  }
}
