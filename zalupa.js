const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2,
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2,
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2,
    },
];

function startQuiz() {
    let correctAnswers = 0;

    for (let i = 0; i < quiz.length; i++) {
        const currentQuestion = quiz[i];
        let userAnswer;

        while (true) {
            userAnswer = prompt(
                currentQuestion.question + "\n" + currentQuestion.options.join("\n")
            );

            if (userAnswer === null) {
                alert("Игра отменена");
                return;
            }

           const userAnswerNumber = parseInt(userAnswer);
           if(isNaN(userAnswerNumber)) {
                 alert("Введите пожалуйста номер ответа");
                  continue;
           }

             if(userAnswerNumber < 1 || userAnswerNumber > currentQuestion.options.length ) {
                 alert("Введите номер ответа от 1 до " + currentQuestion.options.length );
                   continue;
             }
             break;
        }


        if (parseInt(userAnswer) === currentQuestion.correctAnswer) {
            correctAnswers++;
        }
    }

    alert("Количество правильных ответов: " + correctAnswers + " из " + quiz.length);
}