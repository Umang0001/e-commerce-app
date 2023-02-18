import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { sellerSignInObj } from '../interfaces';
import { SellerSignUpService } from '../services/seller-sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  constructor(private fb:FormBuilder,
    private sellerService:SellerSignUpService,
    private router:Router
    ){

  }
  
  
  showLoginForm:any


  ngOnInit() {
    
    
  }
  emailPattern=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  signUpForm =this.fb.group({
    name:["",Validators.compose([Validators.required,Validators.minLength(5)])],
    password:["",Validators.compose([Validators.required,Validators.minLength(6)])],
    email:["",Validators.compose([Validators.required,Validators.pattern(this.emailPattern)])]
})

  loginForm=this.fb.group({
    email:["",Validators.compose([Validators.required,Validators.pattern(this.emailPattern)])],
    password:["",Validators.compose([Validators.required,Validators.minLength(6)])]

  })
  handleSignUp(){
    this.sellerService.registerSeller(this.signUpForm.value)
    this.showLoginForm=true;
    
     
    }
    
    handleLogin(){
      this.sellerService.loginSeller(this.loginForm.value).subscribe((d:any)=>{
        console.log(d);
        // this.router.navigate(['seller-home'])
      
    })

    

  }

  showLogin(){
    this.showLoginForm=true;
  }
  showSignUp(){
    this.showLoginForm=false;
  }
}
