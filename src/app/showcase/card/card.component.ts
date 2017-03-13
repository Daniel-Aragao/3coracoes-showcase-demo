import { Component, OnInit, Input } from '@angular/core';
import { Expresso } from '../../model/expresso';

@Component({
  selector: 'tcl-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() expresso: Expresso;

  constructor() { }

  ngOnInit() {
  }

}
