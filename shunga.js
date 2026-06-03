// =========================
// SHUNGA DYNASTY SCRIPT
// =========================

// Timeline Toggle
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

// =========================
// Scroll Reveal Animation
// =========================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".point, .ruler").forEach(item=>{
    observer.observe(item);
});

// =========================
// Back To Top Button
// =========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.style.position = "fixed";
topBtn.style.right = "20px";
topBtn.style.bottom = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.cursor = "pointer";
topBtn.style.fontSize = "20px";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";
topBtn.style.background = "#ff8c42";
topBtn.style.color = "#fff";

document.body.appendChild(topBtn);

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

// =========================
// Page Load Animation
// =========================

window.addEventListener("load",()=>{

    document.body.style.opacity = "0";

    setTimeout(()=>{
        document.body.style.transition = "opacity 0.8s";
        document.body.style.opacity = "1";
    },100);

});

// =========================
// Card Hover Sound Effect
// (Optional Placeholder)
// =========================

document.querySelectorAll(".point").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform = "translateX(8px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform = "translateX(0px)";

    });

});

// =========================
// Dynamic Year Counter
// =========================

console.log("⚔️ Shunga Dynasty Page Loaded Successfully");

// =========================
// End
// =========================