import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-customizado',
  templateUrl: './pipe-customizado.component.html',
  styleUrls: ['./pipe-customizado.component.css']
})
export class PipeCustomizadoComponent {

  public multiplicaPor(valor:number,multiplicador:number) {
    return valor*multiplicador;
  }

}
