let arrPr = [{
    name: "nome",
    nCore: "2⁶³",
    speed: "brooom",
    arch: "villa al lago",
    threads: "tipo troppi bro"

}
,
{
    name: "nome2",
    nCore: "23⁶³",
    speed: "brooom2",
    arch: "villa al lago2",
    threads: "tipo troppi bro2"

}
,
{
    name: "nome2",
    nCore: "24⁶³",
    speed: "brooom3",
    arch: "villa al lago3",
    threads: "tipo troppi bro3"

}
]

const LDXB = document.getElementById("sxPL")
const LSXB = document.getElementById("dxPL")

//funzione di click alle freccine 
LDXB.addEventListener("mousedown", () => {
    changestat(1)
    alert("dx")
})
LSXB.addEventListener("mousedown", () => {
    changestat(1)
    alert("sx")
})






