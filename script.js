/* ============================================================
   HARMONICKÝ WEB – script.js
   Anna Mlčochová | harmonickyweb.cz
   ============================================================ */

'use strict';

/* ============================================================
   HAMBURGER MENU
   ============================================================ */
(function initHamburger() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu   = document.querySelector('.nav-menu');
  if (!hamburger || !navMenu) return;

  function close() {
    hamburger.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!isOpen));
    navMenu.classList.toggle('is-open', !isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : '';
  });

  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', close);
  });

  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
})();

/* ============================================================
   SCROLL – stín na headeru
   ============================================================ */
(function initScrollHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const update = () => header.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', update, { passive: true });
  update();
})();

/* ============================================================
   AKTIVNÍ POLOŽKA MENU
   ============================================================ */
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-link[href^="#"]');
  if (!sections.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        links.forEach(l => {
          l.classList.toggle('nav-link--active', l.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => obs.observe(s));
})();

/* ============================================================
   ACCORDION
   ============================================================ */
(function initAccordion() {
  document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const panelId = trigger.getAttribute('aria-controls');
      const panel   = document.getElementById(panelId);
      if (!panel) return;

      const isOpen = trigger.getAttribute('aria-expanded') === 'true';
      trigger.setAttribute('aria-expanded', String(!isOpen));
      panel.classList.toggle('is-open', !isOpen);
    });
  });
})();


/* ============================================================
   REFERENCE – ČÍST VÍCE
   ============================================================ */
(function initRefExpand() {
  const collapsibles = Array.from(document.querySelectorAll('.ref-card--collapsible'));
  const guzikCard = document.querySelector('.ref-card:not(.ref-card--collapsible)');
  if (!collapsibles.length || !guzikCard) return;

  function setCollapsedHeights() {
    // Nejdřív odstraním max-height, aby šlo změřit přirozenou výšku Guzikova textu
    collapsibles.forEach(c => {
      if (!c.classList.contains('is-open')) {
        c.querySelector('.ref-card__body').style.maxHeight = '';
      }
    });

    requestAnimationFrame(() => {
      const guzikBodyH = guzikCard.querySelector('.ref-card__body').offsetHeight;
      const sampleBtn = collapsibles[0].querySelector('.ref-card__more');
      const btnH = sampleBtn.offsetHeight
        + parseFloat(getComputedStyle(sampleBtn).marginTop || 0);

      collapsibles.forEach(c => {
        if (!c.classList.contains('is-open')) {
          const targetH = Math.max(guzikBodyH - btnH, 60);
          c.querySelector('.ref-card__body').style.maxHeight = targetH + 'px';
        }
      });
    });
  }

  setCollapsedHeights();
  window.addEventListener('resize', setCollapsedHeights);

  function openAll(trigger) {
    collapsibles.forEach(c => {
      c.classList.remove('peer-open');
      c.classList.add(c === trigger ? 'is-open' : 'peer-open');
      c.querySelector('.ref-card__body').style.maxHeight = '';
      const btn = c.querySelector('.ref-card__more');
      btn.setAttribute('aria-expanded', 'true');
      btn.querySelector('span').textContent = 'Číst méně';
    });
  }

  function closeAll() {
    collapsibles.forEach(c => {
      c.classList.remove('is-open', 'peer-open');
      const btn = c.querySelector('.ref-card__more');
      btn.setAttribute('aria-expanded', 'false');
      btn.querySelector('span').textContent = 'Číst více';
    });
    setCollapsedHeights();
  }

  collapsibles.forEach(card => {
    card.querySelector('.ref-card__more').addEventListener('click', () => {
      const anyOpen = collapsibles.some(c =>
        c.classList.contains('is-open') || c.classList.contains('peer-open')
      );
      if (anyOpen) {
        closeAll();
      } else {
        openAll(card);
      }
    });
  });
})();

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
(function initReveal() {
  if (!('IntersectionObserver' in window)) return;

  const targets = document.querySelectorAll([
    '.feature-card',
    '.step-card',
    '.cenik-card',
    '.portfolio-card',
    '.benefit-item',
    '.accordion-item',
    '.o-mne__grid',
    '.benefity__grid',
    '.kontakt__grid',
    '.section-title',
    '.section-label',
    '.hero-strip'
  ].join(','));

  targets.forEach(el => el.classList.add('reveal'));

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });

  targets.forEach(el => obs.observe(el));
})();

/* ============================================================
   KOPÍROVÁNÍ E-MAILU
   ============================================================ */
(function initCopyEmail() {
  const btn = document.querySelector('.copy-email-btn');
  if (!btn) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(btn.dataset.copy).then(() => {
      btn.classList.add('is-copied');
      btn.querySelector('i').className = 'fa-regular fa-circle-check';
      setTimeout(() => {
        btn.classList.remove('is-copied');
        btn.querySelector('i').className = 'fa-regular fa-copy';
      }, 2000);
    });
  });
})();

/* ============================================================
   KONTAKTNÍ FORMULÁŘ – validace + honeypot + AJAX odeslání (Formspree)
   ============================================================ */
(function initForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  const alertBox = form.querySelector('.form-alert');
  const setAlert = msg => { if (alertBox) alertBox.textContent = msg; };

  // Odstranění error při opravě
  form.querySelectorAll('.form-input').forEach(input => {
    input.addEventListener('input', () => input.classList.remove('is-error'));
  });

  form.addEventListener('submit', async e => {
    e.preventDefault();

    // Honeypot (Formspree pole _gotcha)
    const hp = form.querySelector('input[name="_gotcha"]');
    if (hp && hp.value.trim()) return;

    let valid = true;

    ['name', 'email', 'message'].forEach(fieldName => {
      const f = form.querySelector(`[name="${fieldName}"]`);
      if (!f) return;
      if (!f.value.trim()) { f.classList.add('is-error'); valid = false; }
    });

    const email = form.querySelector('[name="email"]');
    if (email && email.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.classList.add('is-error'); valid = false;
    }

    const gdpr = form.querySelector('[name="gdpr"]');
    if (gdpr && !gdpr.checked) { gdpr.classList.add('is-error'); valid = false; }

    if (!valid) {
      setAlert('Formulář je nekompletní. Prosím doplňte označená pole.');
      form.querySelector('.is-error')?.focus();
      return;
    }

    setAlert('');
    const btn = form.querySelector('button[type="submit"]');
    if (btn) { btn.disabled = true; btn.textContent = 'Odesílám…'; }

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        form.innerHTML = `
          <div class="form-success" role="alert">
            <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
            <h3>Zpráva odeslána!</h3>
            <p>Děkuji za váš zájem. Ozvu se vám co nejdříve.</p>
          </div>
        `;
      } else {
        setAlert('Odeslání se nezdařilo. Zkuste to prosím znovu, nebo napište na anna@harmonickyweb.cz.');
        if (btn) { btn.disabled = false; btn.textContent = 'ODESLAT'; }
      }
    } catch {
      setAlert('Chyba připojení. Zkuste to prosím znovu, nebo napište na anna@harmonickyweb.cz.');
      if (btn) { btn.disabled = false; btn.textContent = 'ODESLAT'; }
    }
  });
})();

/* ============================================================
   PODPIS – animace psaní (IntersectionObserver)
   ============================================================ */
(function () {
  const sig = document.querySelector('.lp-about__signature');
  if (!sig) return;
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        sig.classList.add('is-visible');
        observer.unobserve(sig);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  observer.observe(sig);
})();
