let time = 0;
setInterval(() => {
  time += 0.03;
  const autoX = 50 + 50 * Math.sin(time);
  const autoY = 50 + 50 * Math.cos(time * 0.8);
  document.body.style.setProperty('--mx', autoX + '%');
  document.body.style.setProperty('--my', autoY + '%');
}, 30);

document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  // Drive CSS variables used in the background radial gradients
  document.body.style.setProperty('--mx', x + '%');
  document.body.style.setProperty('--my', y + '%');
});

// Also update on resize to keep center consistent on window changes
window.addEventListener('resize', () => {
  document.body.style.setProperty('--mx', '50%');
  document.body.style.setProperty('--my', '50%');
});

// Hide/show header on scroll
let lastScrollTop = 0;
const header = document.querySelector('.top-header');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    // Scrolling down and past 100px
    header.classList.add('hidden');
  } else {
    // Scrolling up
    header.classList.remove('hidden');
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});

// Modal functionality
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.getElementsByClassName('close')[0];

// Get all images
const images = document.querySelectorAll('img');

images.forEach(img => {
  img.addEventListener('click', function(event) {
    event.preventDefault();
    modal.style.display = 'flex';
    modalImg.src = this.src;
  });
});

// Close modal when clicking the close button
closeBtn.addEventListener('click', function() {
 modal.style.display = 'none';
});

// Close modal when clicking outside the image
modal.addEventListener('click', function(event) {
 if (event.target === modal) {
   modal.style.display = 'none';
 }
});
