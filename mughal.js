/* =========================
   MUGHAL EMPIRE JS CORE
   PART 1 - BASE ENGINE
========================= */

/* -------- DOM READY -------- */
document.addEventListener("DOMContentLoaded", () => {

    console.log("🏛️ Mughal Empire System Loaded");

    initTimeline();
    initSmoothReveal();

});


/* =========================
   TIMELINE TOGGLE SYSTEM
========================= */

function toggleTimeline() {
    const timeline = document.querySelector(".timeline");

    if (!timeline) return;

    timeline.classList.toggle("active");

    // small effect
    timeline.style.opacity = "0";
    setTimeout(() => {
        timeline.style.opacity = "1";
    }, 150);

}


/* =========================
   SMOOTH REVEAL ON SCROLL (BASIC)
========================= */

function initSmoothReveal() {

    const elements = document.querySelectorAll(".card, .ruler");

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

    elements.forEach(el => {

        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.6s ease";

        observer.observe(el);

    });

}


/* =========================
   INITIALIZATION SYSTEM
========================= */

function initTimeline() {
    const timeline = document.querySelector(".timeline");

    if (timeline) {
        timeline.style.transition = "all 0.4s ease";
    }
}
/* =========================
   MUGHAL JS PART 2
   SMART SYSTEMS + AUTO FEATURES
========================= */


/* =========================
   AUTO DYNASTY COLOR SYSTEM
   (adds glow + detection)
========================= */

function applyDynastyColors() {

    const rulers = document.querySelectorAll(".ruler");

    rulers.forEach(ruler => {

        const text = ruler.innerText.toLowerCase();

        if (text.includes("babur")) ruler.classList.add("babur");
        else if (text.includes("humayun")) ruler.classList.add("humayun");
        else if (text.includes("akbar")) ruler.classList.add("akbar");
        else if (text.includes("jahangir")) ruler.classList.add("jahangir");
        else if (text.includes("shahjahan")) ruler.classList.add("shahjahan");
        else if (text.includes("aurangzeb")) ruler.classList.add("aurangzeb");
        else ruler.classList.add("later");

    });

}


/* =========================
   SCROLL SPY (ACTIVE SECTION HIGHLIGHT)
========================= */

function initScrollSpy() {

    const sections = document.querySelectorAll(".card, .ruler");

    window.addEventListener("scroll", () => {

        let scrollPos = window.scrollY + 200;

        sections.forEach(sec => {

            if (sec.offsetTop <= scrollPos && sec.offsetTop + sec.offsetHeight > scrollPos) {

                sec.style.boxShadow = "0 0 25px rgba(255,215,0,.25)";
                sec.style.transform = "scale(1.01)";

            } else {
                sec.style.boxShadow = "none";
                sec.style.transform = "scale(1)";
            }

        });

    });

}


/* =========================
   SMOOTH NAV SCROLLING
========================= */

function enableSmoothNav() {

    const links = document.querySelectorAll("a[href^='#']");

    links.forEach(link => {

        link.addEventListener("click", (e) => {

            e.preventDefault();

            const target = document.querySelector(link.getAttribute("href"));

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

}


/* =========================
   TYPEWRITER EFFECT (TITLE ANIMATION)
========================= */

function typeWriterEffect(element, speed = 80) {

    if (!element) return;

    const text = element.innerText;
    element.innerText = "";

    let i = 0;

    function typing() {

        if (i < text.length) {
            element.innerText += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }

    typing();
}


/* =========================
   INITIALIZE PART 2 SYSTEM
========================= */

document.addEventListener("DOMContentLoaded", () => {

    applyDynastyColors();
    initScrollSpy();
    enableSmoothNav();

    const heroTitle = document.querySelector(".hero h1");
    if (heroTitle) {
        typeWriterEffect(heroTitle, 60);
    }

});
/* =========================
   MUGHAL JS PART 3
   INTERACTION + EFFECT ENGINE
========================= */


/* =========================
   CARD FLOAT + HOVER DYNAMIC EFFECT
========================= */

function initCardPhysics() {

    const cards = document.querySelectorAll(".card, .ruler");

    cards.forEach(card => {

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;

            let centerX = rect.width / 2;
            let centerY = rect.height / 2;

            let rotateX = (y - centerY) / 20;
            let rotateY = (x - centerX) / -20;

            card.style.transform =
                `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;

            card.style.boxShadow = "0 0 30px rgba(255,215,0,.2)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
            card.style.boxShadow = "none";
        });

    });

}


/* =========================
   CLICK PARTICLE EFFECT (CSS SPARK SIMULATION)
========================= */

function createSpark(x, y) {

    const spark = document.createElement("div");

    spark.style.position = "fixed";
    spark.style.left = x + "px";
    spark.style.top = y + "px";
    spark.style.width = "6px";
    spark.style.height = "6px";
    spark.style.background = "gold";
    spark.style.borderRadius = "50%";
    spark.style.pointerEvents = "none";
    spark.style.zIndex = "9999";

    document.body.appendChild(spark);

    let angle = Math.random() * Math.PI * 2;
    let velocity = Math.random() * 4 + 2;
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
   GLOBAL CLICK EFFECT
========================= */

document.addEventListener("click", (e) => {
    createSpark(e.clientX, e.clientY);
});


/* =========================
   READING PROGRESS BAR
========================= */

function initReadingProgress() {

    const bar = document.createElement("div");

    bar.style.position = "fixed";
    bar.style.top = "0";
    bar.style.left = "0";
    bar.style.height = "4px";
    bar.style.width = "0%";
    bar.style.background = "linear-gradient(90deg, gold, orange)";
    bar.style.zIndex = "99999";

    document.body.appendChild(bar);

    window.addEventListener("scroll", () => {

        let scrollTop = document.documentElement.scrollTop;
        let docHeight = document.documentElement.scrollHeight - window.innerHeight;

        let progress = (scrollTop / docHeight) * 100;

        bar.style.width = progress + "%";

    });

}


/* =========================
   AUTO BACKGROUND MOOD SHIFT (TIME BASED)
========================= */

function initMoodTheme() {

    let hour = new Date().getHours();

    if (hour >= 6 && hour < 12) {
        document.body.style.filter = "brightness(1.05)";
    }

    else if (hour >= 12 && hour < 18) {
        document.body.style.filter = "brightness(1)";
    }

    else {
        document.body.style.filter = "brightness(0.85) contrast(1.1)";
    }

}


/* =========================
   INITIALIZE PART 3 SYSTEM
========================= */

document.addEventListener("DOMContentLoaded", () => {

    initCardPhysics();
    initReadingProgress();
    initMoodTheme();

});
/* =========================
   MUGHAL JS PART 4 - FINAL LAYER
   CLEAN ENGINE + SMART UX POLISH
========================= */


/* =========================
   SMART NAV HIGHLIGHT SYSTEM
========================= */

function initNavHighlight() {

    const sections = document.querySelectorAll(".ruler, .card");
    const navLinks = document.querySelectorAll(".nav a");

    window.addEventListener("scroll", () => {

        let scrollPos = window.scrollY + 250;

        sections.forEach((sec, index) => {

            if (sec.offsetTop <= scrollPos &&
                sec.offsetTop + sec.offsetHeight > scrollPos) {

                navLinks.forEach(link => {
                    link.style.opacity = "0.6";
                    link.style.transform = "scale(1)";
                });

                if (navLinks[index]) {
                    navLinks[index].style.opacity = "1";
                    navLinks[index].style.transform = "scale(1.1)";
                    navLinks[index].style.textShadow = "0 0 10px gold";
                }

            }

        });

    });

}


/* =========================
   SMOOTH AUTO SCROLL REVEAL BOOST
========================= */

function enhanceReveal() {

    const elements = document.querySelectorAll(".card, .ruler");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0) scale(1)";

                entry.target.style.transition = "all 0.6s ease";

            }

        });

    }, { threshold: 0.2 });

    elements.forEach(el => {

        observer.observe(el);

    });

}


/* =========================
   CLEAN PERFORMANCE ENGINE
========================= */

function optimizePerformance() {

    // Reduce unnecessary animations on mobile
    if (window.innerWidth < 768) {

        document.querySelectorAll(".ruler, .card").forEach(el => {
            el.style.animation = "none";
        });

    }

}


/* =========================
   KEYBOARD NAVIGATION SUPPORT
========================= */

document.addEventListener("keydown", (e) => {

    const sections = document.querySelectorAll(".ruler, .card");

    if (e.key === "ArrowDown") {
        window.scrollBy({ top: 200, behavior: "smooth" });
    }

    if (e.key === "ArrowUp") {
        window.scrollBy({ top: -200, behavior: "smooth" });
    }

});


/* =========================
   PAGE LOADER SYSTEM (FAKE LOADING EFFECT)
========================= */

function showLoader() {

    const loader = document.createElement("div");

    loader.style.position = "fixed";
    loader.style.top = "0";
    loader.style.left = "0";
    loader.style.width = "100%";
    loader.style.height = "100%";
    loader.style.background = "#0a0705";
    loader.style.display = "flex";
    loader.style.justifyContent = "center";
    loader.style.alignItems = "center";
    loader.style.zIndex = "999999";

    loader.innerHTML = `
        <div style="
            width:50px;
            height:50px;
            border:4px solid gold;
            border-top:4px solid transparent;
            border-radius:50%;
            animation:spin 1s linear infinite;
        "></div>
    `;

    document.body.appendChild(loader);

    setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => loader.remove(), 500);
    }, 1200);

}


/* =========================
   ADD LOADER KEYFRAME (INJECT STYLE)
========================= */

const style = document.createElement("style");
style.innerHTML = `
@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
`;
document.head.appendChild(style);


/* =========================
   FINAL SYSTEM INIT
========================= */

document.addEventListener("DOMContentLoaded", () => {

    initNavHighlight();
    enhanceReveal();
    optimizePerformance();
    showLoader();

    console.log("👑 MUGHAL EMPIRE FINAL SYSTEM LOADED SUCCESSFULLY");

});