document.addEventListener("DOMContentLoaded", () => {

    const data = {
        basic: `
📐 TRIGONOMETRY BASICS

Trigonometry गणित की वह शाखा है जिसमें हम triangle के angles और sides के बीच संबंध (relationship) को study करते हैं।

📌 Main Ratios:

✔ sin θ = Opposite / Hypotenuse  
✔ cos θ = Adjacent / Hypotenuse  
✔ tan θ = Opposite / Adjacent  

📌 What it tells us:
यह हमें किसी भी triangle की side या angle को calculate करने में मदद करता है।

📌 Real Life Uses:
✔ Buildings की height निकालना  
✔ Mountains की distance  
✔ Physics problems  
✔ Engineering design
`,
        ratios: `
📘 TRIGONOMETRIC RATIOS

Trigonometry में 6 main ratios होते हैं जो triangle की sides के relation को दिखाते हैं।

📌 PRIMARY RATIOS:

✔ sin θ = Opposite / Hypotenuse  
✔ cos θ = Adjacent / Hypotenuse  
✔ tan θ = Opposite / Adjacent  

📌 RECIPROCAL RATIOS:

✔ cosec θ = 1 / sin θ  
✔ sec θ = 1 / cos θ  
✔ cot θ = 1 / tan θ  

📌 IMPORTANT POINTS:

✔ sin, cos, tan को primary ratios कहते हैं  
✔ cosec, sec, cot secondary ratios हैं  
✔ ये सभी right-angled triangle पर based होते हैं  

📌 USES:

✔ Heights & distances  
✔ Physics formulas  
✔ Engineering calculations  
✔ Real-life measurements
`,
        angles: `
📐 STANDARD ANGLES IN TRIGONOMETRY

Trigonometry में कुछ special angles होते हैं जिनके values बार-बार use होते हैं।

📌 IMPORTANT ANGLES:

✔ 0°  
✔ 30°  
✔ 45°  
✔ 60°  
✔ 90°  

📌 TRIG VALUES:

👉 sin 0° = 0  
👉 sin 30° = 1/2  
👉 sin 45° = 1/√2  
👉 sin 60° = √3/2  
👉 sin 90° = 1  

👉 cos 0° = 1  
👉 cos 30° = √3/2  
👉 cos 45° = 1/√2  
👉 cos 60° = 1/2  
👉 cos 90° = 0  

📌 WHY IMPORTANT?

✔ Exams में direct questions आते हैं  
✔ Calculations को fast बनाते हैं  
✔ Engineering & Physics में use होते हैं  
✔ Unit circle समझने में मदद करते हैं  
`,
        identities: `
📘 TRIGONOMETRIC IDENTITIES

Trigonometry में identities वो formulas होते हैं जो हमेशा true रहते हैं (हर θ के लिए)।

📌 BASIC IDENTITY:

✔ sin²θ + cos²θ = 1  

यह सबसे important identity है।

---

📌 PYTHAGOREAN TYPE IDENTITIES:

✔ 1 + tan²θ = sec²θ  
✔ 1 + cot²θ = cosec²θ  

---

📌 RATIO RELATIONS:

✔ tan θ = sin θ / cos θ  
✔ cot θ = cos θ / sin θ  

---

📌 WHY IMPORTANT?

✔ equations simplify करने में मदद करते हैं  
✔ complex problems easy बनाते हैं  
✔ exams में बहुत important होते हैं  
✔ higher mathematics का base हैं  
`,
        height: `
📏 HEIGHT & DISTANCE (ऊँचाई और दूरी)

Trigonometry का यह भाग real-life problems को solve करने में use होता है, जहाँ direct measurement possible नहीं होता।

---

📌 BASIC IDEA:

✔ Height = किसी object की vertical (ऊपर की) length  
✔ Distance = दो points के बीच की horizontal दूरी  

---

📌 MAIN CONCEPTS:

✔ Angle of Elevation → जब हम ऊपर किसी object को देखते हैं  
✔ Angle of Depression → जब हम नीचे किसी object को देखते हैं  

---

📌 REAL LIFE EXAMPLES:

✔ Building की height निकालना  
✔ Tree या tower की height calculate करना  
✔ Mountain की distance निकालना  
✔ Airplane की position track करना  

---

📌 USED FORMULA IDEAS:

✔ tan θ = Height / Distance  
✔ sin θ, cos θ का use भी होता है depending on situation  

---

📌 WHY IMPORTANT?

✔ Surveying में use होता है  
✔ Engineering & architecture में बहुत important  
✔ Competitive exams में frequent topic  
`
    };

    const buttons = document.querySelectorAll(".detail-btn");

    console.log("Buttons found:", buttons.length); // DEBUG

    buttons.forEach(btn => {

        btn.addEventListener("click", () => {

            const key = btn.getAttribute("data-topic");

            const overlay = document.createElement("div");
            overlay.className = "overlay";

            const panel = document.createElement("div");
            panel.className = "panel";

            panel.innerHTML = `
                <h2>📐 Details</h2>
                <p>${data[key] || "No data available"}</p>
                <button class="close-btn">❌ Close</button>
            `;

            overlay.appendChild(panel);
            document.body.appendChild(overlay);

            panel.querySelector(".close-btn").onclick = () => overlay.remove();

            overlay.onclick = (e) => {
                if (e.target === overlay) overlay.remove();
            };

        });

    });

});
function saveTopic(topic){
    localStorage.setItem("lastTopic", topic);
}

function loadTopic(){
    let t = localStorage.getItem("lastTopic");
    if(t){
        console.log("Last studied:", t);
    }
}

loadTopic();
function clickSound(){
    let audio = new Audio("https://www.soundjay.com/buttons/button-16.mp3");
    audio.play();
}
window.onload = function(){
    let last = localStorage.getItem("lastTopic");

    if(last){
        console.log("Resume topic:", last);
    }
}