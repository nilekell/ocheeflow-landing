const SUBSCRIBE_URL = 'https://europe-west2-ocheeflow.cloudfunctions.net/subscribe';
const GUIDE_URL = 'https://ocheeflow.com/The%20Ocheeflow%20Guide.pdf';

/* ─────────────────────────────────────────
   BRAND LINKS — update these in one place
   ───────────────────────────────────────── */
const LINKS = {
  instagram: 'https://www.instagram.com/ocheeflow/',
  tiktok:    'https://www.tiktok.com/@ocheeflow',
};

document.querySelectorAll('[data-link]').forEach(el => {
  const key = el.getAttribute('data-link');
  if (LINKS[key]) el.href = LINKS[key];
});

/* ─────────────────────────────────────────
   SUBSCRIBE HELPER
   ───────────────────────────────────────── */
function subscribe(email) {
  return fetch(SUBSCRIBE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  }).then(res => {
    if (!res.ok) throw new Error('failed');
  });
}

/* ─────────────────────────────────────────
   NEWSLETTER SECTION FORM
   ───────────────────────────────────────── */
function handleNewsletterSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const email = form.email.value.trim();
  if (!email) return;

  const btn = form.querySelector('button');
  btn.textContent = 'Subscribing...';
  btn.disabled = true;
  form.email.disabled = true;

  subscribe(email)
    .then(() => {
      form.innerHTML = `
        <p style="color:var(--white); font-size:0.95rem; margin-bottom:1rem;">You're in. Welcome to the community.</p>
        <a href="${GUIDE_URL}" target="_blank" rel="noopener" class="btn btn-primary">Download the Guide →</a>
      `;
    })
    .catch(() => {
      btn.textContent = 'Try again';
      btn.disabled = false;
      form.email.disabled = false;
    });
}

/* ─────────────────────────────────────────
   GUIDE MODAL
   ───────────────────────────────────────── */
const guideModal = document.getElementById('guideModal');

function openGuideModal() {
  guideModal.classList.add('open');
  document.body.style.overflow = 'hidden';
  guideModal.querySelector('input[type="email"]').focus();
}

function closeGuideModal() {
  guideModal.classList.remove('open');
  document.body.style.overflow = '';
  sessionStorage.setItem('of_popup_closed', '1');
}

document.querySelectorAll('[data-open-guide-modal]').forEach(el => {
  el.addEventListener('click', e => { e.preventDefault(); openGuideModal(); });
});

document.getElementById('modalClose').addEventListener('click', closeGuideModal);

guideModal.addEventListener('click', e => {
  if (e.target === guideModal) closeGuideModal();
});

document.getElementById('guideModalForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = this;
  const email = form.email.value.trim();
  if (!email) return;

  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = 'Sending...';
  btn.disabled = true;
  form.email.disabled = true;

  subscribe(email)
    .then(() => {
      localStorage.setItem('of_subscribed', '1');
      guideModal.querySelector('.modal-card').innerHTML = `
        <button class="modal-close" onclick="closeGuideModal()" aria-label="Close">×</button>
        <div class="modal-success">
          <h3 style="margin-bottom:1rem;">You're in.</h3>
          <p style="color:var(--off-white); font-size:0.95rem; margin-bottom:1.5rem;">Welcome to the community. Your guide is ready.</p>
          <a href="${GUIDE_URL}" target="_blank" rel="noopener" class="btn btn-primary" style="display:inline-block;">Download the Guide →</a>
        </div>
      `;
    })
    .catch(() => {
      btn.textContent = 'Try again';
      btn.disabled = false;
      form.email.disabled = false;
    });
});

/* ─────────────────────────────────────────
   NEWSLETTER MODAL
   ───────────────────────────────────────── */
const newsletterModal = document.getElementById('newsletterModal');

function openNewsletterModal() {
  newsletterModal.classList.add('open');
  document.body.style.overflow = 'hidden';
  newsletterModal.querySelector('input[type="email"]').focus();
}

function closeNewsletterModal() {
  newsletterModal.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('[data-open-newsletter-modal]').forEach(el => {
  el.addEventListener('click', e => { e.preventDefault(); openNewsletterModal(); });
});

document.getElementById('newsletterModalClose').addEventListener('click', closeNewsletterModal);

newsletterModal.addEventListener('click', e => {
  if (e.target === newsletterModal) closeNewsletterModal();
});

document.getElementById('newsletterModalForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = this;
  const email = form.email.value.trim();
  if (!email) return;

  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = 'Subscribing...';
  btn.disabled = true;
  form.email.disabled = true;

  subscribe(email)
    .then(() => {
      newsletterModal.querySelector('.modal-card').innerHTML = `
        <button class="modal-close" onclick="closeNewsletterModal()" aria-label="Close">×</button>
        <div class="modal-success">
          <h3 style="margin-bottom:1rem;">You're in.</h3>
          <p style="color:var(--off-white); font-size:0.95rem; margin-bottom:1.5rem;">Welcome to the community. Your guide is ready.</p>
          <a href="${GUIDE_URL}" target="_blank" rel="noopener" class="btn btn-primary" style="display:inline-block;">Download the Guide →</a>
        </div>
      `;
    })
    .catch(() => {
      btn.textContent = 'Try again';
      btn.disabled = false;
      form.email.disabled = false;
    });
});

/* ─────────────────────────────────────────
   SHARED KEYBOARD HANDLER
   ───────────────────────────────────────── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeGuideModal(); closeNewsletterModal(); }
});

/* ─────────────────────────────────────────
   AUTO POPUP — fires after 5s on first visit
   ───────────────────────────────────────── */
setTimeout(() => {
  if (localStorage.getItem('of_subscribed')) return;
  if (sessionStorage.getItem('of_popup_closed')) return;
  if (guideModal.classList.contains('open')) return;
  if (newsletterModal.classList.contains('open')) return;
  openGuideModal();
}, 5000);
