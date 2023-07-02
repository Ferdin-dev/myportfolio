
const menu = document.querySelector('.menu_bar');
const close = document.querySelector('.close-nav');
const nav = document.querySelector('.navigation');

menu.addEventListener('click', () =>{
    nav.classList.add('open-nav');
})


close.addEventListener('click', () =>{
    nav.classList.remove('open-nav');
})

// Code to reveal content when scrolling down

const sections = document.querySelectorAll('.scroll-reveal');

const revealSection = (section) => {
  const sectionTop = section.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  if (sectionTop < windowHeight) {
    section.classList.add('active');
  } else {
    section.classList.remove('active');
  }
};

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    revealSection(section);
  });
});

var typed = new Typed(".auto-type",{
  strings: ["UI/UX Designer","Web Developer","Flutter Developer","Data Analyst"],
  typeSpeed: 150,
  backSpeed:150,
  loop: true
})