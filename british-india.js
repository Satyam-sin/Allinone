/* =========================
   BRITISH INDIA - JS ENGINE
========================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log("🇬🇧 British India System Loaded");

    initTimelineToggle();
    initScrollReveal();
    initScrollSpy();
    initClickEffect();

});


/* =========================
   TIMELINE TOGGLE
========================= */

function toggleTimeline() {

    const timeline = document.querySelector(".timeline");

    if (!timeline) return;

    timeline.classList.toggle("active");

    // smooth animation reset
    timeline.style.opacity = "0.5";

    setTimeout(() => {
        timeline.style.opacity = "1";
    }, 200);

}


/* =========================
   SCROLL REVEAL SYSTEM
========================= */

function initScrollReveal() {

    const items = document.querySelectorAll(".ruler, .card");

    items.forEach(el => {

        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.6s ease";

        const observer = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }

            });

        }, {
            threshold: 0.2
        });

        observer.observe(el);

    });

}


/* =========================
   SCROLL SPY (ACTIVE HIGHLIGHT)
========================= */

function initScrollSpy() {

    const sections = document.querySelectorAll(".ruler");

    window.addEventListener("scroll", () => {

        let scrollPos = window.scrollY + 200;

        sections.forEach(sec => {

            if (
                sec.offsetTop <= scrollPos &&
                sec.offsetTop + sec.offsetHeight > scrollPos
            ) {
                sec.style.boxShadow = "0 0 25px rgba(0,198,255,.3)";
                sec.style.transform = "scale(1.02)";
            } else {
                sec.style.boxShadow = "none";
                sec.style.transform = "scale(1)";
            }

        });

    });

}


/* =========================
   CLICK PARTICLE EFFECT
========================= */

function initClickEffect() {

    document.addEventListener("click", (e) => {

        createSpark(e.clientX, e.clientY);

    });

}


/* spark animation */
function createSpark(x, y) {

    const spark = document.createElement("div");

    spark.style.position = "fixed";
    spark.style.left = x + "px";
    spark.style.top = y + "px";
    spark.style.width = "6px";
    spark.style.height = "6px";
    spark.style.background = "#00c6ff";
    spark.style.borderRadius = "50%";
    spark.style.pointerEvents = "none";
    spark.style.zIndex = "9999";

    document.body.appendChild(spark);

    let angle = Math.random() * Math.PI * 2;
    let velocity = Math.random() * 3 + 2;

    let dx = Math.cos(angle) * velocity;
    let dy = Math.sin(angle) * velocity;

    let opacity = 1;

    function animate() {

        x += dx;
        y += dy;
        opacity -= 0.02;

        spark.style.left = x + "px";
        spark.style.top = y + "px";
        spark.style.opacity = opacity;

        if (opacity > 0) {
            requestAnimationFrame(animate);
        } else {
            spark.remove();
        }

    }

    animate();
}


/* =========================
   KEYBOARD NAVIGATION
========================= */

document.addEventListener("keydown", (e) => {

    if (e.key === "ArrowDown") {
        window.scrollBy({ top: 200, behavior: "smooth" });
    }

    if (e.key === "ArrowUp") {
        window.scrollBy({ top: -200, behavior: "smooth" });
    }

});