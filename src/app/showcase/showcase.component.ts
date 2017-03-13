import { Component, OnInit } from '@angular/core';
import { Expresso } from '../model/expresso';

@Component({
  selector: 'tcl-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {
  expressos: Expresso[];

  constructor() { }

  ngOnInit() {
    this.expressos = [
      {
        id: 3,
        descricao: "Personalidade inconfundível. Combina doçura com notas de caramelo e chocolate. Encorpado e marcante, é um blend com predominância de cafés do tipo arábica de origens do Cerrado Mineiro e Alta Mogiana Paulista. Cultivados entre 800 e 1000 metros de altitude.",
        nome: 'Vibrante',
        intensidade: 3,
        notas: 'Chocolate, Caramelo e Torrada',
        origem: 'Cerrado Mineiro, Mogiana Paulista e Espírito Santo',
        preco: 16.9,
        url: 'http://i1-tresc.a8e.net.br/gm/cartucho-com-10-cap-cafe-espresso-vibrante_78535748_20038834.png',
        variedade: 'Arábica e Robusta'
      },
      {
        id: 4,
        descricao: "Blend suave, tem um pouco de tudo. Doçura, aroma e acidez. Vai bem a qualquer hora. Método de descafeinação rigoroso garante teor máximo de 0,1% de cafeína.",
        nome: 'Decaf',
        intensidade:1,
        notas: 'Amaro e Tostado',
        origem: 'Sul de Minas Gerais',
        preco: 16.9,
        url: 'http://i3-tresc.a8e.net.br/gm/cartucho-com-10-cap-cafe-espresso-decaf_78541716_20038835.png',
        variedade: 'Arábica'
      }
    ]
  }

}
