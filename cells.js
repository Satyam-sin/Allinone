/* =========================
   BIOLOGY WORLD CELLS.JS
   PART 1
========================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       LOADING SCREEN
    ========================= */

    const loader = document.createElement("div");

    loader.id = "loader";

    loader.innerHTML = `
        <div class="loader-content">
            <h1>🧬 Biology World</h1>
            <p>Loading Biology Universe...</p>
        </div>
    `;

    document.body.appendChild(loader);

    Object.assign(loader.style,{
        position:"fixed",
        top:"0",
        left:"0",
        width:"100%",
        height:"100%",
        background:"#071b2f",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        zIndex:"99999",
        color:"white",
        flexDirection:"column",
        fontFamily:"Arial"
    });

    setTimeout(()=>{

        loader.style.transition="1s";
        loader.style.opacity="0";

        setTimeout(()=>{
            loader.remove();
        },1000);

    },2000);

    /* =========================
       WELCOME MESSAGE
    ========================= */

    setTimeout(()=>{

        const welcome =
        document.createElement("div");

        welcome.innerHTML =
        "🧬 Welcome to Biology World";

        document.body.appendChild(welcome);

        Object.assign(welcome.style,{
            position:"fixed",
            top:"20px",
            right:"20px",
            background:"#00c853",
            color:"white",
            padding:"15px",
            borderRadius:"15px",
            zIndex:"9999",
            fontWeight:"bold",
            boxShadow:"0 0 15px rgba(0,0,0,0.4)"
        });

        setTimeout(()=>{
            welcome.remove();
        },3000);

    },2500);

    /* =========================
       PROGRESS BAR
    ========================= */

    const progress =
    document.createElement("div");

    progress.id = "progressBar";

    document.body.appendChild(progress);

    Object.assign(progress.style,{
        position:"fixed",
        top:"0",
        left:"0",
        height:"6px",
        width:"0%",
        zIndex:"99999",
        background:
        "linear-gradient(to right,#00e5ff,#00ff95)"
    });

    window.addEventListener("scroll",()=>{

        const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

        const current =
        (window.scrollY / total) * 100;

        progress.style.width =
        current + "%";

    });

    /* =========================
       BACK TO TOP BUTTON
    ========================= */

    const topBtn =
    document.createElement("button");

    topBtn.innerHTML = "⬆";

    document.body.appendChild(topBtn);

    Object.assign(topBtn.style,{
        position:"fixed",
        bottom:"25px",
        right:"25px",
        width:"55px",
        height:"55px",
        border:"none",
        borderRadius:"50%",
        fontSize:"22px",
        cursor:"pointer",
        background:"#00e5ff",
        color:"#000",
        display:"none",
        zIndex:"9999",
        fontWeight:"bold"
    });

    window.addEventListener("scroll",()=>{

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

        }
    );

    /* =========================
       FADE IN ANIMATION
    ========================= */

    const cards =
    document.querySelectorAll(
        ".card,.content-box"
    );

    const observer =
    new IntersectionObserver(
        entries=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.style.opacity="1";

                    entry.target.style.transform=
                    "translateY(0px)";

                }

            });

        },
        {
            threshold:0.15
        }
    );

    cards.forEach(card=>{

        card.style.opacity="0";

        card.style.transform=
        "translateY(50px)";

        card.style.transition=
        "all 0.8s ease";

        observer.observe(card);

    });

    /* =========================
       CARD HOVER EFFECT
    ========================= */

    document
    .querySelectorAll(".card")
    .forEach(card=>{

        card.addEventListener(
            "mouseenter",
            ()=>{

                card.style.transform =
                "translateY(-10px) scale(1.03)";

            }
        );

        card.addEventListener(
            "mouseleave",
            ()=>{

                card.style.transform =
                "translateY(0px) scale(1)";

            }
        );

    });

});
/* =========================
   BIOLOGY WORLD CELLS.JS
   PART 2
========================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       SEARCH BOX
    ========================= */

    const searchBox =
    document.createElement("input");

    searchBox.type = "text";

    searchBox.placeholder =
    "🔍 Search Biology Topic...";

    document.body.prepend(searchBox);

    Object.assign(searchBox.style,{
        position:"sticky",
        top:"10px",
        left:"10px",
        width:"90%",
        maxWidth:"500px",
        display:"block",
        margin:"15px auto",
        padding:"12px",
        borderRadius:"25px",
        border:"2px solid #00e5ff",
        fontSize:"16px",
        zIndex:"999"
    });

    searchBox.addEventListener("keyup",()=>{

        const value =
        searchBox.value.toLowerCase();

        document
        .querySelectorAll(".card")
        .forEach(card=>{

            if(
                card.innerText
                .toLowerCase()
                .includes(value)
            ){

                card.style.display =
                "block";

            }else{

                card.style.display =
                "none";

            }

        });

    });

    /* =========================
       TEXT TO SPEECH
    ========================= */

    const speakBtn =
    document.createElement("button");

    speakBtn.innerHTML =
    "🔊 Read Page";

    document.body.appendChild(
        speakBtn
    );

    Object.assign(speakBtn.style,{
        position:"fixed",
        left:"20px",
        bottom:"20px",
        padding:"12px 18px",
        border:"none",
        borderRadius:"30px",
        background:"#00c853",
        color:"white",
        fontWeight:"bold",
        cursor:"pointer",
        zIndex:"9999"
    });

    speakBtn.addEventListener(
        "click",
        ()=>{

            speechSynthesis.cancel();

            const text =
            document.body.innerText;

            const speech =
            new SpeechSynthesisUtterance(
                text
            );

            speech.rate = 1;
            speech.pitch = 1;

            speechSynthesis.speak(
                speech
            );

        }
    );

    /* =========================
       CLICK SOUND EFFECT
    ========================= */

    const audio =
    new Audio(
    "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3"
    );

    document
    .querySelectorAll(
        "button,a"
    )
    .forEach(item=>{

        item.addEventListener(
            "click",
            ()=>{

                audio.currentTime=0;
                audio.play();

            }
        );

    });

    /* =========================
       READING PROGRESS SAVE
    ========================= */

    window.addEventListener(
        "scroll",
        ()=>{

            localStorage.setItem(
                "biologyScroll",
                window.scrollY
            );

        }
    );

    const savedScroll =
    localStorage.getItem(
        "biologyScroll"
    );

    if(savedScroll){

        window.scrollTo(
            0,
            parseInt(savedScroll)
        );

    }

    /* =========================
       LAST VISITED SECTION
    ========================= */

    const sections =
    document.querySelectorAll(
        "section"
    );

    window.addEventListener(
        "scroll",
        ()=>{

            sections.forEach(
                section=>{

                    const top =
                    section.offsetTop;

                    const height =
                    section.offsetHeight;

                    if(
                        window.scrollY >=
                        top - 200 &&
                        window.scrollY <
                        top + height
                    ){

                        localStorage.setItem(
                            "lastSection",
                            section.className
                        );

                    }

                }
            );

        }
    );

    const lastSection =
    localStorage.getItem(
        "lastSection"
    );

    if(lastSection){

        console.log(
        "Last Section:",
        lastSection
        );

    }

    /* =========================
       QUICK SHORTCUT KEY
    ========================= */

    document.addEventListener(
        "keydown",
        (e)=>{

            if(e.key==="s"){

                searchBox.focus();

            }

        }
    );

});
/* =========================
   BIOLOGY WORLD CELLS.JS
   PART 3
========================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       RANDOM BIOLOGY FACTS
    ========================= */

    const facts = [

        "🧬 Human body contains about 37 trillion cells.",
        "⚡ Mitochondria are known as the Powerhouse of the Cell.",
        "🌿 Chloroplast performs photosynthesis.",
        "💀 Lysosomes are called Suicidal Bags.",
        "📦 Golgi Apparatus is the Post Office of the Cell.",
        "🔬 Robert Hooke discovered cells in 1665.",
        "🧪 DNA was discovered by Friedrich Miescher.",
        "🦠 Amoeba is a unicellular organism."

    ];

    const factBox =
    document.createElement("div");

    document.body.appendChild(factBox);

    Object.assign(factBox.style,{
        position:"fixed",
        top:"80px",
        right:"20px",
        maxWidth:"280px",
        padding:"15px",
        background:"#1565c0",
        color:"white",
        borderRadius:"15px",
        zIndex:"9999",
        fontWeight:"bold",
        display:"none",
        boxShadow:"0 0 15px rgba(0,0,0,0.4)"
    });

    function showFact(){

        const random =
        Math.floor(
            Math.random() *
            facts.length
        );

        factBox.innerHTML =
        "<b>🧬 Biology Fact</b><br><br>" +
        facts[random];

        factBox.style.display =
        "block";

        setTimeout(()=>{

            factBox.style.display =
            "none";

        },3000);

    }

    showFact();

    setInterval(
        showFact,
        15000
    );

    /* =========================
       FLOATING CELL ANIMATION
    ========================= */

    for(let i=0;i<15;i++){

        const cell =
        document.createElement("div");

        cell.innerHTML = "🦠";

        document.body.appendChild(
            cell
        );

        Object.assign(cell.style,{
            position:"fixed",
            left:
            Math.random()*100+"%",
            top:
            Math.random()*100+"%",
            fontSize:
            (20+Math.random()*25)
            +"px",
            opacity:"0.4",
            pointerEvents:"none",
            zIndex:"0"
        });

        let pos =
        parseFloat(
            cell.style.top
        );

        setInterval(()=>{

            pos -= 0.2;

            if(pos < -10){

                pos = 110;

            }

            cell.style.top =
            pos + "%";

        },50);

    }

    /* =========================
       PARTICLE BACKGROUND
    ========================= */

    const canvas =
    document.createElement("canvas");

    document.body.prepend(
        canvas
    );

    canvas.style.position =
    "fixed";

    canvas.style.top = "0";

    canvas.style.left = "0";

    canvas.style.width = "100%";

    canvas.style.height = "100%";

    canvas.style.zIndex = "-1";

    canvas.style.pointerEvents =
    "none";

    const ctx =
    canvas.getContext("2d");

    canvas.width =
    window.innerWidth;

    canvas.height =
    window.innerHeight;

    const particles = [];

    for(let i=0;i<70;i++){

        particles.push({

            x:
            Math.random()
            *canvas.width,

            y:
            Math.random()
            *canvas.height,

            r:
            Math.random()*3+1,

            dx:
            Math.random()-0.5,

            dy:
            Math.random()-0.5

        });

    }

    function animate(){

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        ctx.fillStyle =
        "rgba(255,255,255,0.4)";

        particles.forEach(p=>{

            ctx.beginPath();

            ctx.arc(
                p.x,
                p.y,
                p.r,
                0,
                Math.PI*2
            );

            ctx.fill();

            p.x += p.dx;
            p.y += p.dy;

            if(
                p.x < 0 ||
                p.x > canvas.width
            ) p.dx *= -1;

            if(
                p.y < 0 ||
                p.y > canvas.height
            ) p.dy *= -1;

        });

        requestAnimationFrame(
            animate
        );

    }

    animate();

    /* =========================
       NOTES DOWNLOAD BUTTON
    ========================= */

    const downloadBtn =
    document.createElement(
        "button"
    );

    downloadBtn.innerHTML =
    "📥 Download Notes";

    document.body.appendChild(
        downloadBtn
    );

    Object.assign(
        downloadBtn.style,
        {
            position:"fixed",
            right:"20px",
            bottom:"90px",
            padding:"12px 18px",
            background:"#ff9800",
            color:"white",
            border:"none",
            borderRadius:"30px",
            cursor:"pointer",
            fontWeight:"bold",
            zIndex:"9999"
        }
    );

    downloadBtn.addEventListener(
        "click",
        ()=>{

            const text =
            document.body.innerText;

            const blob =
            new Blob(
                [text],
                {
                    type:"text/plain"
                }
            );

            const a =
            document.createElement(
                "a"
            );

            a.href =
            URL.createObjectURL(
                blob
            );

            a.download =
            "Biology_Notes.txt";

            a.click();

        }
    );

    /* =========================
       VISITOR COUNTER
    ========================= */

    let visits =
    localStorage.getItem(
        "biologyVisits"
    );

    visits =
    visits
    ? Number(visits)+1
    : 1;

    localStorage.setItem(
        "biologyVisits",
        visits
    );

    const counter =
    document.createElement("div");

    counter.innerHTML =
    "👨‍🎓 Visits: " +
    visits;

    document.body.appendChild(
        counter
    );

    Object.assign(counter.style,{
        position:"fixed",
        left:"20px",
        top:"20px",
        background:"#7b1fa2",
        color:"white",
        padding:"10px 15px",
        borderRadius:"12px",
        zIndex:"9999",
        fontWeight:"bold"
    });

});