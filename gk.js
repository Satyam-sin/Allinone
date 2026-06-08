// =========================
// GENERAL KNOWLEDGE HUB
// gk.js
// =========================

// Search Categories

const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const searchValue =
        this.value.toLowerCase();

        cards.forEach(card => {

            const text =
            card.textContent.toLowerCase();

            if (text.includes(searchValue)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

}

// =========================
// Random Knowledge Quotes
// =========================

const quotes = [

    "Knowledge is power.",
    "Learning never exhausts the mind.",
    "Curiosity is the key to discovery.",
    "Every day is a chance to learn.",
    "Education is the passport to the future.",
    "The more you know, the more you grow.",
    "Great discoveries begin with questions.",
    "Science is organized knowledge.",
    "Knowledge opens new worlds.",
    "Explore. Learn. Discover."

];

const quoteElement =
document.querySelector(".quote p");

if (quoteElement) {

    const randomQuote =
    quotes[Math.floor(
        Math.random() * quotes.length
    )];

    quoteElement.textContent =
    randomQuote;

}

// =========================
// Card Hover Sound Effect
// (Optional)
// =========================

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
        "translateY(-8px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "";

    });

});

// =========================
// Scroll To Top Button
// =========================

const topButton =
document.createElement("button");

topButton.innerHTML = "⬆";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.cursor = "pointer";
topButton.style.fontSize = "20px";
topButton.style.display = "none";
topButton.style.zIndex = "999";
topButton.style.background =
"rgba(0,150,255,0.8)";
topButton.style.color = "white";
topButton.style.backdropFilter =
"blur(10px)";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display =
        "block";

    } else {

        topButton.style.display =
        "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// =========================
// Welcome Message
// =========================

console.log(
"🌍 Welcome to General Knowledge Hub!"
);

// =========================
// Current Year In Footer
// =========================

const footer =
document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
    `© ${new Date().getFullYear()} General Knowledge Hub`;

}

// =========================
// Category Counter
// =========================

const totalCategories =
cards.length;

console.log(
`Total Categories: ${totalCategories}`
);