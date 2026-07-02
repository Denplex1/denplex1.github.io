// 1. Fade in sections as you scroll
const faders = document.querySelectorAll('.fade');
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.style.opacity = 1;
    entry.target.style.transform = 'translateY(0)';
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(fader => {
  fader.style.opacity = 0;
  fader.style.transform = 'translateY(30px)';
  fader.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  appearOnScroll.observe(fader);
});

// 2. Back to top button
const topBtn = document.getElementById("topBtn");
if(topBtn){
  window.onscroll = () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  };
  topBtn.onclick = () => window.scrollTo({top: 0, behavior: 'smooth'});
}

// 3. Dark / Light Mode Toggle - CLEAN VERSION
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('themeToggle');
  const body = document.body;

  if(toggleBtn){
    if(localStorage.getItem('theme') === 'light'){
      body.classList.add('light');
      toggleBtn.textContent = '🌙';
    } else {
      toggleBtn.textContent = '☀️';
    }

    toggleBtn.addEventListener('click', () => {
      body.classList.toggle('light');
      if(body.classList.contains('light')){
        localStorage.setItem('theme', 'light');
        toggleBtn.textContent = '🌙';
      } else {
        localStorage.setItem('theme', 'dark');
        toggleBtn.textContent = '☀️';
      }
    });
  }
});
