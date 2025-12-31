// Optional: Add simple confetti effect
const colors = ['#ff5f6d','#ffc371','#fddb92','#1e3c72','#2a5298'];

function createConfetti() {
  const confetti = document.createElement('div');
  confetti.style.position = 'absolute';
  confetti.style.width = '10px';
  confetti.style.height = '10px';
  confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
  confetti.style.top = '0px';
  confetti.style.left = Math.random() * window.innerWidth + 'px';
  confetti.style.borderRadius = '50%';
  confetti.style.opacity = 0.8;
  confetti.style.zIndex = 1000;
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

// Create random confetti every 100ms
setInterval(createConfetti, 100);
