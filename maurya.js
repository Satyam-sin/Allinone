/* =========================
   MAURYA.JS
========================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       SCROLL REVEAL
    ========================= */

    const cards = document.querySelectorAll(".card, .point, .timeline-item, .emperor-card");

    const revealElements = () => {

        cards.forEach(item => {

            const top = item.getBoundingClientRect().top;

            if(top < window.innerHeight - 100){

                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
            }

        });

    };

    cards.forEach(item => {

        item.style.opacity = "0";
        item.style.transform = "translateY(40px)";
        item.style.transition = "all 0.8s ease";

    });

    revealElements();

    window.addEventListener("scroll", revealElements);


    /* =========================
       BACK TO TOP BUTTON
    ========================= */

    const topBtn = document.createElement("button");

    topBtn.innerHTML = "⬆";

    topBtn.style.position = "fixed";
    topBtn.style.bottom = "20px";
    topBtn.style.right = "20px";
    topBtn.style.width = "50px";
    topBtn.style.height = "50px";
    topBtn.style.border = "none";
    topBtn.style.borderRadius = "50%";
    topBtn.style.cursor = "pointer";
    topBtn.style.fontSize = "22px";
    topBtn.style.display = "none";
    topBtn.style.zIndex = "999";
    topBtn.style.background = "gold";
    topBtn.style.color = "#111";
    topBtn.style.boxShadow = "0 0 15px gold";

    document.body.appendChild(topBtn);

    window.addEventListener("scroll", () => {

        if(window.scrollY > 300){
            topBtn.style.display = "block";
        }else{
            topBtn.style.display = "none";
        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });


    /* =========================
       HEADER GLOW EFFECT
    ========================= */

    const title = document.querySelector(".header h1");

    if(title){

        setInterval(() => {

            title.style.textShadow =
            `0 0 ${10 + Math.random()*20}px gold`;

        },1000);

    }


    /* =========================
       TIMELINE TOGGLE
    ========================= */

    const timelineBtn = document.getElementById("timelineBtn");
    const timelineBox = document.getElementById("timeline");

    if(timelineBtn && timelineBox){

        timelineBtn.addEventListener("click", () => {

            if(
                timelineBox.style.display === "none" ||
                timelineBox.style.display === ""
            ){

                timelineBox.style.display = "block";

                timelineBox.scrollIntoView({
                    behavior:"smooth"
                });

            }else{

                timelineBox.style.display = "none";

            }

        });

    }


    /* =========================
       EMPEROR CARD EFFECT
    ========================= */

    const emperorCards =
    document.querySelectorAll(".emperor-card");

    emperorCards.forEach(card => {

        card.addEventListener("mousemove",(e)=>{

            const rect =
            card.getBoundingClientRect();

            const x =
            e.clientX - rect.left;

            const y =
            e.clientY - rect.top;

            card.style.background =
            `radial-gradient(circle at ${x}px ${y}px,
            rgba(255,215,0,.25),
            rgba(255,255,255,.04))`;

        });

        card.addEventListener("mouseleave",()=>{

            card.style.background =
            "rgba(255,255,255,.05)";

        });

    });

});