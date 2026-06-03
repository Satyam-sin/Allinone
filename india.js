/* =========================
   EDUVERSE HISTORY JS
   PREMIUM UNIVERSAL VERSION
   ========================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       1. DROPDOWN MENU SYSTEM
       ========================= */

    const dropdown = document.querySelector(".dropdown");
    const btn = document.querySelector(".dropbtn");

    if (dropdown && btn) {

        // Toggle dropdown on click
        btn.addEventListener("click", function (e) {
            e.stopPropagation();
            dropdown.classList.toggle("show");
        });

        // Close when clicking outside
        window.addEventListener("click", function () {
            dropdown.classList.remove("show");
        });

    }


    /* =========================
       2. ACTIVE PAGE HIGHLIGHT
       ========================= */

    const links = document.querySelectorAll(".dropdown-content a");

    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {

        if (link.getAttribute("href") === currentPage) {
            link.style.background = "#00e5ff";
            link.style.color = "#000";
            link.style.fontWeight = "bold";
        }

    });


    /* =========================
       3. SMOOTH CARD ANIMATION
       ========================= */

    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }

        });

    }, {
        threshold: 0.15
    });

    cards.forEach(card => {

        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition = "0.6s ease";

        observer.observe(card);

    });


    /* =========================
       4. BACK BUTTON ENHANCEMENT
       ========================= */

    const homeLink = document.querySelector('a[href*="index.html"]');

    if (homeLink) {
        homeLink.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.05)";
        });

        homeLink.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    }


    /* =========================
       5. PAGE TITLE ANIMATION
       ========================= */

    const titles = [
        "📜 History - Eduverse",
        "🏛️ Ancient Civilizations",
        "👑 Maurya • Gupta Empire",
        "⚔️ World History Explorer"
    ];

    let i = 0;

    setInterval(() => {
        document.title = titles[i];
        i = (i + 1) % titles.length;
    }, 3000);


    /* =========================
       6. OPTIONAL SEARCH SYSTEM
       (if input exists)
       ========================= */

    const searchInput = document.querySelector("input");

    if (searchInput) {

        searchInput.addEventListener("keyup", function () {

            let value = this.value.toLowerCase();

            document.querySelectorAll(".card").forEach(card => {

                let text = card.innerText.toLowerCase();

                if (text.includes(value)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }

            });

        });

    }

});