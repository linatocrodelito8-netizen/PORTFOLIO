// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Reveal-on-scroll animation (used on every page)
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// Animate skill bars once visible (only present on skills.html)
const bars = document.querySelectorAll('.bar-fill');
if (bars.length) {
  const barIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.style.width = entry.target.dataset.level + '%';
        barIO.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(b => barIO.observe(b));
}

// Contact form (only present on contact.html)
const form = document.getElementById('contactForm');
if (form) {
  const status = document.getElementById('formStatus');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.textContent = 'Thanks — your message has been noted. I will get back to you soon.';
    form.reset();
    setTimeout(() => status.textContent = '', 5000);
  });

  // ===== PROJECTS PROJECTION HOVER/CLICK SWITCHER =====
const projectSlots = document.querySelectorAll('.project-slot');
const projPanes = document.querySelectorAll('.proj-pane');

if (projectSlots.length > 0) {
  projectSlots.forEach(slot => {
    slot.addEventListener('mouseenter', () => {
      // Remove active states
      projectSlots.forEach(s => s.classList.remove('active'));
      projPanes.forEach(p => p.classList.remove('active'));

      // Add active state to hovered slot
      slot.classList.add('active');
      
      // Target and display matching projection pane
      const targetId = slot.getAttribute('data-target');
      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });
}
}