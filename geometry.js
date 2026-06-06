document.addEventListener("DOMContentLoaded", () => {

    const details = {

        points: `
📘 POINTS & LINES

<div class="diagram">
    ●──────●──────●
    Point   Line   Point
</div>

📌 Point:
✔ सबसे basic element  
✔ no size (0D)

📌 Line:
✔ infinite points collection  
✔ no end  

📌 Line Segment:
✔ start + end point  

📌 Ray:
✔ one side infinite  

📌 Example:
Road, pencil line
        `,

        angles: `
📘 ANGLES

<div class="diagram">
      /
     /  90°
    ●──────
</div>

📌 Types:
✔ Acute (0°-90°)  
✔ Right (90°)  
✔ Obtuse (90°-180°)  

📌 Real Life:
Clock hands, door opening
        `,

        triangles: `
📘 TRIANGLES

<div class="diagram">
     /\\
    /  \\
   /____\\
</div>

📌 Types:
✔ Equilateral  
✔ Isosceles  
✔ Scalene  

📌 Rule:
Sum of angles = 180°
        `,

        circles: `
📘 CIRCLES

<div class="diagram">
     ◯
   (circle)
</div>

📌 Parts:
✔ Radius  
✔ Diameter  
✔ Chord  

📌 Formulas:
Area = πr²  
Circumference = 2πr
        `,

        quadgeo: `
📘 QUADRILATERALS

<div class="diagram">
   □  Rectangle/Square
</div>

📌 Types:
✔ Square  
✔ Rectangle  
✔ Rhombus  

📌 Rule:
Sum of angles = 360°
        `
    };

    const buttons = document.querySelectorAll(".detail-btn");

    buttons.forEach(btn => {

        btn.addEventListener("click", () => {

            const key = btn.getAttribute("data-topic");

            const overlay = document.createElement("div");
            overlay.classList.add("overlay");

            const panel = document.createElement("div");
            panel.classList.add("panel");

            panel.innerHTML = `
                <h2>📐 Geometry Visual Notes</h2>
                <p>${details[key] || "No details available"}</p>
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
const canvas = document.getElementById("geoCanvas");
const ctx = canvas.getContext("2d");

/* 🧹 Clear */
function clearCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

/* 🔺 Triangle Drawing Animation */
function drawTriangle(){

    clearCanvas();

    let step = 0;

    function animate(){
        if(step === 0){
            ctx.beginPath();
            ctx.moveTo(160,60);
        }

        if(step < 60){
            ctx.lineTo(160 + step, 200);
        }

        if(step >= 60 && step < 120){
            ctx.lineTo(280 - step, 200);
        }

        if(step >= 120 && step < 180){
            ctx.lineTo(160,60);
        }

        ctx.strokeStyle = "#0ea5e9";
        ctx.lineWidth = 3;
        ctx.stroke();

        step++;

        if(step < 180){
            requestAnimationFrame(animate);
        }
    }

    animate();
}

/* ⚪ Circle with live radius */
function drawCircle(){

    clearCanvas();

    let r = 0;

    function animate(){

        ctx.clearRect(0,0,canvas.width,canvas.height);

        ctx.beginPath();
        ctx.arc(160,160,r,0,Math.PI*2);

        ctx.strokeStyle = "#a78bfa";
        ctx.lineWidth = 3;
        ctx.stroke();

        if(r < 100){
            r += 2;
            requestAnimationFrame(animate);
        }
    }

    animate();
}

/* 📐 Rotating angle visual */
let angle = 0;

function rotateAngle(){

    clearCanvas();

    angle += 10;

    let rad = angle * Math.PI/180;

    ctx.beginPath();
    ctx.moveTo(160,160);
    ctx.lineTo(260,160);

    ctx.moveTo(160,160);
    ctx.lineTo(
        160 + 100 * Math.cos(rad),
        160 + 100 * Math.sin(rad)
    );

    ctx.strokeStyle = "#38bdf8";
    ctx.lineWidth = 3;
    ctx.stroke();

}

/* 🧲 Simple drag shape (interactive point) */
let dragging = false;

canvas.addEventListener("mousedown",(e)=>{
    dragging = true;
});

canvas.addEventListener("mouseup",()=>{
    dragging = false;
});

canvas.addEventListener("mousemove",(e)=>{

    if(!dragging) return;

    let rect = canvas.getBoundingClientRect();

    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    ctx.fillStyle = "#22d3ee";
    ctx.beginPath();
    ctx.arc(x,y,4,0,Math.PI*2);
    ctx.fill();
});