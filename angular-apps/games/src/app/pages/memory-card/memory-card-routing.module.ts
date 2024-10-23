import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MemoryCardPageComponent } from './components/memory-card-page/memory-card-page.component';
import { AppComponent } from '../../app.component';
import { HomeComponent } from '../../components/home/home.component';



const routes: Routes = [
  { 
    path: '', 
    component: MemoryCardPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemoryCardRoutingModule { }
