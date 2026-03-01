function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const questions = {

    math: [
        { q: "15 + 27 = ?", options: ["40", "42", "43", "41"], answer: 1 },
        { q: "9 × 8 = ?", options: ["72", "64", "81", "70"], answer: 0 },
        { q: "56 ÷ 7 = ?", options: ["6", "7", "8", "9"], answer: 2 },
        { q: "12² = ?", options: ["124", "144", "122", "142"], answer: 1 },
        { q: "√49 = ?", options: ["6", "8", "7", "9"], answer: 2 },
        { q: "100 - 38 = ?", options: ["62", "60", "58", "64"], answer: 0 },
        { q: "5³ = ?", options: ["15", "25", "125", "100"], answer: 2 },
        { q: "20% of 150 = ?", options: ["25", "30", "35", "40"], answer: 1 },
        { q: "3/4 ning 1/2 qismi?", options: ["3/8", "1/4", "2/4", "4/8"], answer: 0 },
        { q: "8 × 11 = ?", options: ["88", "81", "99", "86"], answer: 0 }
    ],

    english: [
        { q: "'Go' fe’lining o‘tgan zamoni?", options: ["Goed", "Went", "Gone", "Going"], answer: 1 },
        { q: "'Child' so‘zining ko‘plik shakli?", options: ["Childs", "Children", "Childes", "Childrens"], answer: 1 },
        { q: "'Easy' so‘zining teskarisi?", options: ["Hard", "Soft", "Fast", "Light"], answer: 0 },
        { q: "To‘g‘ri yozilgan so‘zni tanlang:", options: ["Recieve", "Receive", "Receve", "Recive"], answer: 1 },
        { q: "___ apple (to‘g‘ri artikl)", options: ["A", "An", "The", "—"], answer: 1 },
        { q: "Qaysi biri fe’l?", options: ["Blue", "Run", "Table", "Happy"], answer: 1 },
        { q: "'Big' so‘zining sinonimi?", options: ["Huge", "Small", "Short", "Slow"], answer: 0 },
        { q: "Qaysi biri ot?", options: ["Quickly", "Happiness", "Run", "Blue"], answer: 1 },
        { q: "Kelasi zamon gapini tanlang:", options: ["I go", "I went", "I will go", "I going"], answer: 2 },
        { q: "To‘g‘ri gapni tanlang:", options: [
            "She don't like coffee",
            "She doesn't like coffee",
            "She doesn't likes coffee",
            "She not like coffee"
        ], answer: 1 }
    ],

    history: [
        { q: "Amir Temur qachon tug‘ilgan?", options: ["1336", "1405", "1350", "1300"], answer: 0 },
        { q: "Ikkinchi jahon urushi qachon boshlangan?", options: ["1939", "1941", "1945", "1920"], answer: 0 },
        { q: "O‘zbekiston mustaqillikka qachon erishgan?", options: ["1991", "1990", "1992", "1989"], answer: 0 },
        { q: "BMT qachon tashkil topgan?", options: ["1945", "1950", "1930", "1925"], answer: 0 },
        { q: "Temuriylar davlati poytaxti?", options: ["Samarqand", "Buxoro", "Xiva", "Toshkent"], answer: 0 },
        { q: "Birinchi jahon urushi boshlangan yil?", options: ["1914", "1918", "1920", "1930"], answer: 0 },
        { q: "Napoleon qaysi davlatdan?", options: ["Fransiya", "Italiya", "Ispaniya", "Germaniya"], answer: 0 },
        { q: "Buyuk Ipak yo‘li nima edi?", options: ["Savdo yo‘li", "Urush", "Din", "Imperiya"], answer: 0 },
        { q: "Rim imperiyasi qachon qulagan?", options: ["476", "500", "600", "450"], answer: 0 },
        { q: "AQSH mustaqillik deklaratsiyasi qachon?", options: ["1776", "1800", "1750", "1789"], answer: 0 }
    ],

    it: [
        { q: "HTML nimani anglatadi?", options: [
            "Hyper Text Markup Language",
            "High Tool Machine Language",
            "Home Text Making Language",
            "Hyperlinks Text Mode Language"
        ], answer: 0 },
        { q: "CSS nima uchun ishlatiladi?", options: [
            "Dizayn berish",
            "Server boshqarish",
            "Ma’lumot saqlash",
            "Internet ulash"
        ], answer: 0 },
        { q: "JavaScript qayerda ishlaydi?", options: [
            "Brauzerda",
            "Printerda",
            "Monitor ichida",
            "Klaviaturada"
        ], answer: 0 },
        { q: "CPU nima?", options: [
            "Markaziy protsessor",
            "Xotira turi",
            "Monitor",
            "Operatsion tizim"
        ], answer: 0 },
        { q: "RAM nima?", options: [
            "Tezkor xotira",
            "Qattiq disk",
            "Protsessor",
            "Video karta"
        ], answer: 0 },
        { q: "Git nima?", options: [
            "Versiya nazorati tizimi",
            "Dasturlash tili",
            "Operatsion tizim",
            "Brauzer"
        ], answer: 0 },
        { q: "API nima?", options: [
            "Ilovalar o‘rtasidagi interfeys",
            "O‘yin",
            "Kompyuter turi",
            "Virus"
        ], answer: 0 },
        { q: "Frontend nima?", options: [
            "Foydalanuvchi ko‘radigan qism",
            "Server tomoni",
            "Database",
            "Router"
        ], answer: 0 },
        { q: "SQL nima uchun?", options: [
            "Ma’lumotlar bazasi bilan ishlash",
            "Rasm chizish",
            "Internet ulash",
            "Printer boshqarish"
        ], answer: 0 },
        { q: "HTTP nima?", options: [
            "Internet protokoli",
            "O‘yin turi",
            "Video format",
            "Antivirus"
        ], answer: 0 }
    ],

    science: [
        { q: "Suvning kimyoviy formulasi?", options: ["H2O", "CO2", "O2", "NaCl"], answer: 0 },
        { q: "Yer Quyosh atrofini necha kunda aylanadi?", options: ["365", "30", "180", "400"], answer: 0 },
        { q: "Eng katta sayyora?", options: ["Yupiter", "Mars", "Venera", "Saturn"], answer: 0 },
        { q: "Odam tanasidagi eng katta organ?", options: ["Teri", "Yurak", "Jigar", "O‘pka"], answer: 0 },
        { q: "O‘simliklar qanday gaz chiqaradi?", options: ["Oksigen", "Karbonat angidrid", "Azot", "Metan"], answer: 0 },
        { q: "Elektr toki birligi?", options: ["Amper", "Volt", "Vatt", "Om"], answer: 0 },
        { q: "Eng tez hayvon?", options: ["Gepard", "Sher", "Bo‘ri", "Ot"], answer: 0 },
        { q: "Qonning qizil rangini nima beradi?", options: ["Gemoglobin", "Oksigen", "Suv", "Temir"], answer: 0 },
        { q: "Odam nechta tishga ega?", options: ["32", "28", "30", "36"], answer: 0 },
        { q: "Atmosferadagi eng ko‘p gaz?", options: ["Azot", "Oksigen", "CO2", "Vodorod"], answer: 0 }
    ]
};

let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let timeLeft = 60;
let timerInterval;

function generateSimple(title) {
    let arr = [];
    for (let i = 1; i <= 10; i++) {
        arr.push({
            q: `${title} ${i}?`,
            options: ["Option A", "Option B", "Option C", "Option D"],
            answer: 0
        });
    }
    return arr;
}

function generateMath() {
    let arr = [];
    for (let i = 1; i <= 10; i++) {
        let a = Math.floor(Math.random()*10)+1;
        let b = Math.floor(Math.random()*10)+1;
        arr.push({
            q: `${a} + ${b} = ?`,
            options: [a+b, a+b+1, a+b-1, a+b+2],
            answer: 0
        });
    }
    return arr;
}

let studentName = "";

function startTest() {
    const subject = document.getElementById("subjectSelect").value;
    studentName = document.getElementById("studentName").value.trim();

    if (!studentName) return alert("Ismingizni kiriting!");
    if (!subject) return alert("Fan tanlang!");

    currentQuestions = [...questions[subject]];

    shuffleArray(currentQuestions);

    currentQuestions.forEach(q => {
        let correctAnswer = q.options[q.answer];
        shuffleArray(q.options);
        q.answer = q.options.indexOf(correctAnswer);
    });

    currentIndex = 0;
    score = 0;

    document.getElementById("startScreen").classList.add("hidden");
    document.getElementById("quizScreen").classList.remove("hidden");

    startTimer();
    showQuestion();
}

function showQuestion() {
    const q = currentQuestions[currentIndex];
    const container = document.getElementById("questionContainer");

    container.innerHTML = `
        <div class="question">
            <h3>${currentIndex+1}. ${q.q}</h3>
            ${q.options.map((opt,i)=>`
                <label>
                    <input type="radio" name="answer" value="${i}">
                    ${opt}
                </label>
            `).join("")}
        </div>
    `;

    document.getElementById("progressText").innerText =
        `Question ${currentIndex+1} / ${currentQuestions.length}`;

    document.getElementById("progressFill").style.width =
        ((currentIndex+1)/currentQuestions.length)*100 + "%";

    if (currentIndex === currentQuestions.length - 1) {
        document.getElementById("nextBtn").innerText = "Finish";
    }
}

function nextQuestion() {
    const selected = document.querySelector("input[name='answer']:checked");
    if (!selected) return alert("Javobni tanlang!");

    if (parseInt(selected.value) === currentQuestions[currentIndex].answer) {
        score++;
    }

    currentIndex++;

    if (currentIndex < currentQuestions.length) {
        showQuestion();
    } else {
        finishExam();
    }
}

function startTimer() {
    timeLeft = 60;
    document.getElementById("timer").innerText = `Time: ${timeLeft}s`;

    timerInterval = setInterval(()=>{
        timeLeft--;
        document.getElementById("timer").innerText = `Time: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            finishExam();
        }
    },1000);
}

function finishExam() {
    clearInterval(timerInterval);

    document.getElementById("quizScreen").classList.add("hidden");
    document.getElementById("resultScreen").classList.remove("hidden");

    let total = currentQuestions.length;
    let percent = Math.round((score / total) * 100);

    let letter = "";
    let degreeText = "";
    let statusText = "";
    let messageText = "";
    let resultBox = document.getElementById("resultBox");

    if (percent >= 90) {
        letter = "A";
        degreeText = "A’lo";
        statusText = "PASS ✅";
        messageText = "Zo’r natija! Siz juda yaxshi topshirdingiz!";
        resultBox.style.borderColor = "green";
    } 
    else if (percent >= 75) {
        letter = "B";
        degreeText = "Yaxshi";
        statusText = "PASS ✅";
        messageText = "Yaxshi natija! Yana ozgina harakat qiling.";
        resultBox.style.borderColor = "blue";
    } 
    else if (percent >= 60) {
        letter = "C";
        degreeText = "Qoniqarli";
        statusText = "PASS ✅";
        messageText = "O‘rtacha natija. Yaxshilash mumkin.";
        resultBox.style.borderColor = "orange";
    } 
    else if (percent >= 40) {
        letter = "D";
        degreeText = "Past";
        statusText = "FAIL ❌";
        messageText = "Natija past. Ko‘proq mashq qiling.";
        resultBox.style.borderColor = "orangered";
    } 
    else {
        letter = "F";
        degreeText = "Yomon";
        statusText = "FAIL ❌";
        messageText = "Juda past natija. Qayta tayyorlaning.";
        resultBox.style.borderColor = "red";
    }

    document.getElementById("correctAnswers").innerText = `${score} / ${total}`;
    document.getElementById("percentage").innerText = percent + "%";
    document.getElementById("letterGrade").innerText = letter;
    document.getElementById("degree").innerText = degreeText;
    document.getElementById("status").innerText = statusText;
    document.getElementById("message").innerText = messageText;

    saveResult(percent);
    showHistory();

    function saveResult(percent) {
    let history = JSON.parse(localStorage.getItem("quizHistory")) || [];

    history.unshift({
        name: studentName,
        subject: document.getElementById("subjectSelect").value,
        score: score,
        percent: percent,
        date: new Date().toLocaleString()
    });

    localStorage.setItem("quizHistory", JSON.stringify(history.slice(0, 10)));
}

function showHistory() {
    let history = JSON.parse(localStorage.getItem("quizHistory")) || [];
    let historyDiv = document.getElementById("history");

    historyDiv.innerHTML = history.slice(0,3).map(item => `
        <p>
            ${item.name} | ${item.subject} |
            ${item.score}/10 (${item.percent}%) |
            ${item.date}
        </p>
    `).join("");
}
}
const startQuotes = [
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Practice makes perfect.",
    "Learning never exhausts the mind.",
    "Success is the sum of small efforts."
];

const resultQuotes = [
    "Ajoyib ish! Davom eting!",
    "Yaxshi natija! Harakat qiling!",
    "Boshlashning o‘zi g‘alaba.",
    "Harakatdan voz kechmang!"
];

function getRandomQuote(quotes) {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function showQuotes() {
    document.getElementById("startQuote").innerText = getRandomQuote(startQuotes);
    document.getElementById("resultQuote").innerText = getRandomQuote(resultQuotes);
}
window.onload = () => {
    showQuotes();
    showHistory();
};
showQuotes();