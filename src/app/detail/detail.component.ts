import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
  
  constructor(private route: ActivatedRoute, private expressoService :ExpressoService) { }

  ngOnInit() {
    this.route.params
            .switchMap((params: Params) => this.expressoService.getExpresso(+params['id']))
            .subscribe((expresso: Expresso) => this.expresso = expresso);
  }

}
