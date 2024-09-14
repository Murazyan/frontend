import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { Quiz } from '../../models/quizzess';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizzessService } from '../../services/quizzess.service';
import { Question } from '../../models/question';
import { ConfirmationModalComponent, ModalData } from '../confirmation-modal/confirmation-modal.component';
import { TimerComponent } from '../timer/timer.component';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrl: './quiz.component.scss'
})
export class QuizComponent {

    protected questions: Question[];
    protected currentQuestionIndex = 0;
    protected currentQuestion?: Question;

    protected currentScore = 0;
    protected totalScore: number;
    selectedAnswer = '';
    isAnsweredByUser = true;

    @ViewChild('confirmationModal') confirmationModal: ConfirmationModalComponent;


    constructor(
        private activatedRout: ActivatedRoute,
        private quizService: QuizzessService,
        private router: Router,

    ) {
        this.activatedRout.params.subscribe(paramMap => {
            const quizId = paramMap['quizId']
            this.quizService.getQuestionData(quizId);
            this.quizService.questionsBS.subscribe(q => {
                this.questions = q
                this.currentQuestion = this.questions[0];
                this.totalScore = q.reduce((accumulator, question) => accumulator + question.score, 0);
            })
        })
    }


    confirmAnswer() {
        this.isAnsweredByUser = true;
        if (this.currentQuestion!.correctAnswerNumber === +this.selectedAnswer) {
            this.currentScore = this.currentScore + this.currentQuestion!.score;
        }
        if (this.currentQuestionIndex + 1 < this.questions.length) {
            this.toNextQuestion();
        } else {
            this.finishQuiz()
        }
    }

    skip() {
        this.toNextQuestion();
    }

    nextQuestion() {
        if (this.selectedAnswer === '') {
            this.confirmationModal.open(new ModalData(
                "Do you want to go to the next question without answering this one",
                this.currentQuestion,
                "Yes",
                "Cancel",
                true, true
            ))
        } else {
            this.toNextQuestion()
        }


    }

    private toNextQuestion() {
        this.selectedAnswer = '';
        this.currentQuestionIndex++;
        this.currentQuestion = this.questions[this.currentQuestionIndex];

    }

    finishQuiz() {
        this.showQuizResultModal();
    }

    handleCancelClick(currentQuestion: Question) {
        if (!currentQuestion) {
            this.router.navigate([''])
        }
    }

    private showQuizResultModal() {
        this.confirmationModal.open(new ModalData(
            "Your result is " + this.currentScore + ' / ' + this.totalScore,
            null,
            "",
            "OK",
            true, false
        ))

    }

    handleYesClick(currentQuestion: Question) {
        if (currentQuestion) {
            this.toNextQuestion()
        }
    }

    timeFinished() {
        this.selectedAnswer = '' + this.currentQuestion!.correctAnswerNumber
        this.isAnsweredByUser = false;
    }

}
