/* =========================
   DELHI SULTANATE JS
   PART 1 - CORE SYSTEM
========================= */

/* =========================
   TIMELINE TOGGLE
========================= */

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

/* =========================
   CLOSE TIMELINE OUTSIDE CLICK
========================= */

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

/* =========================
   SMOOTH POINT SCROLL
========================= */

function addPointClickEffect(){

    const points = document.querySelectorAll(".point");

    points.forEach(p=>{

        p.addEventListener("click",()=>{

            p.scrollIntoView({
                behavior:"smooth",
                block:"center"
            });

            p.style.transform = "scale(1.02)";

            setTimeout(()=>{
                p.style.transform = "scale(1)";
            },250);

        });

    });
}

/* RUN ON LOAD */
window.addEventListener("load",()=>{
    addPointClickEffect();
});
/* =========================
   DELHI SULTANATE JS
   PART 2 - ADVANCED FEATURES
========================= */

/* =========================
   KEYBOARD SHORTCUT (T = TIMELINE)
========================= */

document.addEventListener("keydown",(e)=>{

    if(e.key.toLowerCase() === "t"){

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
});

/* =========================
   SCROLL REVEAL EFFECT
========================= */

function scrollReveal(){

    const elements = document.querySelectorAll(".ruler, .point");

    elements.forEach(el=>{

        const rect = el.getBoundingClientRect();

        if(rect.top < window.innerHeight - 80){

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
}

/* INIT STYLE FOR ANIMATION */
window.addEventListener("load",()=>{

    document.querySelectorAll(".ruler, .point").forEach(el=>{
        el.style.opacity = "0";
        el.style.transform = "translateY(25px)";
        el.style.transition = "0.6s ease";
    });
});

/* SCROLL LISTENER */
window.addEventListener("scroll",scrollReveal);

/* =========================
   ACTIVE HIGHLIGHT ON SCROLL
========================= */

window.addEventListener("scroll",()=>{

    document.querySelectorAll(".ruler").forEach(el=>{

        const rect = el.getBoundingClientRect();

        if(rect.top < window.innerHeight/2){

            el.style.boxShadow = "0 0 20px rgba(255,140,0,.25)";

        }else{
            el.style.boxShadow = "none";
        }
    });

});

/* =========================
   BACK TO TOP BUTTON
========================= */

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";
topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:20px;
right:20px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:linear-gradient(#ffb347,#ff6a00);
color:#111;
font-size:20px;
cursor:pointer;
display:none;
z-index:999;
box-shadow:0 0 20px rgba(255,140,0,.4);
`;

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});
/* =========================
   DELHI SULTANATE JS
   PART 3 - ULTRA PREMIUM SYSTEM
========================= */

/* =========================
   PAGE LOADER (SMOOTH ENTRY)
========================= */

function createLoader(){

    const loader = document.createElement("div");

    loader.id = "pageLoader";

    loader.innerHTML = "⚔️ Loading Delhi Sultanate...";

    document.body.appendChild(loader);

    loader.style.cssText = `
        position:fixed;
        top:0;
        left:0;
        width:100%;
        height:100vh;
        background:#0b0b0b;
        display:flex;
        align-items:center;
        justify-content:center;
        color:#ffb347;
        font-size:1.5rem;
        z-index:9999;
        letter-spacing:1px;
    `;

    window.addEventListener("load",()=>{

        setTimeout(()=>{

            loader.style.opacity = "0";
            loader.style.transition = "0.6s ease";

            setTimeout(()=>{
                loader.remove();
            },600);

        },800);

    });
}

/* RUN LOADER */
createLoader();

/* =========================
   DYNASTY AUTO COLOR HIGHLIGHT
========================= */

function dynastyAutoHighlight(){

    const items = document.querySelectorAll(".ruler");

    items.forEach(item=>{

        const text = item.innerText.toLowerCase();

        if(text.includes("गुलाम") || text.includes("slave")){
            item.style.borderLeft = "5px solid #4fc3f7";
        }

        else if(text.includes("खिलजी") || text.includes("khilji")){
            item.style.borderLeft = "5px solid #ff4d4d";
        }

        else if(text.includes("तुगलक") || text.includes("tughlaq")){
            item.style.borderLeft = "5px solid #b388ff";
        }

        else if(text.includes("सैय्यद") || text.includes("sayyid")){
            item.style.borderLeft = "5px solid #cfd8dc";
        }

        else if(text.includes("लोदी") || text.includes("lodi")){
            item.style.borderLeft = "5px solid #66bb6a";
        }
    });
}

/* =========================
   SMART NAVIGATION HIGHLIGHT
========================= */

function smartNav(){

    const sections = document.querySelectorAll(".point, .ruler");

    window.addEventListener("scroll",()=>{

        let current = null;

        sections.forEach(sec=>{

            const rect = sec.getBoundingClientRect();

            if(rect.top < window.innerHeight/2){
                current = sec;
            }
        });

        if(current){

            current.style.transform = "scale(1.01)";

            setTimeout(()=>{
                current.style.transform = "scale(1)";
            },300);
        }

    });
}

/* =========================
   VISUAL "SOUND LIKE" EFFECT (NO AUDIO)
========================= */

function fakeSoundEffect(){

    const cards = document.querySelectorAll(".point, .ruler");

    cards.forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.style.boxShadow = "0 0 25px rgba(255,140,0,.25)";

            card.style.transform = "translateY(-3px)";
        });

        card.addEventListener("mouseleave",()=>{

            card.style.boxShadow = "none";
            card.style.transform = "translateY(0)";
        });

    });
}

/* =========================
   SMOOTH PAGE INITIALIZATION
========================= */

window.addEventListener("load",()=>{

    dynastyAutoHighlight();
    smartNav();
    fakeSoundEffect();

});