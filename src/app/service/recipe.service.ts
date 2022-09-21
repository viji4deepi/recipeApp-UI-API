import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Service } from './service.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor (
    private apiService: Service
  ) {}

   APP_ID : string= '0f5b4339';
   APP_KEY : string = 'dfcf713f4a4549605870fe306678d7a7';

  get(search:string): Observable<any> {
    return this.apiService.get('https://api.edamam.com/search?q='+search+'&app_id='+this.APP_ID+'&app_key='+ this.APP_KEY+'&to=24')
      .pipe(map(data => { return data.hits})); 
  }

  


}