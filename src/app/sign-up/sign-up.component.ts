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
 

  ngOnInit() {
    
  }
  emailPattern=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  signUpForm=this.fb.group({
    name:["",Validators.compose([Validators.required,Validators.maxLength(5)])],
    password:["",Validators.compose([Validators.required,Validators.minLength(6)])],
    email:["",Validators.compose([Validators.required,Validators.pattern(this.emailPattern)])]
})
  handleSubmit(){
    if (this.signUpForm.valid) {
      this.sellerService.registerSeller(this.signUpForm.value).subscribe(d=>{
        console.log(d)
        this.router.navigate([''])
      })
    }
    
  }
}
