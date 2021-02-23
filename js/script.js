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
    

    // Random objects animation
    randomBackgroundAnimation ();
});

function showInfo (hoverElement, index) {
    const info = ["Página oficial del centro IES Camp de Morvedre",
                "Página del IES Camp de Morvedre en la plataforma de la generalitat, mestre a casa",
                "Plataforma Moodle del centro",
                "Aula virtual para los alumnos de formación profesional semipresencial, conocida como Aules",
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

function randomBackgroundAnimation () {
    const items = [{
        name: "avion",
        url: "avionpapel.png",
        width:  "120px",
        height: "64px"
    },{
        name: "pincel",
        url: "pincel.png",
        width:  "80px",
        height: "35px"
    },{
        name: "atomo",
        url: "atomo.png",
        width:  "75px",
        height: "80px"
    },{
        name: "regla",
        url: "regla.png",
        width:  "60px",
        height: "19px"
    },{
        name: "adn",
        url: "adn.png",
        width:  "57px",
        height: "95px"
    },{
        name: "mochila",
        url: "mochila2.png",
        width:  "90px",
        height: "99px"
    },{
        name: "cerebro",
        url: "cerebro.png",
        width:  "111px",
        height: "108px"
    },{
        name: "ordenador",
        url: "ordenador.png",
        width:  "100px",
        height: "95px"
    },{
        name: "calculadora",
        url: "calculadora.png",
        width:  "86px",
        height: "104px"
    },{
        name: "libros",
        url: "libros.png",
        width:  "100px",
        height: "88px"
    },{
        name: "pintura",
        url: "pintura.png",
        width:  "98px",
        height: "95px"
    },{
        name: "globo",
        url: "globo.png",
        width:  "61px",
        height: "80px"
    }];

    var rand = 1;
    var int;
    
    int = window.setInterval(loopAnimation, rand);

    function loopAnimation (){
        let item = items[Math.floor(Math.random() * items.length)];
        let ul = document.getElementsByClassName("elements");
        let element = document.createElement("li");
        element.style.width = item.width;
        element.style.height = item.height;
        element.style.background = "rgba(0,0,0,0)"; // Quitar
        element.style.backgroundImage = "url(img/"+ item.url + ")";        
        const left = Math.floor(Math.random() * (90 - 10 + 1) ) + 10; // (Max - min +1) + min (todo incluido)
        element.style.left = left + "%";
        setTimeout(() => {            
            element.parentNode.removeChild(element);
        }, 25000);
        ul[0].appendChild(element);        
        rand = Math.round(Math.random()*(8000 - 1000 + 1) ) + 1000;        
        clearInterval(int);
        int = setInterval(loopAnimation, rand);
    }
}


