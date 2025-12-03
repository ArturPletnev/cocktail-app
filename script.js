// script.js - вся логика квиза
document.addEventListener('DOMContentLoaded', function() {
    console.log('Mini App SHOWBARMENOV загружен');
    
    // Имитация Telegram Web App для разработки
    if (!window.Telegram?.WebApp) {
        initDevMode();
    }
});

function initDevMode() {
    window.Telegram = {
        WebApp: {
            expand: () => console.log('[DEV] Telegram WebApp expanded'),
            sendData: (data) => {
                console.log('[DEV] Data sent to bot:', data);
                alert('[DEV] Данные отправлены в бота!');
            },
            close: () => console.log('[DEV] App closed'),
            isExpanded: true,
            themeParams: { bg_color: '#1a1a2e' }
        }
    };
    console.log('[DEV] Режим разработки включен');
}

// Логика квиза
const questions = [
    {
        id: 1,
        text: "🎪 Какой тип мероприятия?",
        options: ["Свадьба", "Корпоратив", "День рождения", "Частная вечеринка"]
    },
    {
        id: 2, 
        text: "💰 Бюджет на бар?",
        options: ["До 50,000 руб.", "50,000-100,000 руб.", "От 100,000 руб."]
    },
    {
        id: 3,
        text: "👥 Сколько гостей?",
        options: ["До 30 человек", "30-70 человек", "От 70 человек"]
    }
];

let currentQuestion = 0;
let answers = {};

function startQuiz() {
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('quizScreen').style.display = 'block';
    showQuestion(0);
}

function showQuestion(index) {
    const question = questions[index];
    document.getElementById('questionText').textContent = question.text;
    document.getElementById('currentQ').textContent = index + 1;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.onclick = () => selectAnswer(index, option);
        optionsContainer.appendChild(button);
    });
    
    currentQuestion = index;
}

function selectAnswer(qIndex, answer) {
    answers[`q${qIndex + 1}`] = answer;
    
    if (qIndex < questions.length - 1) {
        showQuestion(qIndex + 1);
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quizScreen').style.display = 'none';
    document.getElementById('resultScreen').style.display = 'block';
    
    const resultText = generateResult(answers);
    document.getElementById('resultContent').innerHTML = resultText;
}

function generateResult(answers) {
    let packageType = "STANDARD BAR";
    if (answers.q2 === "От 100,000 руб.") packageType = "PREMIUM BAR";
    if (answers.q2 === "До 50,000 руб.") packageType = "BASIC BAR";
    
    return `
        <div class="result-card">
            <h3>${packageType}</h3>
            <p>Для мероприятия: ${answers.q1 || "Не указано"}</p>
            <p>Количество гостей: ${answers.q3 || "Не указано"}</p>
            <p>📞 Бармен свяжется с вами для детального расчета</p>
        </div>
    `;
}

function sendToBot() {
    const data = {
        action: 'cocktail_quiz_result',
        answers: answers,
        timestamp: new Date().toISOString()
    };
    
    if (window.Telegram?.WebApp) {
        Telegram.WebApp.sendData(JSON.stringify(data));
        Telegram.WebApp.close();
    } else {
        console.log('Данные для бота:', data);
        alert('В режиме Telegram данные были бы отправлены боту!');
    }
}