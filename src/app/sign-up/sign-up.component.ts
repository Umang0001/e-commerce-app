import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  constructor(private fb:FormBuilder){

  }
 

  ngOnInit() {
    
  }
  emailPattern=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  signUpForm=this.fb.group({
    name:["aaa",Validators.compose([Validators.required,Validators.maxLength(5)])],
    password:["1111111",Validators.compose([Validators.minLength(6)])],
    email:["",Validators.compose([Validators.required,Validators.pattern(this.emailPattern)])]
})
  handleSubmit(){
    if (this.signUpForm.valid) {
      
      console.log(this.signUpForm.value);
    }
    else{
      console.log("invalid");
      
    }
    
  }
}
