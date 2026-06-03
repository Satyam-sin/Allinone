// =========================
// KANVA DYNASTY SCRIPT
// =========================

// Timeline Toggle

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

// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealElements =
document.querySelectorAll(
".point, .ruler"
);

function revealOnScroll(){

    revealElements.forEach(element=>{

        const top =
        element.getBoundingClientRect().top;

        const windowHeight =
        window.innerHeight;

        if(top < windowHeight - 80){

            element.style.opacity="1";

            element.style.transform=
            "translateY(0)";
        }

    });

}

window.addEventListener(
"scroll",
revealOnScroll
);

window.addEventListener(
"load",
revealOnScroll
);

// =========================
// CARD HOVER EFFECT
// =========================

const points =
document.querySelectorAll(".point");

points.forEach(point=>{

    point.addEventListener(
    "mouseenter",
    ()=>{

        point.style.transition=
        "0.4s";

    });

});

// =========================
// PAGE LOAD EFFECT
// =========================

window.addEventListener(
"load",
()=>{

    document.body.style.opacity="0";

    setTimeout(()=>{

        document.body.style.transition=
        "opacity 0.8s ease";

        document.body.style.opacity="1";

    },100);

});

// =========================
// DYNAMIC PAGE TITLE EFFECT
// =========================

let originalTitle =
document.title;

window.addEventListener(
"blur",
()=>{

    document.title =
    "👑 Kanva Dynasty - Come Back";

});

window.addEventListener(
"focus",
()=>{

    document.title =
    originalTitle;

});

// =========================
// BACK TO TOP BUTTON
// =========================

const topBtn =
document.createElement("button");

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
background:linear-gradient(135deg,#10b981,#3b82f6);
color:white;
font-size:20px;
cursor:pointer;
display:none;
z-index:999;
box-shadow:0 0 15px rgba(16,185,129,.4);
`;

window.addEventListener(
"scroll",
()=>{

    if(window.scrollY > 300){

        topBtn.style.display =
        "block";

    }else{

        topBtn.style.display =
        "none";

    }

});

topBtn.addEventListener(
"click",
()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});