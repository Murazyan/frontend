import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app.routes.module";
import { RouterModule } from "@angular/router";
import { CommonModule, registerLocaleData } from "@angular/common";
import { HttpClientModule, provideHttpClient } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HomeComponent } from "./components/home/home.component";
import { HeaderComponent } from "./components/header/header.component";

import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';


import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { ModalComponent } from "./components/modal/modal.component";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzModalModule } from 'ng-zorro-antd/modal';

registerLocaleData(en);


@NgModule({
    declarations: [
      AppComponent,
      HeaderComponent,
      HomeComponent,
      SidebarComponent,
      ModalComponent,


    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      RouterModule,
      CommonModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      IconsProviderModule,
      NzLayoutModule,
      NzMenuModule,
      NzDropDownModule,
      NzGridModule ,
      NzButtonModule,
      NzModalModule

     ],
    providers:  [
    { provide: NZ_I18N, useValue: en_US },
    provideAnimationsAsync(),
    provideHttpClient()
  ],
    bootstrap: [AppComponent],
    exports:[]
  })
export class AppModule {}
