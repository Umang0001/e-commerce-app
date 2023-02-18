import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import {sellerSignInObj} from '../interfaces'

@Injectable({
  providedIn: 'root'
})
export class SellerSignUpService {

  constructor(private http:HttpClient,private router:Router) { }

  showLoginForm=new BehaviorSubject<boolean>(false);
  loginError=false;

  regSellerUrl="http://localhost:3000/sellers";

  registerSeller(data:object){
   return this.http.post(this.regSellerUrl,data,{observe:"response"}).subscribe(res=>{
    if (res) {
      console.log(res);
      this.showLoginForm.next(true)
      
    }
   });
  }

  loginSeller(user:any){
    this.showLoginForm.next(true)
    this.http.get(`${this.regSellerUrl}?email=${user.email}&password=${user.password}`,{observe:'response'}).subscribe(
      (d:any)=>{
        console.log(d);
        if (d.body.length) {
          console.log("user found");
          this.router.navigate(['/'])
          
        }
        else{
          this.loginError=true
        }
        
      }
    )

  }
}