/* =========================
   KUSHAN EMPIRE - SILK ROAD JS
========================= */

/* =========================
   TIMELINE TOGGLE
========================= */

function toggleTimeline(){

    const timeline =
    document.getElementById("timeline");

    timeline.classList.toggle("active");

    if(timeline.classList.contains("active")){

        timeline.scrollIntoView({
            behavior:"smooth",
            block:"start"
        });
    }
}

/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const elements =
document.querySelectorAll(".point, .ruler");

function reveal(){

    const windowHeight =
    window.innerHeight;

    elements.forEach(el=>{

        const top =
        el.getBoundingClientRect().top;

        if(top < windowHeight - 80){

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

/* =========================
   PAGE LOAD FADE EFFECT
========================= */

window.addEventListener("load", ()=>{

    document.body.style.opacity = "0";

    setTimeout(()=>{

        document.body.style.transition = "opacity 0.8s ease";
        document.body.style.opacity = "1";

    }, 100);
});

/* =========================
   TAB TITLE EFFECT
========================= */

const originalTitle = document.title;

window.addEventListener("blur", ()=>{

    document.title = "🏺 Come back to Silk Road";

});

window.addEventListener("focus", ()=>{

    document.title = originalTitle;

});

/* =========================
   BACK TO TOP BUTTON
========================= */

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
background:linear-gradient(135deg,#c084fc,#60a5fa,#fbbf24);
color:#0b0b0f;
font-size:20px;
cursor:pointer;
display:none;
z-index:999;
box-shadow:0 0 20px rgba(168,85,247,.4);
`;

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 300){
        btn.style.display = "block";
    }else{
        btn.style.display = "none";
    }

});

btn.addEventListener("click", ()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

/* =========================
   EXTRA INTERACTION EFFECT
========================= */

document.querySelectorAll(".point").forEach(card=>{

    card.addEventListener("mouseenter", ()=>{

        card.style.transition = "0.4s";
    });

});