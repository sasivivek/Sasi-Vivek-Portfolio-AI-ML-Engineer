/* ═══════════════════════════════════════════════════════════════════════════
   SASI VIVEK NEELAPALA — Portfolio JS
   Scroll animations, navbar, particles, counter, mobile menu
   ═══════════════════════════════════════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", () => {
    initNavbar();
    initMobileMenu();
    initScrollAnimations();
    initParticles();
    initCounters();
    initSmoothNav();
});

/* ─── Navbar scroll effect ───────────────────────────────────────────────── */
function initNavbar() {
    const navbar = document.getElementById("navbar");
    let ticking = false;

    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                navbar.classList.toggle("scrolled", window.scrollY > 50);
                ticking = false;
            });
            ticking = true;
        }
    });
}

/* ─── Mobile hamburger menu ──────────────────────────────────────────────── */
function initMobileMenu() {
    const toggle = document.getElementById("nav-toggle");
    const links = document.getElementById("nav-links");

    toggle.addEventListener("click", () => {
        toggle.classList.toggle("active");
        links.classList.toggle("open");
    });

    // Close menu when a link is clicked
    links.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            toggle.classList.remove("active");
            links.classList.remove("open");
        });
    });
}

/* ─── Intersection Observer for scroll animations ────────────────────────── */
function initScrollAnimations() {
    const elements = document.querySelectorAll("[data-anim]");

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = parseInt(entry.target.dataset.delay || "0", 10);
                    setTimeout(() => {
                        entry.target.classList.add("visible");
                    }, delay);
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach(el => observer.observe(el));
}

/* ─── Floating particles in hero ─────────────────────────────────────────── */
function initParticles() {
    const container = document.getElementById("particles");
    if (!container) return;

    const count = 40;
    const colors = [
        "rgba(124, 58, 237, 0.5)",
        "rgba(6, 182, 212, 0.4)",
        "rgba(244, 63, 94, 0.35)",
        "rgba(255, 255, 255, 0.15)",
    ];

    for (let i = 0; i < count; i++) {
        const p = document.createElement("div");
        p.classList.add("particle");
        p.style.left = Math.random() * 100 + "%";
        p.style.width = p.style.height = (Math.random() * 3 + 1.5) + "px";
        p.style.background = colors[Math.floor(Math.random() * colors.length)];
        p.style.animationDuration = (Math.random() * 12 + 8) + "s";
        p.style.animationDelay = (Math.random() * 10) + "s";
        container.appendChild(p);
    }
}

/* ─── Animated number counters ───────────────────────────────────────────── */
function initCounters() {
    const counters = document.querySelectorAll("[data-count]");

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.5 }
    );

    counters.forEach(el => observer.observe(el));
}

function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1500;
    const start = performance.now();

    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target);
        if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
}

/* ─── Active nav link highlighting ───────────────────────────────────────── */
function initSmoothNav() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute("id");
                    navLinks.forEach(link => {
                        link.classList.toggle(
                            "active-link",
                            link.getAttribute("href") === `#${id}`
                        );
                    });
                }
            });
        },
        { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
    );

    sections.forEach(s => observer.observe(s));
}
