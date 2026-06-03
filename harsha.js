/* =========================
   HARSHA EMPIRE COMPLETE JS
========================= */

/* TIMELINE TOGGLE */
function toggleTimeline(){
    const timeline = document.getElementById("timeline");

    if(!timeline) return;

    timeline.classList.toggle("active");

    if(timeline.classList.contains("active")){
        timeline.scrollIntoView({
            behavior:"smooth",
            block:"start"
        });
    }
}

/* CLOSE TIMELINE WHEN CLICK OUTSIDE */
document.addEventListener("click",(e)=>{

    const timeline = document.getElementById("timeline");
    const btn = document.querySelector(".timeline-btn");

    if(!timeline || !btn) return;

    if(
        timeline.classList.contains("active") &&
        !timeline.contains(e.target) &&
        e.target !== btn
    ){
        timeline.classList.remove("active");
    }
});

/* SCROLL ANIMATION (simple reveal) */
const items = document.querySelectorAll(".point, .ruler");

window.addEventListener("scroll",()=>{

    items.forEach(el=>{

        const rect = el.getBoundingClientRect();

        if(rect.top < window.innerHeight - 80){
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });

});

/* INITIAL STYLE SET (so animation works properly) */
window.addEventListener("load",()=>{

    document.querySelectorAll(".point, .ruler").forEach(el=>{
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "0.6s ease";
    });
});

/* BACK TO TOP BUTTON */
const btn = document.createElement("button");

btn.innerHTML = "⬆";
btn.id = "topBtn";

document.body.appendChild(btn);

btn.style.cssText = `
position:fixed;
bottom:20px;
right:20px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:linear-gradient(#8fd3ff,#ffffff);
color:#111;
font-size:20px;
cursor:pointer;
display:none;
z-index:999;
box-shadow:0 0 20px rgba(120,200,255,.4);
`;

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){
        btn.style.display = "block";
    }else{
        btn.style.display = "none";
    }

});

btn.addEventListener("click",()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});