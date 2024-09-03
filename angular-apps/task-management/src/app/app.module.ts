import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app.routes.module";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { AdminHomeComponent } from "./components/admin-home/admin-home.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbDropdownModule, NgbPaginationModule, NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { BoardColumnComponent } from "./components/board-column/board-column.component";
import { BoardComponent } from "./components/board/board.component";
import { TaskItemComponent } from "./components/task-item/task-item.component";
import { TaskEditComponent } from "./components/task-edit/task-edit.component";
import { TaskFullViewComponent } from "./components/task-full-view/task-full-view.component";
import { CommentListComponent } from "./components/comment-list/comment-list.component";
import { EditProfieComponent } from "./components/edit-profie/edit-profie.component";
import { NewTaskComponent } from "./components/new-task/new-task.component";
import { DropDownComponent } from "./components/drop-down/drop-down.component";

@NgModule({
    declarations: [
      AppComponent,
      FooterComponent,
      HeaderComponent,
      HomeComponent,
      AdminHomeComponent,
      LoginComponent,
      BoardColumnComponent,
      BoardComponent,
      TaskItemComponent,
      TaskEditComponent,
      TaskFullViewComponent,
      CommentListComponent,
      EditProfieComponent,
      NewTaskComponent,
      DropDownComponent,
       
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
