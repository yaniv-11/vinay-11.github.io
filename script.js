// small helpers: year update, simple nav toggle, smooth scroll
document.getElementById('year').textContent = new Date().getFullYear();

const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (toggle){
  toggle.addEventListener('click', ()=> {
    nav.classList.toggle('open');
    toggle.textContent = nav.classList.contains('open') ? '✕' : '☰';
  });
}

// smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const target = document.querySelector(a.getAttribute('href'));
    if (target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth'}); }
  });
});
