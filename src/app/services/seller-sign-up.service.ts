import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SellerSignUpService {

  constructor(private http:HttpClient) { }

  regSellerUrl="http://localhost:3000/sellers";

  registerSeller(data:object){
   return this.http.post(this.regSellerUrl,data)
  }
}
