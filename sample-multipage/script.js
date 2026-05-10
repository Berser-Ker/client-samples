const progress = document.getElementById('progress');
const nav = document.querySelector('nav.top');
const spot = document.getElementById('spot');
const isSolid = nav && nav.classList.contains('solid');

const onScroll = () => {
  const h = document.documentElement;
  const max = h.scrollHeight - h.clientHeight;
  if (progress) progress.style.width = max > 0 ? (window.scrollY / max * 100) + '%' : '0%';
  if (nav && !isSolid) nav.classList.toggle('scrolled', window.scrollY > 40);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Spotlight cursor
let raf = null, mx = 0, my = 0;
if (spot) {
  window.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    spot.classList.add('on');
    if (!raf) raf = requestAnimationFrame(() => { spot.style.left = mx + 'px'; spot.style.top = my + 'px'; raf = null; });
  });
  window.addEventListener('mouseleave', () => spot.classList.remove('on'));
}

// Reveals
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.fade').forEach(el => obs.observe(el));

// Active nav link
const page = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nl[href]').forEach(link => {
  const h = link.getAttribute('href');
  if (h === page || (!page && h === 'index.html')) link.classList.add('active');
});

// Mobile menu
const mobBtn = document.querySelector('.mob-btn');
const navLinks = document.querySelector('.nav-links');
if (mobBtn && navLinks) mobBtn.addEventListener('click', () => navLinks.classList.toggle('open'));

// Count-up
const cObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = parseFloat(el.dataset.target);
    const dec = parseInt(el.dataset.decimals || '0', 10);
    const dur = 1500, start = performance.now();
    const tick = (t) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * eased).toFixed(dec);
      if (p < 1) requestAnimationFrame(tick); else el.textContent = target.toFixed(dec);
    };
    requestAnimationFrame(tick);
    cObs.unobserve(el);
  });
}, { threshold: 0.4 });
document.querySelectorAll('.count').forEach(el => cObs.observe(el));

// Magnetic CTA
document.querySelectorAll('.btn-ink, .btn-cream').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const r = btn.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    btn.style.transform = `translate(${x * 0.18}px, ${y * 0.25 - 2}px)`;
  });
  btn.addEventListener('mouseleave', () => btn.style.transform = '');
});
