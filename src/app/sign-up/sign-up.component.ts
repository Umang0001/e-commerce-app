import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  showLoginForm:boolean=false;
 

  ngOnInit() {
    
  }
  emailPattern=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  signUpForm=this.fb.group({
    name:["",Validators.compose([Validators.required,Validators.maxLength(5)])],
    password:["",Validators.compose([Validators.required,Validators.minLength(6)])],
    email:["",Validators.compose([Validators.required,Validators.pattern(this.emailPattern)])]
})

  loginForm=this.fb.group({
    email:["",Validators.compose([Validators.required,Validators.pattern(this.emailPattern)])],
    password:["",Validators.compose([Validators.required,Validators.minLength(6)])]

  })
  handleSignUp(){
      this.sellerService.registerSeller(this.signUpForm.value).subscribe(d=>{
        console.log(d)
        this.router.navigate([''])
      })
  }

  handleLogin(){
    console.log(this.loginForm.value);
    this.router.navigate([''])

    

  }

  showLogin(){
    this.showLoginForm=true;
  }
  showSignUp(){
    this.showLoginForm=false;
  }
}
