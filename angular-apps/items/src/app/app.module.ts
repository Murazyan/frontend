import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app.routes.module";
import { RouterModule } from "@angular/router";
import { CommonModule, registerLocaleData } from "@angular/common";
import { HttpClientModule, provideHttpClient } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ItemComponent } from "./components/item/item.component";
import { ItemListComponent } from "./components/item-list/item-list.component";
import { HomeComponent } from "./components/home/home.component";
import { NumberPaginationComponent } from "./components/number-pagination/number-pagination.component";
import { CascadingMenuComponent } from "./pages/cascading-menu/components/cascading-menu/cascading-menu.component";
import { MenuService } from "./pages/cascading-menu/services/menu.service";
import { MenuItemComponent } from "./pages/cascading-menu/components/menu-item/menu-item.component";
import en from '@angular/common/locales/en';
import { LoginComponent } from "./pages/ant-items/components/login/login.component";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzGridModule } from "ng-zorro-antd/grid";


registerLocaleData(en);



@NgModule({
    declarations: [
      AppComponent,
      HomeComponent,
      ItemComponent,
      ItemListComponent,
      NumberPaginationComponent,
      CascadingMenuComponent,
      MenuItemComponent,
      LoginComponent,
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      RouterModule,
      CommonModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      // AntdProviderModule,
      NzIconModule,
      NzLayoutModule,
      NzMenuModule,
      NzFormModule,
      NzInputModule,
      NzButtonModule,
      NzGridModule,
     ],
    providers:  [MenuService, 
      // { provide: NZ_I18N, useValue: en_US }, provideAnimationsAsync(), provideHttpClient()
    ],
    bootstrap: [AppComponent],
    exports:[]
  })
export class AppModule {}
