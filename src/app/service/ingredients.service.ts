import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Service } from './service.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  constructor (
    private apiService: Service
  ) {}

  private baseUrl = "http://localhost:8080/ingredients";

  add(ingredient: any): Observable<any>{
      return this.apiService.post("http://localhost:8080/ingredients",ingredient);
  }

  get() : Observable<any>{
    return this.apiService.get("http://localhost:8080/ingredients");
  }


  
//   updateEmployee(data: any, id :number) {
//     return this.apiService.put(`${this.baseUrl}/`+id,data)
//     .pipe(map((res:any)=>{
//       return res;
//     }))
// }

    delete(id: number): Observable<any> {
      return this.apiService.delete("http://localhost:8080/ingredients/{id}");
}


}