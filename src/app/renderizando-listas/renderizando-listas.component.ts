import { Component, OnInit } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent  {

  public _celulares: Celular[] = [
    { id: 1, nome: "Xiome 10S", descricao: "Top do Ano", esgotado: false },
    { id: 2, nome: "Xiome Max", esgotado: false },
    { id: 3, nome: "Xiome Pro Maz", descricao: "Top do Ano 2023", esgotado: true }
  ];
 
 
}
