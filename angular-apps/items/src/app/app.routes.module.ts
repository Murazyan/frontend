import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { CascadingMenuComponent } from './pages/cascading-menu/components/cascading-menu/cascading-menu.component';



export const routes: Routes = [
    {
      path: "",
      component: HomeComponent,
      children: [
       
      ]
    },
    {
      path: 'menu',
      component: CascadingMenuComponent
    },
    
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
