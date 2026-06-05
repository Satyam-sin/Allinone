/* =========================
   PLANTS - PREMIUM JS
   PART 1
========================= */

/* 🌿 CREATE FLOATING LEAVES */

function createLeaf(){
    const leaf = document.createElement("div");

    leaf.className = "leaf";

    // random position
    leaf.style.left = Math.random() * 100 + "vw";

    // random size
    const size = Math.random() * 20 + 10;
    leaf.style.width = size + "px";
    leaf.style.height = size + "px";

    // random speed
    leaf.style.animationDuration = (Math.random() * 5 + 6) + "s";

    document.body.appendChild(leaf);

    // remove after animation
    setTimeout(() => {
        leaf.remove();
    }, 12000);
}

/* generate leaves continuously */
setInterval(createLeaf, 800);
/* =========================
   PART 2 - UI ENHANCEMENTS
========================= */

/* 🌱 FADE IN CARDS ON LOAD */
const cards = document.querySelectorAll(".card");

window.addEventListener("load", () => {

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";

        setTimeout(() => {
            card.style.transition = "0.8s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 150);

    });

});

/* 🔝 SMOOTH SCROLL TO TOP ON LOGO CLICK */
document.querySelectorAll(".header h1").forEach(el => {
    el.style.cursor = "pointer";

    el.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});