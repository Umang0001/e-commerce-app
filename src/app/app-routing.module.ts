import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"seller-auth",component:SignUpComponent},
  {path:"seller-home",component:SellerHomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
