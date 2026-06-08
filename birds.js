let birdsData = [];

// DOM elements
const container = document.getElementById("birdsContainer");
const searchBox = document.getElementById("searchBox");
const filter = document.getElementById("filter");
const darkBtn = document.getElementById("darkBtn");

const modal = document.getElementById("modal");
const birdDetail = document.getElementById("birdDetail");
const closeBtn = document.getElementById("closeBtn");

// 🖼️ Fullscreen Viewer
const imageViewer = document.createElement("div");
imageViewer.style.cssText = `
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,0.92);
display:none;
justify-content:center;
align-items:center;
z-index:9999;
cursor:pointer;
`;

document.body.appendChild(imageViewer);

imageViewer.addEventListener("click", () => {
  imageViewer.style.display = "none";
});

// 🔥 Load JSON
fetch("birds.json")
  .then(res => res.json())
  .then(data => {
    birdsData = data;
    displayBirds(birdsData);
  })
  .catch(() => {
    container.innerHTML = "<p>डेटा लोड नहीं हो पाया</p>";
  });

// 🐦 Render Cards
function displayBirds(data) {
  container.innerHTML = "";

  data.forEach(bird => {
    const card = document.createElement("div");
    card.className = "bird-card";

    const img = bird.image || "placeholder.jpg";
    const name = bird.name || "Unknown";
    const eng = bird.englishName || "";

    card.innerHTML = `
      <img src="${img}" class="bird-img">
      <h3 class="bird-name">${name} (${eng})</h3>
    `;

    // image click
    card.querySelector(".bird-img").onclick = (e) => {
      e.stopPropagation();
      showImage(img);
    };

    // name click
    card.querySelector(".bird-name").onclick = (e) => {
      e.stopPropagation();
      showDetails(bird);
    };

    container.appendChild(card);
  });
}

// 🖼️ Fullscreen image
function showImage(img) {
  imageViewer.innerHTML = `
    <img src="${img}" style="max-width:90%;max-height:90%;border-radius:12px;">
  `;
  imageViewer.style.display = "flex";
}

// 📖 Modal details
function showDetails(bird) {
  birdDetail.innerHTML = `
    <h2>${bird.name || ""} (${bird.englishName || ""})</h2>

    <p><b>वैज्ञानिक नाम:</b> ${bird.scientificName || "-"}</p>
    <p><b>विवरण:</b> ${bird.description || "-"}</p>
    <p><b>आवास:</b> ${bird.habitat || "-"}</p>
    <p><b>भोजन:</b> ${bird.diet || "-"}</p>
    <p><b>महाद्वीप:</b> ${bird.continent || "-"}</p>
    <p><b>क्षेत्र:</b> ${bird.region || "-"}</p>
    <p><b>स्थिति:</b> ${bird.status || "-"}</p>
  `;

  modal.style.display = "block";
}

// close modal
closeBtn.onclick = () => modal.style.display = "none";

window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};

// 🔍 Search (Hindi + English)
searchBox.addEventListener("input", () => {
  const val = searchBox.value.toLowerCase();

  const filtered = birdsData.filter(bird =>
    (bird.name || "").toLowerCase().includes(val) ||
    (bird.englishName || "").toLowerCase().includes(val) ||
    (bird.hindiName || "").includes(val)
  );

  displayBirds(filtered);
});

// 🌍 Filter
filter.addEventListener("change", () => {
  if (filter.value === "all") {
    displayBirds(birdsData);
  } else {
    displayBirds(
      birdsData.filter(b => (b.continent || "").includes(filter.value))
    );
  }
});

// 🌙 Dark mode
darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// 🎲 Random bird
function showRandomBird() {
  const r = birdsData[Math.floor(Math.random() * birdsData.length)];
  if (r) showDetails(r);
}

document.addEventListener("keydown", e => {
  if (e.key.toLowerCase() === "r") showRandomBird();
});