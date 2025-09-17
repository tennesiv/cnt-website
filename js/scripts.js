// ================================
// СЛАЙДЕР БАННЕРА
// ================================
let slides = document.querySelectorAll('.banner-slider .slide');
let currentSlide = 0;

// Кнопки "вперед" и "назад"
const nextBtn = document.querySelector('.banner-slider .next');
const prevBtn = document.querySelector('.banner-slider .prev');

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Автослайд каждые 5 секунд
setInterval(nextSlide, 5000);


// ================================
// АНИМАЦИЯ СЕКЦИЙ ПРИ СКРОЛЛЕ
// ================================
const sections = document.querySelectorAll('section');

function showSections() {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if(top < triggerBottom) section.classList.add('visible');
  });
}

window.addEventListener('scroll', showSections);
window.addEventListener('load', showSections);


// ================================
// ПОДСВЕТКА МЕНЮ ПРИ СКРОЛЛЕ
// ================================
const navLinks = document.querySelectorAll('nav a');

function highlightMenu() {
  let scrollPos = window.scrollY + window.innerHeight / 2;
  sections.forEach(section => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute('id');
    if(scrollPos >= top && scrollPos < bottom){
      navLinks.forEach(link => link.classList.remove('active'));
      const linkToActivate = document.querySelector(`nav a[href="#${id}"]`);
      if(linkToActivate) linkToActivate.classList.add('active');
    }
  });
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('load', highlightMenu);


// ================================
// ПРОСТАЯ ОБРАБОТКА ФОРМЫ (для красоты)
// ================================
const contactForm = document.querySelector('.contact-form');
if(contactForm){
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Спасибо! Ваше сообщение отправлено.');
    contactForm.reset();
  });
}
