import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segunda-componente',
  templateUrl: './segunda-componente.component.html',
  styleUrls: ['./segunda-componente.component.css']
})
export class SegundaComponenteComponent  {
  nome = "Adria";
  dataNascimento = "1992-02-29";
  urlImagem = "/assets/IMG_3692.JPG";

  mostrarDataNascimento(){
    alert (`Data de nascimento: ${this.dataNascimento}`)
  }
  
}
