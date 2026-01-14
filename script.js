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
