//link che portano alle altre pagine del sito dal main

const Link1 = document.getElementById("tab1")
const Link2 = document.getElementById("tab2")
const Link3 = document.getElementById("tab3")
const Link4 = document.getElementById("tab4")

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