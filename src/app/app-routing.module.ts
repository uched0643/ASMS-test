import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './students/navbar/navbar.component';
import { NavComponent } from './nav/nav.component';
const routes: Routes = [
  {path:'students', component: NavbarComponent},
  {path:'', component: NavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
