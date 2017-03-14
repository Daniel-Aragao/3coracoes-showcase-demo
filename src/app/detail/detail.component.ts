import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,  } from '@angular/router';
import { ExpressoService } from '../expresso.service';
import { Expresso } from '../model/expresso';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'tcl-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  private expresso: Expresso;
  private id: number;
  private quantidade: any[];

  constructor(private route: ActivatedRoute, private expressoService :ExpressoService) { }

  ngOnInit() {
    this.route.params.subscribe((p: Params) => this.id = p['id'])
    this.getExpresso();
  }

  getExpresso() {
    this.expressoService.getExpresso(this.id)
      .subscribe(e => this.setExpresso(e), erro => console.log(erro));
  }

  setExpresso(e :Expresso) {
    this.expresso = e
    this.quantidade = Array(this.expresso.intensidade).fill(this.expresso.intensidade);
  }
}
