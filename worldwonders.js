const container = document.getElementById("wondersContainer");
const searchBox = document.getElementById("searchBox");
const filter = document.getElementById("filter");

// Modal elements
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");
const modalCountry = document.getElementById("modalCountry");
const closeBtn = document.getElementById("closeBtn");

// Map variables
let map;
let marker;

// Data storage
let allWonders = [];

// 🌍 Load JSON data
fetch("worldwonders.json")
    .then(res => res.json())
    .then(data => {
        allWonders = data;
        displayWonders(allWonders);
    })
    .catch(err => console.log("JSON Error:", err));


// 📦 Create Cards
function displayWonders(data) {
    container.innerHTML = "";

    data.forEach(wonder => {

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${wonder.image}" alt="${wonder.name}">
            <div class="card-content">
                <h3>${wonder.name}</h3>
                <p>${wonder.country}</p>
            </div>
        `;

        card.addEventListener("click", () => {
            openModal(wonder);
        });

        container.appendChild(card);
    });
}


// 🔍 SEARCH
searchBox.addEventListener("input", () => {
    const value = searchBox.value.toLowerCase();

    const filtered = allWonders.filter(w =>
        w.name.toLowerCase().includes(value) ||
        w.country.toLowerCase().includes(value)
    );

    displayWonders(filtered);
});


// 🧭 FILTER
filter.addEventListener("change", () => {
    const value = filter.value;

    if (value === "all") {
        displayWonders(allWonders);
    } else {
        const filtered = allWonders.filter(w => w.type === value);
        displayWonders(filtered);
    }
});


// 🪟 OPEN MODAL
function openModal(wonder) {

    modal.classList.remove("hidden");

    modalTitle.textContent = wonder.name;
    modalImage.src = wonder.image;
    modalDescription.textContent = wonder.description;
    modalCountry.textContent = "Country: " + wonder.country;

    // 🗺️ Load Map
    setTimeout(() => {

        if (map) {
            map.remove();
        }

        map = L.map("map").setView([wonder.lat, wonder.lng], 5);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "&copy; OpenStreetMap contributors"
        }).addTo(map);

        marker = L.marker([wonder.lat, wonder.lng])
            .addTo(map)
            .bindPopup(wonder.name)
            .openPopup();

    }, 200);
}


// ❌ CLOSE MODAL
closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
});


// click outside modal close
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.add("hidden");
    }
});


// 📱 PWA Service Worker
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js")
        .then(() => console.log("Service Worker Registered"))
        .catch(err => console.log("SW Error:", err));
}