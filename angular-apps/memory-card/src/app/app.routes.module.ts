import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';


export const routes: Routes = [

  // {
  //   path: "",
  //   component: AppComponent,
  //   // children:[
  //   //   { 
  //   //     path: 'memory-card',
  //   //     loadChildren: () => import('./pages/memory-card/memory-card.module').then(m => m.MemoryCartModule)
  //   //   },
  //   // ] 
  // },
  {
    path:'memory-card',
    loadChildren: () => import('./pages/memory-card/memory-card.module').then(m => m.MemoryCartModule)
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
