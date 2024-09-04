export class Question{
    question : string;
    correctAnswerNumber: number;
    id: string;
    choises: string[];
    score: number;
    time: number
    
}

export class QuestionList{
    questions: Question[];
}