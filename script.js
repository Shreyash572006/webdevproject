// Quiz Data
const quizData = {
    colors: [
        { question: "Which color is an Apple? 🍎", options: ["Red ❤️", "Blue 💙", "Green 💚", "Yellow 💛"], answer: 0 },
        { question: "Which color is the Sun? ☀️", options: ["Purple 💜", "Yellow 💛", "Black 🖤", "Pink 🩷"], answer: 1 },
        { question: "Which color is a Leaf? 🍃", options: ["Blue 💙", "Red ❤️", "Green 💚", "Orange 🧡"], answer: 2 },
        { question: "Which color is the Sky? ☁️", options: ["Red ❤️", "Green 💚", "Brown 🤎", "Blue 💙"], answer: 3 },
        { question: "Which color is a Banana? 🍌", options: ["Yellow 💛", "Pink 🩷", "Purple 💜", "Blue 💙"], answer: 0 },
        { question: "Which color is a Carrot? 🥕", options: ["Red ❤️", "Orange 🧡", "Black 🖤", "White 🤍"], answer: 1 },
        { question: "Which color is a Flamingo? 🦩", options: ["Green 💚", "Yellow 💛", "Pink 🩷", "Blue 💙"], answer: 2 },
        { question: "Which color is a Bear? 🐻", options: ["White 🤍", "Blue 💙", "Green 💚", "Brown 🤎"], answer: 3 },
        { question: "Which color is Snow? ❄️", options: ["White 🤍", "Red ❤️", "Black 🖤", "Purple 💜"], answer: 0 },
        { question: "Which color is a Grape? 🍇", options: ["Pink 🩷", "Purple 💜", "Orange 🧡", "White 🤍"], answer: 1 }
    ],
    animals: [
        { question: "Which animal says Meow? 🐱", options: ["Cat 🐈", "Dog 🐕", "Cow 🐄", "Pig 🐖"], answer: 0 },
        { question: "Which animal barks? 🐶", options: ["Bird 🐦", "Dog 🐕", "Fish 🐟", "Sheep 🐑"], answer: 1 },
        { question: "Which animal gives us Milk? 🥛", options: ["Lion 🦁", "Monkey 🐒", "Cow 🐄", "Snake 🐍"], answer: 2 },
        { question: "Which animal has a long trunk? 🐘", options: ["Tiger 🐅", "Rabbit 🐇", "Horse 🐎", "Elephant 🐘"], answer: 3 },
        { question: "Which animal hops? 🦘", options: ["Kangaroo 🦘", "Turtle 🐢", "Snail 🐌", "Fish 🐟"], answer: 0 },
        { question: "Which animal loves bananas? 🍌", options: ["Dog 🐕", "Monkey 🐒", "Cat 🐈", "Pig 🐖"], answer: 1 },
        { question: "Which animal is the king of the jungle? 👑", options: ["Zebra 🦓", "Giraffe 🦒", "Lion 🦁", "Bear 🐻"], answer: 2 },
        { question: "Which animal swims in water? 🌊", options: ["Bird 🐦", "Elephant 🐘", "Cow 🐄", "Fish 🐟"], answer: 3 },
        { question: "Which animal has a very long neck? 🦒", options: ["Giraffe 🦒", "Lion 🦁", "Tiger 🐅", "Dog 🐕"], answer: 0 },
        { question: "Which animal goes Oink Oink? 🐷", options: ["Cow 🐄", "Pig 🐖", "Sheep 🐑", "Cat 🐈"], answer: 1 }
    ],
    flowers: [
        { question: "Which flower is a Rose? 🌹", options: ["Rose 🌹", "Sunflower 🌻", "Tulip 🌷", "Lotus 🪷"], answer: 0 },
        { question: "Which flower is Yellow? 🌻", options: ["Tulip 🌷", "Sunflower 🌻", "Rose 🌹", "Hibiscus 🌺"], answer: 1 },
        { question: "Which is the national flower of India? 🪷", options: ["Rose 🌹", "Sunflower 🌻", "Lotus 🪷", "Lily 🪻"], answer: 2 },
        { question: "Which flower smells very sweet and is white? 💮", options: ["Sunflower 🌻", "Lotus 🪷", "Rose 🌹", "Jasmine 💮"], answer: 3 },
        { question: "Which flower closes at night? 🌷", options: ["Tulip 🌷", "Sunflower 🌻", "Rose 🌹", "Marigold 🏵️"], answer: 0 },
        { question: "Which flower has a big bell shape? 🌺", options: ["Lotus 🪷", "Hibiscus 🌺", "Sunflower 🌻", "Jasmine 💮"], answer: 1 },
        { question: "Which flower is mostly orange/yellow and used in festivals? 🏵️", options: ["Rose 🌹", "Tulip 🌷", "Marigold 🏵️", "Lotus 🪷"], answer: 2 },
        { question: "Which flower is known as the symbol of peace? 🌼", options: ["Rose 🌹", "Sunflower 🌻", "Marigold 🏵️", "Daisy 🌼"], answer: 3 },
        { question: "Which flower grows in water? 🪷", options: ["Lotus 🪷", "Rose 🌹", "Sunflower 🌻", "Tulip 🌷"], answer: 0 },
        { question: "Which flower is pink and very pretty? 🌸", options: ["Sunflower 🌻", "Cherry Blossom 🌸", "Marigold 🏵️", "Jasmine 💮"], answer: 1 }
    ]
};

// Variables
let currentCategory = "";
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;
let timer;
let timeLeft = 15;
let userAnswers = [];

// DOM Elements
const screens = {
    home: document.getElementById("home-screen"),
    quiz: document.getElementById("quiz-screen"),
    result: document.getElementById("result-screen")
};

const categoryTitle = document.getElementById("category-title");
const progressText = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const timeDisplay = document.getElementById("time");
const finalScore = document.getElementById("final-score");
const feedbackMessage = document.getElementById("feedback-message");

// Audio Elements
const clickSound = document.getElementById("click-sound");
const correctSound = document.getElementById("correct-sound");
const wrongSound = document.getElementById("wrong-sound");

function playSound(sound) {
    if (sound) {
        sound.currentTime = 0;
        sound.play().catch(e => console.log("Audio play prevented", e));
    }
}

function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove("active"));
    screens[screenName].classList.add("active");
}

function shuffleArray(array) {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
}

function startQuiz(category) {
    playSound(clickSound);
    currentCategory = category;
    
    let title = "";
    if(category === 'colors') title = "🎨 Colors Quiz";
    if(category === 'animals') title = "🐶 Animals Quiz";
    if(category === 'flowers') title = "🌸 Flowers Quiz";
    
    categoryTitle.textContent = title;
    
    // Shuffle questions
    currentQuestions = shuffleArray(quizData[category]);
    
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = new Array(currentQuestions.length).fill(null);
    
    showScreen("quiz");
    loadQuestion();
}

function startTimer() {
    clearInterval(timer);
    timeLeft = 15;
    timeDisplay.textContent = timeLeft;
    timeDisplay.style.color = "inherit";
    
    timer = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;
        
        if(timeLeft <= 5) {
            timeDisplay.style.color = "#ff4757"; // Red when running out
        } else {
            timeDisplay.style.color = "inherit";
        }
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleTimeOut();
        }
    }, 1000);
}

function handleTimeOut() {
    playSound(wrongSound);
    // Mark as wrong if no option selected
    if (userAnswers[currentQuestionIndex] === null) {
        userAnswers[currentQuestionIndex] = -1; // -1 means timeout
    }
    revealAnswer();
    
    setTimeout(() => {
        if(currentQuestionIndex < currentQuestions.length - 1) {
            nextQuestion();
        } else {
            showResult();
        }
    }, 2000);
}

function loadQuestion() {
    const currentQ = currentQuestions[currentQuestionIndex];
    questionText.textContent = currentQ.question;
    optionsContainer.innerHTML = "";
    
    progressText.textContent = `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;
    const progressPercent = ((currentQuestionIndex) / currentQuestions.length) * 100;
    progressFill.style.width = `${progressPercent}%`;
    
    selectedOption = userAnswers[currentQuestionIndex];
    
    currentQ.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.classList.add("option-btn");
        btn.textContent = option;
        
        if (selectedOption !== null) {
            btn.disabled = true;
            if (index === currentQ.answer) {
                btn.classList.add("correct");
            } else if (index === selectedOption) {
                btn.classList.add("wrong");
            }
        } else {
            btn.onclick = () => selectOption(index, btn);
        }
        
        optionsContainer.appendChild(btn);
    });
    
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = selectedOption === null;
    
    if (currentQuestionIndex === currentQuestions.length - 1) {
        nextBtn.textContent = "Finish 🌟";
    } else {
        nextBtn.textContent = "Next ➡️";
    }

    if (selectedOption === null) {
        startTimer();
    } else {
        clearInterval(timer);
        timeDisplay.textContent = "-";
        timeDisplay.style.color = "inherit";
    }
}

function selectOption(index, btnEl) {
    clearInterval(timer);
    selectedOption = index;
    userAnswers[currentQuestionIndex] = index;
    
    const currentQ = currentQuestions[currentQuestionIndex];
    const isCorrect = index === currentQ.answer;
    
    if (isCorrect) {
        score++;
        playSound(correctSound);
    } else {
        playSound(wrongSound);
    }
    
    revealAnswer();
    nextBtn.disabled = false;
}

function revealAnswer() {
    const currentQ = currentQuestions[currentQuestionIndex];
    const buttons = optionsContainer.children;
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
        if (i === currentQ.answer) {
            buttons[i].classList.add("correct");
        } else if (i === userAnswers[currentQuestionIndex] && i !== currentQ.answer) {
            buttons[i].classList.add("wrong");
        }
    }
}

function nextQuestion() {
    playSound(clickSound);
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showResult();
    }
}

function prevQuestion() {
    playSound(clickSound);
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function showResult() {
    clearInterval(timer);
    showScreen("result");
    
    // Update progress bar to 100%
    progressFill.style.width = `100%`;
    
    finalScore.textContent = `${score}/${currentQuestions.length} ⭐`;
    
    if (score === currentQuestions.length) {
        feedbackMessage.textContent = "Perfect! You are a genius! 🌟👑";
    } else if (score >= currentQuestions.length * 0.7) {
        feedbackMessage.textContent = "Excellent! Great Job! 🎉👍";
    } else if (score >= currentQuestions.length * 0.5) {
        feedbackMessage.textContent = "Good Try! You did well! 😊👏";
    } else {
        feedbackMessage.textContent = "Keep Learning! Try Again! 💪❤️";
    }
}

function playAgain() {
    playSound(clickSound);
    startQuiz(currentCategory);
}

function goHome() {
    playSound(clickSound);
    showScreen("home");
}

// Initial setup
showScreen("home");
