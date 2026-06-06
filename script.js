// ==========================
// 🎓 EDUVERSE SCRIPT
// ==========================

// 🔍 Live Search
const searchInput = document.querySelector(".search-box input");

if(searchInput){

    searchInput.addEventListener("keyup", function(){

        let value = this.value.toLowerCase();

        document.querySelectorAll(".card").forEach(card => {

            let text = card.innerText.toLowerCase();

            if(text.includes(value)){
                card.style.display = "block";
            }else{
                card.style.display = "none";
            }

        });

    });

}

// ⌨️ Enter = Open First Visible Card
if(searchInput){

    searchInput.addEventListener("keydown", function(e){

        if(e.key === "Enter"){

            let firstLink = document.querySelector(
                '.card[style*="block"] a, .card:not([style*="none"]) a'
            );

            if(firstLink){
                window.location.href = firstLink.href;
            }

        }

    });

}

// ✨ Scroll Animation
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

},{
    threshold:0.15
});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.8s ease";

    observer.observe(card);

});

// 📊 Local Visitor Counter
let visits = localStorage.getItem("eduverseVisits");

if(!visits){
    visits = 1;
}else{
    visits = Number(visits) + 1;
}

localStorage.setItem("eduverseVisits", visits);

console.log("Eduverse Visits:", visits);
!
// 🎉 Welcome Message
window.addEventListener("load", () => {

    setTimeout(() => {

        console.log("🎓 Welcome to Eduverse!");

    }, 500);

});

// ⬆️ Back To Top Button
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
topBtn.style.fontSize = "20px";
topBtn.style.display = "none";
topBtn.style.zIndex = "9999";

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

// 🌟 Dynamic Title Effect
const titles = [
    "🎓 Eduverse",
    "📚 Knowledge Universe",
    "🌍 Explore Knowledge",
    "🚀 Learn Every Day"
];

let index = 0;

setInterval(() => {

    document.title = titles[index];

    index++;

    if(index >= titles.length){
        index = 0;
    }

}, 3000);