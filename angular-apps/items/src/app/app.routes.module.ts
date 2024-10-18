import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { CascadingMenuComponent } from './pages/cascading-menu/components/cascading-menu/cascading-menu.component';
import { LoginComponent } from './pages/ant-items/components/login/login.component';



export const routes: Routes = [
    {
      path: "",
      component: HomeComponent,
      children: [

      ],
    },
    {
      path: 'menu',
      component: CascadingMenuComponent
    },

    {
      path: 'login',
      component: LoginComponent
    },

    {
      path: 'welcome',
      loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)
    }


  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
