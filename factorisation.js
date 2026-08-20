let lastScroll = 0;
const header = document.querySelector(".topbar");

window.addEventListener("scroll", () => {

    const current = window.pageYOffset;

    if(current <= 10){
        header.classList.remove("hide");
        lastScroll = current;
        return;
    }

    if(current > lastScroll){
        // Scrolling Down
        header.classList.add("hide");
    }else{
        // Scrolling Up
        header.classList.remove("hide");
    }

    lastScroll = current;

});