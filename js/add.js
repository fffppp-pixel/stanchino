import { arrPr } from "./assets.js"

//link che portano alle altre pagine del sito dal main
const Link1 = document.getElementById("tab1")
const Link2 = document.getElementById("tab2")
const Link3 = document.getElementById("tab3")
const Link4 = document.getElementById("tab4")

//funzione di click alle freccine 
document.getElementById("dxPr").addEventListener("click", () => {
    changePr(1)
})
document.getElementById("sxPr").addEventListener("click", () => {
    changePr(-1)
})

let cPr = 0

Link1.addEventListener("mousedown", ()=> {
    window.open("./page1.html")
})
Link2.addEventListener("mousedown", ()=> {
    window.open("./page2.html")
})
Link3.addEventListener("mousedown", ()=> {
    window.open("./page3.html")
})
Link4.addEventListener("mousedown", ()=> {
    window.open("./page4.html")
})

//aggiornamento schermo proccessori con le freccine
function changePr(n) {
    //cambia e normalizza cPr
    cPr+=n
    if (cPr <= 0) {
        cPr = arrPr.length - 1
    } else if (cPr >= arrPr.length) {
        cPr = 0
    }

    //Metti info dentro al rtettangolo
    console.log(arrPr[cPr].name)
}

