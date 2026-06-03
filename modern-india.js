/* =========================
   MODERN INDIA JS ENGINE
========================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log("🇮🇳 Modern India Loaded");

    initTimelineToggle();
    initAutoReveal();
    initScrollHighlight();
    initSmoothScrollFix();

});


/* =========================
   TIMELINE TOGGLE (FIXED)
========================= */

function toggleTimeline() {

    const timeline = document.querySelector(".timeline");

    if (!timeline) return;

    // FIX: proper toggle system
    timeline.classList.toggle("active");

    if (timeline.classList.contains("active")) {

        timeline.style.display = "block";
        timeline.style.opacity = "0";

        setTimeout(() => {
            timeline.style.opacity = "1";
            timeline.style.transition = "0.5s ease";
        }, 50);

    } else {

        timeline.style.opacity = "0";

        setTimeout(() => {
            timeline.style.display = "none";
        }, 300);

    }

}


/* =========================
   AUTO SCROLL REVEAL ANIMATION
========================= */

function initAutoReveal() {

    const elements = document.querySelectorAll(".ruler, .card, .point");

    elements.forEach(el => {

        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.6s ease";

    });

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {
        threshold: 0.15
    });

    elements.forEach(el => observer.observe(el));

}


/* =========================
   SCROLL HIGHLIGHT SYSTEM
========================= */

function initScrollHighlight() {

    const sections = document.querySelectorAll(".ruler");

    window.addEventListener("scroll", () => {

        let scrollY = window.scrollY + 200;

        sections.forEach(sec => {

            if (
                sec.offsetTop <= scrollY &&
                sec.offsetTop + sec.offsetHeight > scrollY
            ) {

                sec.style.boxShadow = "0 0 25px rgba(0,198,255,.4)";
                sec.style.transform = "scale(1.02)";

            } else {

                sec.style.boxShadow = "none";
                sec.style.transform = "scale(1)";

            }

        });

    });

}


/* =========================
   SMOOTH SCROLL FIX
========================= */

function initSmoothScrollFix() {

    document.querySelectorAll("a[href^='#']").forEach(link => {

        link.addEventListener("click", (e) => {

            e.preventDefault();

            const target = document.querySelector(link.getAttribute("href"));

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

}


/* =========================
   EXTRA UX POLISH (MOBILE SAFE)
========================= */

if (window.innerWidth < 768) {

    document.addEventListener("DOMContentLoaded", () => {

        document.querySelectorAll(".ruler").forEach(el => {
            el.style.animation = "none";
        });

    });

}