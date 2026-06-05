/* OPEN PANEL */
function openPanel(){
    document.getElementById("hybridPanel").style.display = "flex";
}

/* CLOSE PANEL */
function closePanel(){
    document.getElementById("hybridPanel").style.display = "none";
}

/* click outside to close */
window.addEventListener("click", function(e){
    let panel = document.getElementById("hybridPanel");
    if(e.target === panel){
        panel.style.display = "none";
    }
});