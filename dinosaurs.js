const container = document.getElementById("dinosaursContainer");
const searchInput = document.getElementById("searchInput");

let dinosaursData = [];

fetch("dinosaurs.json")
.then(response => response.json())
.then(data => {
dinosaursData = data;
displayDinosaurs(data);
})
.catch(error => {
container.innerHTML = "<h2>❌ Error Loading Data</h2> <p>${error}</p>";
});

function displayDinosaurs(dinosaurs) {

container.innerHTML = "";

dinosaurs.forEach(dino => {

const card = document.createElement("div");
card.className = "dino-card";

card.innerHTML = `
  <img
    src="${dino.image}"
    alt="${dino.name}"
    class="dino-image"
  >

  <div class="dino-content">

    <h2 class="dino-name">
      ${dino.name}
    </h2>

    <div class="dino-info">

      <p><strong>📅 Period:</strong> ${dino.period}</p>
      <p><strong>🍖 Diet:</strong> ${dino.diet}</p>
      <p><strong>📏 Height:</strong> ${dino.height}</p>
      <p><strong>📐 Length:</strong> ${dino.length}</p>
      <p><strong>⚖️ Weight:</strong> ${dino.weight}</p>

    </div>

    <div class="description-section">

      <h3 class="overview-title">
        ${dino.description.overviewTitle}
      </h3>

      <p>${dino.description.overview}</p>

      <h3 class="habitat-title">
        ${dino.description.habitatTitle}
      </h3>

      <p>${dino.description.habitat}</p>

      <h3 class="diet-title">
        ${dino.description.dietTitle}
      </h3>

      <p>${dino.description.dietInfo}</p>

      <h3 class="body-title">
        ${dino.description.bodyTitle}
      </h3>

      <p>${dino.description.bodyInfo}</p>

      <h3 class="fact-title">
        ${dino.description.factTitle}
      </h3>

      <p>${dino.description.factInfo}</p>

    </div>

  </div>
`;

container.appendChild(card);

});

}
/* ==========================
SEARCH
========================== */

searchInput.addEventListener("input", () => {

const searchText = searchInput.value.toLowerCase();

const filtered = dinosaursData.filter(dino =>
dino.name.toLowerCase().includes(searchText)
);

displayDinosaurs(filtered);

});

/* ==========================
FULL SCREEN IMAGE VIEWER
========================== */

const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");

/* इमेज खोलना */

document.addEventListener("click", (e) => {

if (e.target.classList.contains("dino-image")) {

modalImage.src = e.target.src;

imageModal.style.display = "flex";

}

});

/* इमेज पर क्लिक करके बंद */

modalImage.addEventListener("click", () => {

imageModal.style.display = "none";

});

/* बैकग्राउंड पर क्लिक करके बंद */

imageModal.addEventListener("click", (e) => {

if (e.target === imageModal) {

imageModal.style.display = "none";

}

});

/* ESC Key दबाने पर बंद (Desktop) */

document.addEventListener("keydown", (e) => {

if (e.key === "Escape") {

imageModal.style.display = "none";

}

});