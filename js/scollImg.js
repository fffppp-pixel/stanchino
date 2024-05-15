//<script src="JavaScript/background.js"></script> in IndexStatic


document.addEventListener("DOMContentLoaded", function() {

    const arrImg = ["img_new/processore-fiamme_720.png","./img_new/electronic-circuit_218381-27234.png", "img_new/processor-circuit-board-architecture-8nnhgi9vk8apk6d8.png", "img_new/thumb-1920-666388.png", "img_new/circuit-board-motherboard-digital-chip-tech-science-backgroundcreated-with-generative-ai-technology_132358-17180.png", "img_new/cpu.png"]
    //style="background-image: url(img/Team21-22.jpg);""

    const elm = document.getElementById("fotina")
    const elm2 = document.getElementById("fotina2")


    let currentImg1 = 0
    let currentImg2 = 2


    function changeImg() {
        elm.src  = `${arrImg[currentImg1]}`
        elm2.src  = `${arrImg[currentImg2]}`
        currentImg1 = (currentImg1 + 1) % arrImg.length;
        currentImg2 = (currentImg2 + 1) % arrImg.length;

    }

    // Initial update
    changeImg()
    // Update background image every 3 seconds
    setInterval(changeImg, 5000)

})