// script.js - Квиз по подбору коктейлей SHOWBARMENOV
console.log('🍸 SHOWBARMENOV Cocktail Quiz loaded');

// ========== БАЗА ДАННЫХ КОКТЕЙЛЕЙ ==========
const cocktailsDB = {
    // Алкогольные -> Сладкие
    'алкогольные_сладкие': [
        { name: 'ГАВАЙИ', ingredients: 'ром, сироп кокос, сироп блю кюрасао, лимонный сок, сок апельсин', price: '250 руб.', emoji: '🍍' },
        { name: 'СЕКС НА ПЛЯЖЕ', ingredients: 'водка, сироп гренадин, сироп маракуя, лимонный сок, сок апельсин', price: '250 руб.', emoji: '🏖️' },
        { name: 'ПИНО КОЛАДА', ingredients: 'ром, сироп кокос, сливки, сок ананас', price: '250 руб.', emoji: '🥥' },
        { name: 'PINA COLADA PREMIUM', ingredients: 'ром, ананас свежий, сок ананас, сливки, кокосовый сироп, 350 мл.', price: '1000 руб.', emoji: '👑', note: 'Премиум версия' }
    ],
    
    // Алкогольные -> Кисло-сладкие
    'алкогольные_кисло-сладкие': [
        { name: 'МОХИТО', ingredients: 'ром, лайм, мята, сахарный сироп, содовая', price: '250 руб.', emoji: '🌿' },
        { name: 'КОСМОПОЛИТЕН', ingredients: 'водка, трипл сек, лимонный сок, морс', price: '250 руб.', emoji: '🌃' },
        { name: 'МАРАКУЕВЫЙ ДАЙКИРИ', ingredients: 'ром, сироп маракуя, сок лимона', price: '250 руб.', emoji: '🥭' },
        { name: 'БЕЙЗЕЛ СМЭШ', ingredients: 'джин, базилик, сахарный сироп, лимонный сок', price: '250 руб.', emoji: '🌱' },
        { name: 'Виски сауэр', ingredients: 'Виски, сахарный сироп, белок, сок лимона', price: '250 руб.', emoji: '🥃' },
        { name: 'Game of Thrones', ingredients: 'пюре маракуйя, сироп миндаль, ром, сок лимона, маракуйя', price: '350 руб.', emoji: '👑' },
        { name: 'Daiqiri mango', ingredients: 'ром, сок лимона, манго, сироп манго', price: '350 руб.', emoji: '🥭' },
        { name: 'PORN STAR', ingredients: 'Водка, пюре Маракуйя, ванильный сироп, сок лимона, игристое', price: '350 руб.', emoji: '⭐' },
        { name: 'APEROL SOUR', ingredients: 'Апероль, джин, сок лимона, сахарный сироп, яичный белок', price: '350 руб.', emoji: '🍊' }
    ],
    
    // Алкогольные -> Шоты
    'алкогольные_шоты': [
        { name: 'НАСТОЙКА SKITTLES', ingredients: 'Цветная сладкая настойка', price: '200 руб.', emoji: '🌈' },
        { name: 'Гранатовый', ingredients: 'водка, гренадин, сок лимона', price: '150 руб.', emoji: '❤️' },
        { name: 'НАСТОЙКА ИРИСКА', ingredients: 'Карамельная настойка', price: '200 руб.', emoji: '🍬' },
        { name: 'Маракуевый', ingredients: 'водка, сироп маракуя, сок лимона', price: '150 руб.', emoji: '🥭' },
        { name: 'Б-52', ingredients: 'кофейный ликер, сливочный ликер, апельсиновый ликер', price: '200 руб.', emoji: '🛫' },
        { name: 'Лимончелло', ingredients: 'Итальянский лимонный ликер', price: '200 руб.', emoji: '🍋' },
        { name: 'Коктейльный микс "Эликсир счастья"', ingredients: '10 пробирок: клубничная страсть, манговое наслаждение, взрывной лимон', price: '2000 руб.', emoji: '🧪', note: 'Для большой компании' }
    ],
    
    // Алкогольные -> С экзотическими фруктами
    'алкогольные_экзотические': [
        { name: 'Red Dress', ingredients: 'кумкват, малина/малиновое пюре, водка/виски, клюквенный морс, физалис', price: '350 руб.', emoji: '👗' },
        { name: 'Game of Thrones', ingredients: 'пюре маракуйя, сироп миндаль, ром, сок лимона, маракуйя', price: '350 руб.', emoji: '👑' },
        { name: 'Mojito Dragon Fruit', ingredients: 'лайм, мята, драгон фрукт, сироп, ром, содовая', price: '350 руб.', emoji: '🐉' },
        { name: 'Daiqiri mango', ingredients: 'ром, сок лимона, манго, сироп манго', price: '350 руб.', emoji: '🥭' },
        { name: 'PINA COLADA PREMIUM', ingredients: 'ром, ананас свежий, сок ананас, сливки, кокосовый сироп, 350 мл.', price: '1000 руб.', emoji: '👑' }
    ],
    
    // Алкогольные -> Крепкие
    'алкогольные_крепкие': [
        { name: 'МАРАКУЕВЫЙ ДАЙКИРИ', ingredients: 'ром, сироп маракуя, сок лимона', price: '250 руб.', emoji: '🥭' },
        { name: 'БЕЙЗЕЛ СМЭШ', ingredients: 'джин, базилик, сахарный сироп, лимонный сок', price: '250 руб.', emoji: '🌱' },
        { name: 'Виски сауэр', ingredients: 'Виски, сахарный сироп, белок, сок лимона', price: '250 руб.', emoji: '🥃' },
        { name: 'Daiqiri mango', ingredients: 'ром, сок лимона, манго, сироп манго', price: '350 руб.', emoji: '🥭' },
        { name: 'NEGRONI', ingredients: 'Кампари, вермут rosso, джин', price: '350 руб.', emoji: '🥃' }
    ],
    
    // Алкогольные -> Легкие
    'алкогольные_легкие': [
        { name: 'АПЕРОЛЬ ШПРИЦ', ingredients: 'апероль, игристое, содовая, апельсин', price: '250 руб.', emoji: '🍊' },
        { name: 'МОХИТО', ingredients: 'ром, лайм, мята, сахарный сироп, содовая', price: '250 руб.', emoji: '🌿' },
        { name: 'ГАВАЙИ', ingredients: 'ром, сироп кокос, сироп блю кюрасао, лимонный сок, сок апельсин', price: '250 руб.', emoji: '🍍' },
        { name: 'СЕКС НА ПЛЯЖЕ', ingredients: 'водка, сироп гренадин, сироп маракуя, лимонный сок, сок апельсин', price: '250 руб.', emoji: '🏖️' },
        { name: 'КОСМОПОЛИТЕН', ingredients: 'водка, трипл сек, лимонный сок, морс', price: '250 руб.', emoji: '🌃' },
        { name: 'ПИНО КОЛАДА', ingredients: 'ром, сироп кокос, сливки, сок ананас', price: '250 руб.', emoji: '🥥' }
    ],
    
    // Алкогольные -> Горячие
    'алкогольные_горячие': [
        { name: 'Глинтвейн', ingredients: 'красное вино, мед, корица, гвоздика, апельсин, лимон', price: '250 руб.', emoji: '🔥', note: 'Для холодной погоды' }
    ],
    
    // БЕЗАЛКОГОЛЬНЫЕ
    'безалкогольные': [
        { name: 'МОХИТО безалкогольный', ingredients: 'лайм, мята, сахарный сироп, содовая', price: '200 руб.', emoji: '🌿' },
        { name: 'ГАВАЙИ безалкогольные', ingredients: 'сироп кокос, сироп блю кюрасао, лимонный сок, сок апельсин', price: '200 руб.', emoji: '🍍' },
        { name: 'САН-ФРАНЦИСКО', ingredients: 'сироп гренадин, сироп маракуя, лимонный сок, сок апельсин', price: '200 руб.', emoji: '🌉' },
        { name: 'ПИНО КОЛАДА безалкогольная', ingredients: 'сироп кокос, сливки, сок ананас', price: '200 руб.', emoji: '🥥' }
    ],
    
    // СМУЗИ
    'смузи': [
        { name: 'Смузи "Двойное удовольствие"', ingredients: 'персиковый сок, сок апельсин, киви, санго конс, сироп маракуя, лед', price: '200 руб.', emoji: '😋' },
        { name: 'Смузи "Сказка"', ingredients: 'банан, сироп Гренадин, ананасовый сок, сок лимона, лед', price: '200 руб.', emoji: '📖' },
        { name: 'Смузи "Наслаждение"', ingredients: 'персик консервированный, сироп, персиковый сок, лед', price: '200 руб.', emoji: '😌' }
    ],
    
    // ЛИМОНАДЫ
    'лимонады': [
        { name: 'Лимонады в лимонадниках', ingredients: '5 литров: гранатовый, маракуевый, апельсиновый', price: '2500 руб.', emoji: '🧪', note: 'Для больших мероприятий' },
        { name: 'Лимонад "Гранатовый"', ingredients: 'сок граната, лимон, мята, сахарный сироп', price: '250 руб./литр', emoji: '❤️' },
        { name: 'Лимонад "Маракуевый"', ingredients: 'пюре маракуя, лайм, мята, сахарный сироп', price: '250 руб./литр', emoji: '🥭' }
    ]
};

// ========== СОСТОЯНИЕ КВИЗА ==========
let quizState = {
    currentStep: 0,
    answers: {},
    selectedOption: null
};

// ========== ВОПРОСЫ КВИЗА ==========
const quizSteps = [
    {
        id: 'type',
        question: '🍸 Какие коктейли Вас интересуют?',
        options: [
            { id: 'алкогольные', text: 'Алкогольные', emoji: '🍸' },
            { id: 'безалкогольные', text: 'Безалкогольные', emoji: '🥤' },
            { id: 'смузи', text: 'Смузи', emoji: '🥭' },
            { id: 'лимонады', text: 'Лимонады', emoji: '🍋' }
        ]
    },
    {
        id: 'alcohol_category',
        question: '🎯 Выберите категорию алкогольных коктейлей:',
        options: [
            { id: 'сладкие', text: 'Сладкие', emoji: '🍬' },
            { id: 'кисло-сладкие', text: 'Кисло-сладкие', emoji: '🍋' },
            { id: 'шоты', text: 'Шоты', emoji: '🥃' },
            { id: 'экзотические', text: 'С экзотическими фруктами', emoji: '🐉' },
            { id: 'крепкие', text: 'Крепкие', emoji: '💪' },
            { id: 'легкие', text: 'Легкие', emoji: '🍃' },
            { id: 'горячие', text: 'Горячие', emoji: '🔥' }
        ],
        dependsOn: { type: 'алкогольные' }
    }
];

// ========== ОСНОВНЫЕ ФУНКЦИИ ==========

// 1. ЗАПУСК КВИЗА
function startQuiz() {
    console.log('🚀 Запуск квиза...');
    
    // Скрываем стартовый экран
    const startScreen = document.getElementById('startScreen');
    const quizScreen = document.getElementById('quizScreen');
    
    if (startScreen && quizScreen) {
        startScreen.classList.remove('active');
        quizScreen.classList.add('active');
        
        // Сбрасываем состояние
        quizState = {
            currentStep: 0,
            answers: {},
            selectedOption: null
        };
        
        // Показываем первый вопрос
        showCurrentStep();
        updateProgressBar();
        
        console.log('✅ Квиз запущен успешно');
    } else {
        console.error('❌ Не найдены элементы экранов');
        alert('Ошибка загрузки. Обновите страницу.');
    }
}

// 2. ПОКАЗАТЬ ТЕКУЩИЙ ВОПРОС
function showCurrentStep() {
    const step = quizSteps[quizState.currentStep];
    
    // Проверяем зависимости
    if (step.dependsOn) {
        const dependsOnKey = Object.keys(step.dependsOn)[0];
        const dependsOnValue = step.dependsOn[dependsOnKey];
        
        if (quizState.answers[dependsOnKey] !== dependsOnValue) {
            // Пропускаем этот вопрос, показываем результаты
            showResults();
            return;
        }
    }
    
    // Устанавливаем вопрос
    document.getElementById('questionText').textContent = step.question;
    document.getElementById('progressText').textContent = `Вопрос ${quizState.currentStep + 1} из ${quizSteps.length}`;
    
    // Очищаем старые кнопки
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    // Создаем новые кнопки
    step.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        if (quizState.selectedOption === option.id) {
            button.classList.add('selected');
        }
        
        button.innerHTML = `
            <span class="option-emoji">${option.emoji}</span>
            <span class="option-text">${option.text}</span>
        `;
        
        button.onclick = () => selectOption(step.id, option.id, option.text);
        optionsContainer.appendChild(button);
    });
    
    // Показываем/скрываем кнопку "Назад"
    document.getElementById('backBtn').style.display = quizState.currentStep > 0 ? 'block' : 'none';
}

// 3. ВЫБРАТЬ ОПЦИЮ
function selectOption(questionId, optionId, optionText) {
    console.log(`✅ Выбрано: ${questionId} = ${optionId} (${optionText})`);
    
    // Сохраняем ответ
    quizState.answers[questionId] = optionId;
    quizState.selectedOption = optionId;
    
    // Подсвечиваем выбранную кнопку
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));
    event.currentTarget.classList.add('selected');
    
    // Переходим к следующему шагу
    setTimeout(() => {
        if (quizState.currentStep < quizSteps.length - 1) {
            quizState.currentStep++;
            quizState.selectedOption = null;
            updateProgressBar();
            showCurrentStep();
        } else {
            showResults();
        }
    }, 300);
}

// 4. ПРЕДЫДУЩИЙ ВОПРОС
function prevQuestion() {
    if (quizState.currentStep > 0) {
        const currentStepId = quizSteps[quizState.currentStep].id;
        delete quizState.answers[currentStepId];
        quizState.selectedOption = null;
        
        quizState.currentStep--;
        updateProgressBar();
        showCurrentStep();
    }
}

// 5. ОБНОВИТЬ ПРОГРЕСС-БАР
function updateProgressBar() {
    const progress = ((quizState.currentStep) / quizSteps.length) * 100;
    const progressFill = document.getElementById('progressFill');
    if (progressFill) {
        progressFill.style.width = progress + '%';
    }
}

// 6. ПОКАЗАТЬ РЕЗУЛЬТАТЫ
function showResults() {
    console.log('📊 Показ результатов:', quizState.answers);
    
    // Переключаем экраны
    document.getElementById('quizScreen').classList.remove('active');
    document.getElementById('resultScreen').classList.add('active');
    
    // Определяем категорию
    const category = getResultCategory();
    document.getElementById('resultCategory').textContent = category;
    
    // Показываем коктейли
    displayCocktails();
}

// 7. ОПРЕДЕЛИТЬ КАТЕГОРИЮ
function getResultCategory() {
    const type = quizState.answers.type;
    const category = quizState.answers.alcohol_category;
    
    if (type === 'алкогольные' && category) {
        const categoryNames = {
            'сладкие': 'Сладкие',
            'кисло-сладкие': 'Кисло-сладкие',
            'шоты': 'Шоты',
            'экзотические': 'С экзотическими фруктами',
            'крепкие': 'Крепкие',
            'легкие': 'Легкие',
            'горячие': 'Горячие'
        };
        return `Алкогольные → ${categoryNames[category] || category}`;
    } else if (type === 'безалкогольные') {
        return 'Безалкогольные коктейли';
    } else if (type === 'смузи') {
        return 'Смузи';
    } else if (type === 'лимонады') {
        return 'Лимонады';
    }
    
    return 'Популярные коктейли';
}

// 8. ПОКАЗАТЬ КОКТЕЙЛИ
function displayCocktails() {
    const cocktailsList = document.getElementById('cocktailResults');
    cocktailsList.innerHTML = '';
    
    let cocktails = [];
    const type = quizState.answers.type;
    const alcoholCategory = quizState.answers.alcohol_category;
    
    // Выбираем коктейли по категории
    if (type === 'алкогольные' && alcoholCategory) {
        const key = `алкогольные_${alcoholCategory}`;
        cocktails = cocktailsDB[key] || [];
    } else if (type === 'безалкогольные') {
        cocktails = cocktailsDB['безалкогольные'] || [];
    } else if (type === 'смузи') {
        cocktails = cocktailsDB['смузи'] || [];
    } else if (type === 'лимонады') {
        cocktails = cocktailsDB['лимонады'] || [];
    }
    
    // Если нет коктейлей, показываем сообщение
    if (cocktails.length === 0) {
        cocktailsList.innerHTML = `
            <div class="no-results">
                <h3>🍹 Подборка готовится</h3>
                <p>Наши бармены подберут для вас идеальные коктейли!</p>
                <p>📞 Позвоните: +7 (909) 592-13-16</p>
            </div>
        `;
        return;
    }
    
    // Отображаем коктейли
    cocktails.forEach(cocktail => {
        const card = document.createElement('div');
        card.className = 'cocktail-card';
        
        card.innerHTML = `
            <div class="cocktail-header">
                <div class="cocktail-name">${cocktail.emoji} ${cocktail.name}</div>
                <div class="cocktail-price">${cocktail.price}</div>
            </div>
            <div class="cocktail-ingredients">${cocktail.ingredients}</div>
            ${cocktail.note ? `<div class="cocktail-note">💡 ${cocktail.note}</div>` : ''}
        `;
        
        cocktailsList.appendChild(card);
    });
}

// 9. ОТПРАВИТЬ РЕЗУЛЬТАТЫ БОТУ
function sendToBot() {
    const results = {
        action: 'cocktail_selection',
        answers: quizState.answers,
        timestamp: new Date().toISOString(),
        contact: '+7 (909) 592-13-16'
    };
    
    console.log('📤 Отправка результатов боту:', results);
    
    // Telegram Web App
    if (window.Telegram?.WebApp) {
        Telegram.WebApp.sendData(JSON.stringify(results));
        Telegram.WebApp.close();
    } else {
        // Режим разработки
        alert('✅ Заявка отправлена! Наш бармен свяжется с вами.\n📞 +7 (909) 592-13-16');
        console.log('Режим разработки: данные для бота:', results);
    }
}

// 10. ПЕРЕЗАПУСТИТЬ КВИЗ
function restartQuiz() {
    document.getElementById('resultScreen').classList.remove('active');
    document.getElementById('startScreen').classList.add('active');
}

// ========== ИНИЦИАЛИЗАЦИЯ ==========
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ DOM загружен, инициализация...');
    
    // Проверяем что функции доступны
    console.log('Функция startQuiz:', typeof startQuiz);
    console.log('Функция sendToBot:', typeof sendToBot);
    
    // Инициализация Telegram Web App для разработки
    if (!window.Telegram?.WebApp) {
        window.Telegram = {
            WebApp: {
                expand: () => console.log('[DEV] Expanded'),
                sendData: (data) => {
                    console.log('[DEV] Data to bot:', JSON.parse(data));
                    alert('[DEV] Данные отправлены боту!');
                },
                close: () => console.log('[DEV] Closed'),
                enableClosingConfirmation: () => {},
                isExpanded: true
            }
        };
        console.log('[DEV] Режим разработки включен');
    }
    
    console.log('✅ Инициализация завершена');
});