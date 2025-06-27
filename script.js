// script.js

document.addEventListener('DOMContentLoaded', function() {
  // Parallax effect for background
  const parallaxBg = document.querySelector('.parallax-bg');
  window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    if (parallaxBg) {
      parallaxBg.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
  });

  // Section fade-in on scroll
  const sections = document.querySelectorAll('section');
  const fadeInOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.92;
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        section.style.opacity = 1;
        section.style.transform = 'none';
      }
    });
  };
  window.addEventListener('scroll', fadeInOnScroll);
  fadeInOnScroll();
}); 