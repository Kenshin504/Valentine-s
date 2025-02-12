$(document).ready(function () {
  $('.container').mouseenter(function () {
      $('.card').stop().animate({
          top: '-90px'
      }, 'slow');
  }).mouseleave(function () {
      $('.card').stop().animate({
          top: 0
      }, 'slow');
  });
});

const body = document.querySelector('body');

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'falling-heart';
  heart.textContent = '❤️'; // Heart emoji
  heart.style.left = `${Math.random() * 100}vw`; // Random horizontal position
  heart.style.fontSize = `${Math.random() * 20 + 10}px`; // Random size between 10px and 30px
  heart.style.animationDuration = `${Math.random() * 2 + 3}s`; // Random fall duration (3-5s)

  body.appendChild(heart);

  // Remove the heart after it completes the animation
  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Spawn hearts every 300ms
setInterval(createHeart, 300);

