import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerSignUpService {

  constructor(private http:HttpClient) { }

  showLoginForm=new BehaviorSubject<boolean>(false)

  regSellerUrl="http://localhost:3000/sellers";

  registerSeller(data:object){
   this.http.post(this.regSellerUrl,data,{observe:'response'}).subscribe((res:any)=>{
    if(res){
      this.showLoginForm.next(true);
    }
   })
  }

  loginSeller(user:any){
    return this.http.get(`${this.regSellerUrl}?email=${user.email}&password=${user.password}`)
  }
}