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
import { TimerComponent } from "./components/timer/timer.component";
import { HomeComponent } from "./components/home/home.component";
import { TopicService } from "./services/topic.service";
import { TopicSelectorComponent } from "./components/topic-selector/topic-selector.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { QuestionComponent } from "./components/question/question.component";
import { QuizItemComponent } from "./components/quiz-item/quiz-item.component";
import { QuizItemListComponent } from "./components/quiz-item-list/quiz-item-list.component";
import { QuizComponent } from "./components/quiz/quiz.component";

@NgModule({
    declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      HomeComponent,
      TimerComponent,
      TopicSelectorComponent,
      QuestionComponent,
      QuizItemComponent,
      QuizItemListComponent,
      QuizComponent,
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
    providers:  [TopicService],
    bootstrap: [AppComponent],
    exports:[NgbDropdownModule]
  })
export class AppModule {}
