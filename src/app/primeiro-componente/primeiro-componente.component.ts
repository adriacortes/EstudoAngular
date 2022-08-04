import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({ //INFORMA QUE A CLASSE É UM COMPONENTE!
    selector: "app-primeiro-componente", // REFERENCIA AO COMPONENTE
    template: "<h2>Primeiro Componente</h2>", // TEMPLETE INDICADO(HTML) E O ESTILO
    styles:   ["h2 { color:pink; }"] 
})
export class PrimeiroComponenteComponent{}