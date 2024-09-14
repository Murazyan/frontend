import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app.routes.module";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ItemComponent } from "./components/item/item.component";
import { ItemList } from "./models/itemList";
import { ItemListComponent } from "./components/item-list/item-list.component";
import { HomeComponent } from "./components/home/home.component";
import { NumberPaginationComponent } from "./components/number-pagination/number-pagination.component";



@NgModule({
    declarations: [
      AppComponent,
      HomeComponent,
      ItemComponent,
      ItemListComponent,
      NumberPaginationComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      RouterModule,
      CommonModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule
     ],
    providers:  [],
    bootstrap: [AppComponent],
    exports:[]
  })
export class AppModule {}