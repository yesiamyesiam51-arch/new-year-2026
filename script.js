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
`Happy New Year, Apsaria ❤️
Another year has passed, filled with memories, laughter, and moments that I’ll never forget. As the clock strikes twelve, I just want you to know how much you mean to me. Every smile, every laugh, every glance from you made my year brighter. I wish this new year brings you endless joy, love, and everything your heart truly desires. You are my favorite part of every day, and I can’t wait to make more memories together in 2026.`,

`To the most beautiful soul in my life 🌸
This year may have had ups and downs, but every moment shared with you was a blessing I’ll cherish forever. I hope 2026 wraps you in warmth, happiness, and love beyond measure. May your dreams take flight, your heart always feel safe, and your days be filled with laughter. Thank you for being you — amazing, kind, and mine. Happy New Year, my love.`,

`Apsaria, my heart 🌹
As the year ends, I want you to know that my world is brighter because of you. Every little moment — your smile, your voice, your presence — made my year unforgettable. I promise to make 2026 even more special for you, with love, care, and memories that we’ll treasure forever. Happy New Year, my love. You are my everything, and I’ll always hold you close, today and always.`
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

// Sparkles
function createSparkle() {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.left = Math.random() * window.innerWidth + 'px';
  sparkle.style.top = Math.random() * window.innerHeight + 'px';
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 1000);
}
setInterval(createSparkle, 300);

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
// Floating Hearts for Romantic Pages
function createHeart() {
  if(currentRomantic === undefined) return;
  if(currentRomantic >= 0 && currentRomantic < romanticMessages.length){
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.width = 15 + Math.random()*15 + 'px';
    heart.style.height = heart.style.width;
    heart.style.animationDuration = 4 + Math.random()*3 + 's';
    heart.style.backgroundColor = ['#ff6b81','#ffb6c1','#ff3d7f'][Math.floor(Math.random()*3)];
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(), 5000);
  }
}
setInterval(createHeart, 500); // every 0.5 sec a heart


