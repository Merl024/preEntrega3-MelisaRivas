//variables
// libras a kg
let formLb = document.querySelector("#conLb")
let lbInput = document.querySelector("#lbInput")
let btnConvertirLb = document.querySelector("#btnConvertirLb")
let resultadoKg = document.querySelector("#resultadoKg")

// //Creando clases constructoras con los datos de las conversiones
// //seccion de masa
// class Masa{
//     constructor(){
//         this.libraKg = 2.2
//         this.toneladaL = 1000
//         this.libraG = 453.6
//     }
// }

//functions 
function lbAkg(){
    let conversionKg = lbInput.value / 2.2
    // console.log(conversionKg.toFixed(2))
    resultadoKg.innerHTML = 
    `<p class="m-2 inText">${lbInput.value}lb a kilogramos son ${conversionKg.toFixed(2)}kg</p>`
}

//EVENTOS:
btnConvertirLb.addEventListener("click", ()=>{
    lbAkg()
})