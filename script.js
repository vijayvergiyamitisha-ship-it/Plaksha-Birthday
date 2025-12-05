const audio = document.getElementById("bdayAudio");

function playMusic() {
  audio.volume = 0.7;
  audio.play();
}

// CONFETTI EFFECT
function createConfetti() {
  const colors = ['#ff2a6d', '#ff7eb3', '#ffd166', '#6a0dad', '#00d4ff'];
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti-piece');
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.width = confetti.style.height = Math.random() * 12 + 8 + 'px';
    confetti.style.animationDuration = 3 + Math.random() * 2 + 's';
    document.body.appendChild(confetti);

    // Remove confetti after it falls
    confetti.addEventListener('animationend', () => {
      confetti.remove();
    });
  }
}

// Run confetti on page load
window.onload = () => {
  createConfetti();
};
