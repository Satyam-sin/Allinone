/* =========================
   GUPTA EMPIRE JS
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
   SCROLL ANIMATION
========================= */

const items =
document.querySelectorAll(".point, .ruler");

function revealOnScroll(){

    const trigger =
    window.innerHeight - 80;

    items.forEach(el=>{

        const top =
        el.getBoundingClientRect().top;

        if(top < trigger){

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* =========================
   PAGE FADE IN EFFECT
========================= */

window.addEventListener("load", ()=>{

    document.body.style.opacity = "0";

    setTimeout(()=>{

        document.body.style.transition = "opacity 0.8s ease";
        document.body.style.opacity = "1";

    }, 100);
});

/* =========================
   TAB TITLE CHANGE
========================= */

const originalTitle = document.title;

window.addEventListener("blur", ()=>{

    document.title = "👑 Come back to Golden Age";

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
background:linear-gradient(135deg,#ffd700,#ffffff,#f5d76e);
color:#111;
font-size:20px;
cursor:pointer;
display:none;
z-index:999;
box-shadow:0 0 20px rgba(255,215,0,.4);
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
   SMALL HOVER FIX
========================= */

document.querySelectorAll(".point").forEach(card=>{

    card.addEventListener("mouseenter", ()=>{

        card.style.transition = "0.3s";
    });

});