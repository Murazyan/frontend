import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app.routes.module";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
      AppComponent,
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      RouterModule,
      CommonModule,
     ],
    providers:  [],
    bootstrap: [AppComponent]
  })
export class AppModule {}
