import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app.routes.module";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbDropdownModule, NgbPaginationModule, NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { DragDropModule } from "@angular/cdk/drag-drop";

@NgModule({
    declarations: [
      AppComponent,
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      RouterModule,
      CommonModule,
      DragDropModule,
      NgbDropdownModule,
      NgbTooltipModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      NgbPaginationModule,
     ],
    providers:  [],
    bootstrap: [AppComponent],
    exports:[NgbDropdownModule]
  })
export class AppModule {}
