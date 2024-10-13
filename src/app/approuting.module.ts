import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LobyComponent } from './componentes/loby/loby.component';
import { LandingComponent } from './componentes/landing/landing.component';

const routes: Routes = [
 /*  {path:"alquimia",component: LobyComponent}, */
  {path:"landing",component: LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
