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
  heart.style.fontSize = `${Math.random() * 20 + 50}px`; // Random size between 10px and 30px
  heart.style.animationDuration = `${Math.random() * 0.2 + 1}s`; // Random fall duration (3-5s)

  body.appendChild(heart);

  // Remove the heart after it completes the animation
  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Spawn hearts every 300ms
setInterval(createHeart, 300);

$(document).ready(function () {
  // Mouseenter effect for the card
  $('.container').mouseenter(function () {
      $('.card').stop().animate({ top: '-90px' }, 'slow');
  }).mouseleave(function () {
      $('.card').stop().animate({ top: '5px' }, 'slow');
  });

  // Click event to expand card with flashy effect
  $('.card').click(function () {
      $(this).addClass('clicked'); // Add flash effect
      setTimeout(() => {
          $(this).removeClass('clicked');
      }, 400); // Remove effect after animation

      $('.dark-overlay').fadeIn(); // Show dark overlay
      $('.overlay-card').fadeIn().css('display', 'flex'); // Show message card
  });

  // Close button event with smooth animation
  $('.close-btn').click(function () {
      $('.overlay-card').addClass('closing'); // Add closing animation

      // Wait for the animation to finish, then hide the card properly
      $('.overlay-card').on('animationend', function () {
          $('.overlay-card').hide().removeClass('closing'); // Hide message card after animation completes
          $('.dark-overlay').fadeOut(); // Hide dark overlay
          $(this).off('animationend'); // Remove event listener to avoid duplication
      });
  });

  // Function to create falling hearts INSIDE .card-section
  function createHeart() {
      const heart = document.createElement('div');
      heart.className = 'falling-heart';
      heart.textContent = '❤️';

      const cardSection = document.querySelector('.card-section');

      // Random position, size, and animation duration
      heart.style.left = `${Math.random() * 100}%`; // Stay within section width
      heart.style.fontSize = `${Math.random() * 20 + 10}px`; 
      heart.style.animationDuration = `${Math.random() * 2 + 2}s`;
      // Append hearts only inside card-section
      cardSection.appendChild(heart);

      // Remove heart after it falls
      setTimeout(() => {
          heart.remove();
      }, 5000); // Remove quickly after falling
  }

  // Spawn falling hearts every 150ms (More frequent & faster)
  setInterval(createHeart, 100);
});