import { Injectable } from '@angular/core';
import { Expresso } from './model/expresso';
import { Headers, Http, Response } from '@angular/http'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ExpressoService {
  private urlDefault = 'http://webapidemo3cor.azurewebsites.net/api/Expressos';

  constructor(private http: Http) { }

  getExpresso(id: number): Observable<Expresso> {
    return this.http.get((this.urlDefault + '/' + id))
      .map((response: Response) => response.json() as Expresso)
      .catch(this.handleError);;
  }

  getExpressos(): Observable<Expresso[]> {
    return this.http.get(this.urlDefault)
      .map((response: Response) => response.json() as Expresso[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Erro getExpresso', error);
    return Promise.reject(error.message || error);
  }

}
