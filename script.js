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
Another year has passed, filled with memories, laughter, and moments that I’ll never forget. Every smile, every laugh, every glance from you made my year brighter. I wish this new year brings you endless joy, love, and everything your heart truly desires.`,

`To the most beautiful soul in my life 🌸
This year may have had ups and downs, but every moment shared with you was a blessing I’ll cherish forever. I hope 2026 wraps you in warmth, happiness, and love beyond measure.`,

`Apsaria, my heart 🌹
As the year ends, I want you to know that my world is brighter because of you. I promise to make 2026 even more special for you, with love, care, and memories that we’ll treasure forever.`
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

// Floating Hearts
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.background = ['#ff5f6d','#ffc371','#ff69b4'][Math.floor(Math.random()*3)];
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(), 4000);
}

// Hearts interval only on romantic pages
setInterval(() => {
  if(!romanticDiv.classList.contains('hidden')) createHeart();
}, 400);

// Confetti for questions
function createConfetti() {
  if(!questionsDiv.classList.contains('hidden')) {
    const confetti = document.createElement('div');
    confetti.className = 'heart'; // reuse heart class but smaller or change class if you want
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.left = Math.random()*window.innerWidth+'px';
    confetti.style.background = ['#ff5f6d','#ffc371','#1e3c72','#2a5298'][Math.floor(Math.random()*4)];
    document.body.appendChild(confetti);
    let top = 0;
    const fall = setInterval(()=>{
      top+=5;
      confetti.style.top = top+'px';
      if(top>window.innerHeight){
        confetti.remove();
        clearInterval(fall);
      }
    },20);
  }
}
setInterval(createConfetti, 150);

// Start button
startBtn.addEventListener('click', ()=>{
  landing.classList.add('hidden');
  romanticDiv.classList.remove('hidden');
  romanticText.textContent = romanticMessages[currentRomantic];
  body.className = `page-${currentRomantic+1}`;
  bgMusic.play();
});

// Romantic Next button
romanticNext.addEventListener('click', ()=>{
  currentRomantic++;
  if(currentRomantic<romanticMessages.length){
    romanticText.textContent = romanticMessages[currentRomantic];
    body.className = `page-${currentRomantic+1}`;
  } else {
    romanticDiv.classList.add('hidden');
    questionsDiv.classList.remove('hidden');
    questionText.textContent = questions[currentQ];
    body.className = `page-${currentRomantic+1}`;
  }
});

// Questions Next button
nextBtn.addEventListener('click', ()=>{
  const ans = answerInput.value.trim();
  if(ans==="") return;
  answers.push(`${questions[currentQ]} → ${ans}`);
  answerInput.value = "";
  currentQ++;
  if(currentQ<questions.length){
    questionText.textContent = questions[currentQ];
    body.className = `page-${currentRomantic+1+currentQ}`;
  } else {
    questionsDiv.classList.add('hidden');
    showSummary();
  }
});

function showSummary(){
  summaryDiv.classList.remove('hidden');
  answers.forEach(a=>{
    const p = document.createElement('p');
    p.textContent = a;
    answersList.appendChild(p);
  });
}
