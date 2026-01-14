document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const navEl = document.getElementById('mainNav');
      const yOffset = (navEl ? navEl.offsetHeight : 80) + 8;
      const y = target.getBoundingClientRect().top + window.pageYOffset - yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
 const collapseEl = document.querySelector('.navbar-collapse');
      if (collapseEl && collapseEl.classList.contains('show')) {
        const bs = bootstrap.Collapse.getInstance(collapseEl) || new bootstrap.Collapse(collapseEl);
        bs.hide();
      }
    }
  });
});

const nav = document.getElementById('mainNav');
const topTrigger = 20;
window.addEventListener('scroll', ()=>{
  if(window.scrollY > topTrigger) nav.classList.add('scrolled'); else nav.classList.remove('scrolled');
});
const sections = document.querySelectorAll('section[id], header[id]');
const navLinks = document.querySelectorAll('.nav-link');
const obsOptions = { root: null, rootMargin: '-35% 0px -50% 0px', threshold: 0 };
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const id = entry.target.id;
    if (id) {
      const link = document.querySelector('.nav-link[href="#' + id + '"]');
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        if (link) link.classList.add('active');
      }
    }
  });
}, obsOptions);
sections.forEach(s => observer.observe(s));