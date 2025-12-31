const startBtn = document.getElementById('startBtn');
const landing = document.getElementById('landing');
const romanticDiv = document.getElementById('romantic');
const romanticText = document.getElementById('romanticText');
const romanticNext = document.getElementById('romanticNext');
const questionsDiv = document.getElementById('questions');
const questionText = document.getElementById('questionText');
const answerInput = document.getElementById('answerInput');
const nextBtn = document.getElementById('nextBtn');
const summaryDiv = document.getElementById('summary');
const answersList = document.getElementById('answersList');
const body = document.body;
const bgMusic = document.getElementById('bgMusic');

// Romantic Messages
const romanticMessages = [
`Happy New Year, Apsaria ❤️ Another year has passed, filled with laughter and love. You made every moment brighter, and I wish 2026 brings you endless joy and everything your heart desires.`,

`To the most beautiful soul 🌸 This year had ups and downs, but every moment with you was a blessing. May 2026 wrap you in warmth, love, and laughter. You are amazing and mine. Happy New Year, my love.`,

`Apsaria, my heart 🌹 As the year ends, my world is brighter because of you. Every little moment — your smile, your voice, your presence — made my year unforgettable. Happy New Year, my love.`
];

const questions = [
  "Your New Year Resolutions?",
  "Your Wishes for Me?",
  "Your Favorite Memory This Year?",
  "Favorite Movie Watched With Me?",
  "Favorite Song This Year?",
  "Favorite Memory With Me?",
  "Your Happiest Moment?",
  "Your Saddest Moment?",
  "Your Angriest Moment?",
  "Your Funniest Moment?"
];

let answers = [];
let currentRomantic = 0;
let currentQ = 0;

// Confetti
const colors = ['#ff5f6d','#ffc371','#fddb92','#1e3c72','#2a5298'];
function createConfetti() {
  const confetti = document.createElement('div');
  confetti.className = 'confetti';
  confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
  confetti.style.top = '0px';
  confetti.style.left = Math.random() * window.innerWidth + 'px';
  document.body.appendChild(confetti);

  let top = 0;
  const fall = setInterval(() => {
    top += 5;
    confetti.style.top = top + 'px';
    if(top > window.innerHeight) {
      confetti.remove();
      clearInterval(fall);
    }
  }, 20);
}
setInterval(createConfetti, 100);

// Floating hearts coded but disabled
function createHeart() {
  const showHearts = false; // <-- change to true to enable
  if(!showHearts) return;
}
setInterval(createHeart, 500);

// Cartoon characters (optional, static for now)
function createCartoon() {
  const images = ['cartoon1.png','cartoon2.png']; // add your images
  const cartoon = document.createElement('div');
  cartoon.className = 'cartoon';
  cartoon.style.left = Math.random() * window.innerWidth + 'px';
  cartoon.style.backgroundImage = `url(${images[Math.floor(Math.random()*images.length)]})`;
  document.body.appendChild(cartoon);
  setTimeout(()=>cartoon.remove(), 10000);
}
setInterval(createCartoon, 3000);

// Start Button
startBtn.addEventListener('click', () => {
  landing.classList.add('hidden');
  romanticDiv.classList.remove('hidden');
  romanticText.textContent = romanticMessages[currentRomantic];
  body.className = `page-${currentRomantic+1}`;
  bgMusic.play();
});

// Romantic Next Button
romanticNext.addEventListener('click', () => {
  currentRomantic++;
  if(currentRomantic < romanticMessages.length){
    romanticText.textContent = romanticMessages[currentRomantic];
    body.className = `page-${currentRomantic+1}`;
  } else {
    romanticDiv.classList.add('hidden');
    questionsDiv.classList.remove('hidden');
    questionText.textContent = questions[currentQ];
    body.className = `page-${currentRomantic+1}`;
  }
});

// Questions Next Button
nextBtn.addEventListener('click', () => {
  const answer = answerInput.value.trim();
  if(answer === "") return;
  answers.push(`${questions[currentQ]} → ${answer}`);
  answerInput.value = "";
  currentQ++;
  if(currentQ < questions.length){
    questionText.textContent = questions[currentQ];
    body.className = `page-${currentRomantic+1+currentQ}`;
  } else {
    questionsDiv.classList.add('hidden');
    showSummary();
  }
});

function showSummary() {
  summaryDiv.classList.remove('hidden');
  answers.forEach(ans => {
    const p = document.createElement('p');
    p.textContent = ans;
    answersList.appendChild(p);
  });
}


