//Declarando variables
let verReigstro = document.getElementById("verReigstro")
let ocultarReigstro = document.getElementById("ocultarReigstro")
let agregarDatoBtn = document.getElementById(`agregarDatoBtn`)
let datoDiv = document.getElementById("agregarDato")
let datosI = document.querySelector("#datosI")
let selectOrden = document.querySelector("#selectOrden")
let registro = []

//Seteando localStorage
localStorage.getItem("registro") ? (registro = JSON.parse(localStorage.getItem('registro'))) : (registro = [], localStorage.setItem('registro', registro))

// Creando clase constructora para guardar los datos del registro de peso y altura, con sus fechas
class Registro{
    constructor(id, pesoI, alturaI, fechaI){
       this.id = id,
       this.pesoI = pesoI,
       this.alturaI = alturaI,
       this.fechaI = fechaI
       this.imc = (this.pesoI / (this.alturaI * this.alturaI))
    }
}

//Functions
//Boton con la funcion para ver registro
function mostrarRegistro(array){
    datosI.innerHTML = ""
    for(dato of array){
        nuevoDatoDiv = document.createElement("div")
        nuevoDatoDiv.className = "col-3 col-xl-3"
        if(dato.imc < 18.5){
        nuevoDatoDiv.innerHTML = 
        `<div id="${dato.id}" class="card m-3 ">
            <div class="card-body">
                <h4 class="card-title" style = "text-align: center"> Este dato fue ingresado el ${dato.fechaI}.</h4>
                <p>Peso registrado: ${dato.pesoI}kg</p>
                <p>Altura registrado: ${dato.alturaI}m</p>
                <p class="${dato.imc} malPeso">Tu IMC es: ${dato.imc.toFixed(2)}. Eso es bajo el peso normal.</p>
                <button id="eliminar${dato.id}" class="btn btn-el">Eliminar</button>
            </div>
        </div>`}
        else if( 18.5 <= dato.imc <= 24.9){
        nuevoDatoDiv.innerHTML = 
        `<div id="${dato.id}" class="card m-3 ">
            <div class="card-body">
                <h4 class="card-title" style = "text-align: center">Este dato fue ingresado el ${dato.fechaI}.</h4>
                <p>Peso registrado: ${dato.pesoI}kg</p>
                <p>Peso registrado: ${dato.alturaI}m</p>                
                <p class="${dato.imc} buenPeso">Tu IMC es: ${dato.imc.toFixed(2)}. Eso es un peso normal.</p>
                <button id="eliminar${dato.id}" class="btn btn-el">Eliminar</button>
            </div>
        </div>`
        }
        if( dato.imc >= 25){
        nuevoDatoDiv.innerHTML = 
        `<div id="${dato.id}" class="card m-3 ">
            <div class="card-body">
                <h4 class="card-title" style = "text-align: center">Este dato fue ingresado el ${dato.fechaI}.</h4>
                <p>Pesoregistrado: ${dato.pesoI}kg</p>
                <p>Altura registrado: ${dato.alturaI}m</p>
                <p class="${dato.imc} malPeso">Tu IMC es: ${dato.imc.toFixed(2)}. Eso va por arriba del peso normal </p>
                <button id="eliminar${dato.id}" class="btn btn-el">Eliminar</button>
            </div>
        </div>`
        }
        // else if(dato.imc == NaN){
        //     nuevoDatoDiv.innerHTML = `No hay datos ingresados`
        // }
        datosI.appendChild(nuevoDatoDiv)
        
        agregarDatoBtn.addEventListener("click", () => {
            agregarDato(dato)
        })
    }
}

//Agregando y capturando los valores de los inputs de form
function agregarDato(registro){
    let pesoI = document.getElementById("pesoI")
    let alturaI = document.getElementById("alturaI")
    let fechaI = document.getElementById("fechaI")

    const nuevoDato = new Registro(registro.length+1, pesoI.value, alturaI.value, fechaI.value)
    registro.push(nuevoDato)
    localStorage.setItem("registro", JSON.stringify(registro))
    
    pesoI.value = ""
    alturaI.value = ""
    fechaI.value = ""
}

//Funcion para poder eliminar dato
// function eliminarDato(array){
//     array.forEach((dato) => {
//         document.querySelector(`#eliminar${dato.id}`).addEventListener("click", ()=>{
//             let elDato = document.querySelector(`dato${dato.id}`)
//             elDato.remove()

//             let datoEliminar = array.find((registro) => registro.id == dato.id)
//             console.log(datoEliminar)
//             //buscar indice
//             let posicion = array.indexOf(datoEliminar)
//             array.splice(posicion,1)
//             console.log(posicion)
//             //setear storage
//             localStorage.setItem("registro", JSON.stringify(array))


//         })
//     })
// }

//Agregando funcion para poder ordenar
function ordenarMenorMayor(array){
    const menorMayor = [].concat(array)
    menorMayor.sort((a,b) => a.pesoI - b.pesoI)
    mostrarRegistro(menorMayor)
}
  
function ordenarMayorMenor(array){
    const mayorMenor = [].concat(array)
    mayorMenor.sort((a ,b) => b.pesoI - a.pesoI)
    mostrarRegistro(mayorMenor)
}

//EVENTOS:
agregarDatoBtn.addEventListener("click", (event) => {
    event.preventDefault()
    agregarDato(registro) 
})

verReigstro.addEventListener("click", () => {
    mostrarRegistro(registro)
})

//Boton con la funcion de ocultar registro
ocultarReigstro.addEventListener("click", () => {
    //reiniciando el div
    datosI.innerHTML = ""
})

selectOrden.addEventListener("change", () => {
    switch(selectOrden.value){
       case "1":
          ordenarMayorMenor(registro)
       break
       case "2":
          ordenarMenorMayor(registro)
       break
       default:
          mostrarRegistro(registro)
       break
    }
})
 

// eliminar.addEventListener("click", ()=>{
//     eliminarDato(registro)
// })