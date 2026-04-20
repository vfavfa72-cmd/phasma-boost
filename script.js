/* =============================================
   PHASMABOOST — script.js
   ============================================= */

// ── Discount Banner ──────────────────────────
const discountBanner = document.getElementById('discountBanner');
const bannerClose    = document.getElementById('bannerClose');

if (bannerClose) {
    bannerClose.addEventListener('click', () => {
        discountBanner.style.transform = 'translateY(-100%)';
        discountBanner.style.transition = 'transform 0.4s ease';
        setTimeout(() => {
            discountBanner.style.display = 'none';
            document.body.classList.add('banner-hidden');
            document.querySelector('.navbar').classList.add('banner-hidden');
        }, 400);
    });
}

// ── Navbar scroll ─────────────────────────────
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.pageYOffset > 50);
});

// ── Mobile menu ───────────────────────────────
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks      = document.querySelector('.nav-links');

mobileMenuBtn?.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// ── Smooth scroll ─────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const href = a.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
            navLinks.classList.remove('active');
            mobileMenuBtn?.classList.remove('active');
        }
    });
});

// ── Typed text animation ──────────────────────
const phrases = [
    'Профессиональная',
    'Быстрая',
    'Надёжная',
    'Безопасная',
];
let phraseIdx = 0, charIdx = 0, deleting = false;
const typedEl = document.getElementById('typedText');

function typeLoop() {
    if (!typedEl) return;
    const current = phrases[phraseIdx];
    if (!deleting) {
        typedEl.textContent = current.slice(0, ++charIdx);
        if (charIdx === current.length) {
            deleting = true;
            setTimeout(typeLoop, 1800);
            return;
        }
    } else {
        typedEl.textContent = current.slice(0, --charIdx);
        if (charIdx === 0) {
            deleting = false;
            phraseIdx = (phraseIdx + 1) % phrases.length;
        }
    }
    setTimeout(typeLoop, deleting ? 60 : 100);
}
setTimeout(typeLoop, 800);

// ── Custom cursor ─────────────────────────────
const cursorDot  = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');

if (window.matchMedia('(hover: hover)').matches) {
    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener('mousemove', e => {
        mx = e.clientX; my = e.clientY;
        cursorDot.style.left  = mx + 'px';
        cursorDot.style.top   = my + 'px';
    });

    function animateRing() {
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        cursorRing.style.left = rx + 'px';
        cursorRing.style.top  = ry + 'px';
        requestAnimationFrame(animateRing);
    }
    animateRing();

    document.querySelectorAll('a, button, .service-card, .feature-card, .faq-item').forEach(el => {
        el.addEventListener('mouseenter', () => cursorRing.classList.add('hovering'));
        el.addEventListener('mouseleave', () => cursorRing.classList.remove('hovering'));
    });
}

// ── Toast notification ────────────────────────
const toast      = document.getElementById('toast');
const toastClose = document.getElementById('toastClose');

setTimeout(() => toast?.classList.add('show'), 2500);

toastClose?.addEventListener('click', () => {
    toast.classList.remove('show');
});

setTimeout(() => toast?.classList.remove('show'), 9000);

// ── Color theme panel ─────────────────────────
const themePanelBtn     = document.getElementById('themePanelBtn');
const themePanelContent = document.getElementById('themePanelContent');

themePanelBtn?.addEventListener('click', e => {
    e.stopPropagation();
    themePanelContent.classList.toggle('open');
});

document.addEventListener('click', e => {
    if (!e.target.closest('.theme-panel')) {
        themePanelContent?.classList.remove('open');
    }
});

// Color themes
document.querySelectorAll('[data-theme]').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('[data-theme]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.body.setAttribute('data-theme', btn.dataset.theme);
        localStorage.setItem('phasma-theme', btn.dataset.theme);
    });
});

// Light/dark mode
document.querySelectorAll('[data-mode]').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('[data-mode]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.body.classList.toggle('light-mode', btn.dataset.mode === 'light');
        localStorage.setItem('phasma-mode', btn.dataset.mode);
    });
});

// Restore saved preferences
const savedTheme = localStorage.getItem('phasma-theme');
const savedMode  = localStorage.getItem('phasma-mode');
if (savedTheme) {
    document.body.setAttribute('data-theme', savedTheme);
    document.querySelector(`[data-theme="${savedTheme}"]`)?.classList.add('active');
    document.querySelector('[data-theme="purple"]')?.classList.remove('active');
}
if (savedMode === 'light') {
    document.body.classList.add('light-mode');
    document.querySelector('[data-mode="light"]')?.classList.add('active');
    document.querySelector('[data-mode="dark"]')?.classList.remove('active');
}

// ── Scroll to top ─────────────────────────────
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    scrollTopBtn?.classList.toggle('visible', window.pageYOffset > 400);
});

scrollTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── Intersection Observer animations ──────────
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll(
    '.feature-card, .service-card, .process-step, .review-card, .faq-item, .game-stat'
).forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ── Counter animation ─────────────────────────
function animateCounter(el, target, suffix = '') {
    let start = 0;
    const step = target / 60;
    const timer = setInterval(() => {
        start = Math.min(start + step, target);
        el.textContent = Math.floor(start) + suffix;
        if (start >= target) clearInterval(timer);
    }, 16);
}

const statsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll('.stat-number').forEach(el => {
            if (el.dataset.animated) return;
            el.dataset.animated = '1';
            const text = el.textContent;
            const num  = parseInt(text.replace(/\D/g, ''));
            const suf  = text.replace(/[\d]/g, '');
            if (num) animateCounter(el, num, suf);
        });
        statsObserver.unobserve(entry.target);
    });
}, { threshold: 0.5 });

document.querySelector('.hero-stats') && statsObserver.observe(document.querySelector('.hero-stats'));

// ── Parallax hero bg ──────────────────────────
window.addEventListener('scroll', () => {
    const el = document.querySelector('.hero-bg');
    if (el) el.style.transform = `translateY(${window.pageYOffset * 0.4}px)`;
});

// ── Active nav links ──────────────────────────
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
        if (window.pageYOffset >= s.offsetTop - 120) current = s.id;
    });
    document.querySelectorAll('.nav-links a:not(.btn-primary)').forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
});

// ── Ripple effect ─────────────────────────────
document.querySelectorAll('.btn-primary, .btn-secondary, .btn-large, .btn-service').forEach(btn => {
    btn.addEventListener('click', e => {
        const r    = document.createElement('span');
        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        r.style.cssText = `
            position:absolute;border-radius:50%;
            width:${size}px;height:${size}px;
            left:${e.clientX - rect.left - size/2}px;
            top:${e.clientY - rect.top - size/2}px;
            background:rgba(255,255,255,0.25);
            transform:scale(0);pointer-events:none;
            animation:ripple-anim 0.6s ease-out forwards;
        `;
        btn.style.position = 'relative';
        btn.style.overflow = 'hidden';
        btn.appendChild(r);
        setTimeout(() => r.remove(), 600);
    });
});

// Inject ripple keyframe
const s = document.createElement('style');
s.textContent = `
@keyframes ripple-anim { to { transform:scale(4); opacity:0; } }

.nav-links.active {
    display:flex; flex-direction:column;
    position:absolute; top:72px; left:0; right:0;
    background:rgba(10,10,15,0.98); backdrop-filter:blur(16px);
    padding:24px; border-bottom:1px solid var(--border); gap:16px;
}
.mobile-menu-btn.active span:nth-child(1){ transform:rotate(45deg) translate(6px,6px); }
.mobile-menu-btn.active span:nth-child(2){ opacity:0; }
.mobile-menu-btn.active span:nth-child(3){ transform:rotate(-45deg) translate(6px,-6px); }
@media(max-width:768px){ .nav-links{ display:none; } .nav-links.active{ display:flex; } }
`;
document.head.appendChild(s);

// ── Progress bar animate on scroll ───────────
const progressObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll('.progress-fill').forEach(bar => {
            const w = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => { bar.style.width = w; }, 100);
        });
        progressObserver.unobserve(entry.target);
    });
}, { threshold: 0.3 });

document.querySelector('.level-progress-card') &&
    progressObserver.observe(document.querySelector('.level-progress-card'));

// ── Tilt effect on service cards ─────────────
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        // Don't tilt if hovering over the button
        if (e.target.closest('.btn-service')) return;
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width  - 0.5;
        const y = (e.clientY - rect.top)  / rect.height - 0.5;
        card.style.transform = `translateY(-12px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) scale(1.02)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
    // Reset tilt on mousedown so click registers cleanly
    card.addEventListener('mousedown', () => {
        card.style.transform = '';
    });
});

console.log('%c👻 PhasmaBoost', 'font-size:24px;font-weight:bold;color:#6366f1;');
console.log('%cПрофессиональная прокачка аккаунтов в Phasmophobia', 'font-size:14px;color:#a1a1aa;');
