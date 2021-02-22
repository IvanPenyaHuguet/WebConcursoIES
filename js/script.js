const pcMinSize = 1200;
const tabletXLMinSize = 1024;

window.addEventListener("load", function () {

    // Shine effect on link buttons on hover, following mouse
    const aShiny = document.getElementsByTagName("a");
    let aShinyList = Array.prototype.slice.call(aShiny);
    aShinyList = aShinyList.filter( a => {
        return a.parentElement.nodeName == "MAIN";
    });
    aShinyList.forEach( (button, index) => {        
        button.addEventListener("mousemove", e => {
            const { x, y } = button.getBoundingClientRect();
            button.style.setProperty("--x", e.clientX - x);
            button.style.setProperty("--y", e.clientY - y);
        });
        showInfo(button, index);

    });

    // Click effect
    document.addEventListener('click',clickEffect);

    // Make background effect more consistent in mobile
    changeBackgroundAnimatinHeight ();
    window.addEventListener("resize", changeBackgroundAnimatinHeight);
    
});

function showInfo (hoverElement, index) {
    const info = ["Página oficial del centro IES Camp de Morvedre",
                "Página del IES Camp de Morvedre en la plataforma de la generalitat, mestra a casa",
                "Plataforma Moodle del centro",
                "Aula virtual para los alumnos de formación profesional semipresencial, conocido como Aules",
                "Información de ERASMUS en el IES Camp de Morvedre",
                "Actividades y programas en el IES camp de Morvedre"];
    const infoElement = document.querySelector("main > div");
   

    hoverElement.addEventListener("mouseenter", () => {
        if (window.innerWidth > pcMinSize) {
            infoElement.style.display = "block";        
            infoElement.children[1].textContent = info[index];
        }
    });
    hoverElement.addEventListener("mouseleave", () => {
        infoElement.style.display = "none";        
    });

}
function clickEffect(e){
    if (window.innerWidth < pcMinSize) {
        let d = document.createElement("div");
        d.className="clickEffect";
        d.style.top=e.clientY+"px";
        d.style.left=e.clientX+"px";
        document.body.appendChild(d);
        d.addEventListener('animationend',function(){
            d.parentElement.removeChild(d);
        }.bind(this));
    }
}
function changeBackgroundAnimatinHeight (){
    const documentHeight = document.body.scrollHeight;
    let d = document.getElementsByClassName("background-animation");    
    d[0].style.height = documentHeight+"px";
}

