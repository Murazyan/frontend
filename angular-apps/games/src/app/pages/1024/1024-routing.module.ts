import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OttePageComponent } from './components/otte-page/otte-page.component';



const routes: Routes = [
  { 
    path: '', 
    component: OttePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OTTERoutingModule { }
