import { arrPr } from "./assets.js"



//funzione di click alle freccine 
document.getElementById("dxPr").addEventListener("click", () => {
    changePr(1)
})
document.getElementById("sxPr").addEventListener("click", () => {
    changePr(-1)
})

let cPr = 0



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

