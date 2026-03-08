const modeButtons = document.querySelectorAll('.mode-btn');
const swipeScreen = document.querySelector('#swipe-screen');
const pulseScreen = document.querySelector('#pulse-screen');

modeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    modeButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    const mode = button.dataset.mode;
    swipeScreen.classList.toggle('hidden', mode !== 'swipe');
    pulseScreen.classList.toggle('hidden', mode !== 'pulse');
  });
});
