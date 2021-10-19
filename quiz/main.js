// All answer options
const option1 = document.querySelector('.option1'),
      option2 = document.querySelector('.option2'),
      option3 = document.querySelector('.option3'),
      option4 = document.querySelector('.option4');

// All aur options
const optionElements = document.querySelectorAll('.option');

const question = document.getElementById('question'); //Сам Вопрос

const numberOfQuestion = document.getElementById('number-of-question'), //Номер вопроса
      numberOfAllQuestions = document.getElementById('number-of-all-questions'); //Колличество всех вопросов

let indexOfQuestion, //Индекс текущего вопроса
    indexOfPage = 0; //Индекс страницы

const answersTracker = document.getElementById('answers-tracker'); //Обертка трекера
const btnNext = document.getElementById('btn-next'); //Кнопка ДАЛЕЕ

let score = 0; //Итоговый результат викторины

const correctAnswer = document.getElementById('correct-answer'), //Колличество правильных ответов
      numberOfAllQuestions2 = document.getElementById('number-of-all-questions-2'), //Колличество всех вопросов в модальном окне
      btnTryAgain = document.getElementById('btn-try-again'); //кнопка "Начать викторину заново"

const questions = [
    {
        question: 'Что будет в результате следующего выражения? alert(Math.sqrt(36));',
        options: [
            'Такого в JavaScript нельзя сделать',
            '0',
            '6',
            'NaN',
        ],
        rightAnswer: 2
    },
    {
        question: 'Какая информация будет получена при создании объекта Date?',
        options: [
            'Пустая строка',
            'Текущая дата и время',
            'undefined',
            'Дата регистрации веб страницы',
        ],
        rightAnswer: 1
    },
    {
        question: 'В объекте Math, какие из следующих констант НЕ существуют: ',
        options: [
            'Math.Pi',
            'Math.E',
            'Math.LN10',
            'Math.ABC',
        ],
        rightAnswer: 3
    },
    {
        question: 'В объекте Math, какой из следующих методов используется для вычисления квадратного корня? ',
        options: [
            'sqrt',
            'round',
            'root',
            'ceil',
        ],
        rightAnswer: 0
    },
    {
        question: 'Что такое DOM? ',
        options: [
            'Document Orientation Model',
            'Definitive Object Model',
            'Document Object Model',
            'Dashboard Of Modal',
        ],
        rightAnswer: 2
    },
    {
        question: 'Какой метод используется для замещения узлов',
        options: [
            'replace',
            'replaceElements',
            'replaceChild',
            'replaceNodes',
        ],
        rightAnswer: 2
    }
];

numberOfAllQuestions.innerHTML = questions.length; //Выводим колличество вопросов

const load = () => {
    question.innerHTML = questions[indexOfQuestion].question;

    //Мапим ответы
    option1.innerHTML = questions[indexOfQuestion].options[0];
    option2.innerHTML = questions[indexOfQuestion].options[1];
    option3.innerHTML = questions[indexOfQuestion].options[2];
    option4.innerHTML = questions[indexOfQuestion].options[3];

    numberOfQuestion.innerHTML = indexOfPage + 1; //Установка номера текущей страницы
    indexOfPage++; //Увеличение индекса страницы
}

let completedAnswers = []; //Массив для уже заданных вопросов

const randomQuestion = () => {
    let randomNumber = Math.floor(Math.random() * questions.length);
    let hitDuplicate = false; //Якорь для проверки одинаковых вопросов

    if(indexOfPage == questions.length) {
        quizOver();
    }else{
        if(completedAnswers.length > 0) {
            completedAnswers.forEach(item => {
                if(item == randomNumber){
                    hitDuplicate = true;
                }
            });
            if(hitDuplicate) {
                randomQuestion();
            }else{
                indexOfQuestion = randomNumber;
                load();
            }
        }
        if(completedAnswers.length == 0){
            indexOfQuestion = randomNumber;
                load();
        }
    }
    completedAnswers.push(indexOfQuestion);
};

const checkAnswer = el => {
    if(el.target.dataset.id == questions[indexOfQuestion].rightAnswer) {
        el.target.classList.add('correct');
        updateAnswerTracker('correct');
        score++;
    }else{
        el.target.classList.add('wrong');
        updateAnswerTracker('wrong');
    }
    disabledOptions();
}

for(option of optionElements) {
    option.addEventListener('click' , e => checkAnswer(e));
}


const disabledOptions = () => {
    optionElements.forEach(item => {
        item.classList.add('disabled');
        if(item.dataset.id == questions[indexOfQuestion].rightAnswer) {
            item.classList.add('correct');
        }
    })
}

//Переход на новый вопрос с удалением (зачисткой) старого (удаление всех классов со всех ответов)
const enableOptions = () => {
    optionElements.forEach(item => {
        item.classList.remove('disabled', 'correct', 'wrong');
    })
}
//Кружочки под кнопкой Next
const answerTracker = () => {
    questions.forEach(() => {
        const div = document.createElement('div');
        answersTracker.appendChild(div);
    })
};

const updateAnswerTracker = status => {
    answersTracker.children[indexOfPage - 1].classList.add(`${status}`);
}

const validate = () => {
    if (!optionElements[0].classList.contains('disabled')){
        alert('Вам нужно выбрать один из вариантов ответа');
    }else{
        randomQuestion();
        enableOptions();
    }
}

const quizOver = () => {
    document.querySelector('.quiz-over-modal').classList.add('active');
    correctAnswer.innerHTML = score;
    numberOfAllQuestions2.innerHTML = questions.length;
}
//Начать заново прохождение теста при нажатии на кнопку "Попробовать снова"
const tryAgain = () => {
    window.location.reload();
};

btnTryAgain.addEventListener('click', tryAgain);

btnNext.addEventListener('click',() => {
    validate();
})

window.addEventListener('load', () => {
    randomQuestion();
    answerTracker();
});