import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}
   postUS(data: any){
     return this.http.post<any>("http://localhost:3000/USList/",data);
   }

   getUS(){
    return this.http.get<any>("http://localhost:3000/USList/");
  }

  putUS(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/USList/" + id, data);
  }

  deleteUS(id: number) {
    return this.http.delete<any>("http://localhost:3000/USList/" + id);
  }

}
