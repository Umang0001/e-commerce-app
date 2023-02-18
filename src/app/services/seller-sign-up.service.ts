import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {sellerSignInObj} from '../interfaces'

@Injectable({
  providedIn: 'root'
})
export class SellerSignUpService {

  constructor(private http:HttpClient) { }

  showLoginForm=new BehaviorSubject<boolean>(false)

  regSellerUrl="http://localhost:3000/sellers";

  registerSeller(data:object){
   return this.http.post(this.regSellerUrl,data);
  }

  loginSeller(user:any){
    return this.http.get(`${this.regSellerUrl}?email=${user.email}&password=${user.password}`)
  }
}