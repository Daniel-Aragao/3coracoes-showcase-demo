import { Component, OnInit } from '@angular/core';
import { Expresso } from '../../model/expresso';

@Component({
  selector: 'tcl-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  expressao: Expresso = new Expresso();
  constructor() { }

  ngOnInit() {
    this.expressao = {
      descricao: "Personalidade inconfundível. Combina doçura com notas de caramelo e chocolate. Encorpado e marcante, é um blend com predominância de cafés do tipo arábica de origens do Cerrado Mineiro e Alta Mogiana Paulista. Cultivados entre 800 e 1000 metros de altitude.",
      nome: 'Vibrante',
      intensidade: 3,
      notas: 'Chocolate, Caramelo e Torrada',
      origem: 'Cerrado Mineiro, Mogiana Paulista e Espírito Santo',
      preco: 16.9,
      url: 'http://i1-tresc.a8e.net.br/gm/cartucho-com-10-cap-cafe-espresso-vibrante_78535748_20038834.png',
      variedade: 'Arábica e Robusta'
    }
  }

}
