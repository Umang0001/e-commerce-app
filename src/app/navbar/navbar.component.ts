import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private router:Router){}

  usertype:string="default"
  
  currentSeller:any
  ngOnInit() {
    if (!this.currentSeller) {
      this.currentSeller=JSON.parse(localStorage.getItem("seller")!)
    }
    this.router.events.subscribe((d:any)=>{
      if (d.url) {
        if (localStorage.getItem("seller") && d.url.includes("seller")) {
          this.usertype="seller"
        }
        else{
          this.usertype="default"

        }
      }
      
    })

  }

  handleLogout(){
    localStorage.removeItem("seller")
    this.router.navigate(['/'])
  }
}
