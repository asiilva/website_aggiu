/* ============================================
   AGGIU Website v2 - Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initScrollReveal();
  initMethodologySteps();
  initContactForm();
});

/* --- Navbar scroll behavior --- */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const onScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // check initial state
}

/* --- Mobile menu toggle --- */
function initMobileMenu() {
  const hamburger = document.querySelector('.navbar-hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* --- Scroll reveal animations --- */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

/* --- Methodology interactive steps --- */
function initMethodologySteps() {
  const wheelSteps = document.querySelectorAll('.process-wheel-step');
  const cards = document.querySelectorAll('.process-card');
  if (!wheelSteps.length && !cards.length) return;

  // Hover on wheel step highlights the corresponding card
  wheelSteps.forEach(step => {
    step.addEventListener('mouseenter', () => {
      const stepNum = step.dataset.step;
      cards.forEach(card => {
        if (card.dataset.step === stepNum) {
          card.classList.add('highlighted');
        } else {
          card.classList.remove('highlighted');
        }
      });
    });

    step.addEventListener('mouseleave', () => {
      cards.forEach(card => card.classList.remove('highlighted'));
    });

    // Click scrolls to corresponding card
    step.addEventListener('click', () => {
      const stepNum = step.dataset.step;
      const targetCard = document.querySelector(`.process-card[data-step="${stepNum}"]`);
      if (targetCard) {
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetCard.classList.add('highlighted');
        setTimeout(() => targetCard.classList.remove('highlighted'), 2000);
      }
    });
  });
}

/* --- Contact form handler --- */
function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const btn = form.querySelector('.form-submit .btn');
    const originalText = btn.textContent;

    btn.textContent = 'Enviando...';
    btn.disabled = true;

    // Simulate submission
    setTimeout(() => {
      btn.textContent = 'Enviado!';
      btn.style.background = 'var(--success)';

      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.disabled = false;
        form.reset();
      }, 2000);
    }, 1500);
  });
}
