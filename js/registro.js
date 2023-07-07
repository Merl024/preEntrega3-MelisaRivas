//Declarando variables
let agregarDato = document.getElementById("AgregarDato")
const registro = []

// Creando clase constructora para guardar los datos del registro de peso y altura, con sus fechas
class Registro{
    constructor(id, pesoI, alturaI, fechaI){
       this.id = id,
       this.pesoI = pesoI,
       this.alturaI = alturaI,
       this.fechaI = fechaI
    }
    // mostrarInfoRegistro()
}

function agregarDato(registro){
    let pesoI = document.getElementById("pesoI")
    let alturaI = document.getElementById("alturaI")
    let fechaI = document/getElementById("fechaI")

    const nuevoDato = new Registro(registro.length+1, pesoI.value, alturaI.value, fechaI.valueOf())
    registro.push(nuevoDato)
    localStorage.setItem("registro", JSON.stringify(registro))

    pesoI.value = ""
    alturaI.value = ""
    fechaI.valueOf() = ""

}
let nuevoDato = new Registro(registro.length+1, peso, altura, fecha)
registro.push(nuevoDato)
