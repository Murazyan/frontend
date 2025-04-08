import { TimeInfo } from "../components/timer/timer.component";

export class Question{
    question : string;
    correctAnswerNumber: number;
    id: string;
    choises: string[];
    score: number;
    time: number;
    timeInfo : TimeInfo;

    constructor(time: number) {
        this.timeInfo = new TimeInfo(time)
    }
    
}

export class QuestionList{
    questions: Question[];
}