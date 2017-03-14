import { Component, OnInit } from '@angular/core';
import { Expresso } from '../model/expresso';
import { ExpressoService } from '../expresso.service';

@Component({
  selector: 'tcl-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {
  private expressos: Expresso[];

  constructor(private expressoService: ExpressoService) { }

  ngOnInit() {
    this.getExpressos();
  }

  getExpressos() {
    this.expressoService.getExpressos()
      .subscribe((exs: Expresso[]) => this.expressos = exs,
       error =>  console.log(<any>error));
  }

}
