// defino el objeto que voy a utilizar mediante class
const precioPanComun = 90
const precioPanPapa = 100
const precioCarne = 150
const precioPollo = 200
const precioQueso = 90
const precioJamon = 70
const precioLechuga = 30
const precioTomate = 45
const precioPapasChicas = 120
const precioPapasMedianas = 150
const precioPapasGrandes = 180
const precioGaseosaChica = 200
const precioGaseosaMediana = 240
const precioGaseosaGrande = 260
const precioDescuento = 0.90


const btnInicio = document.getElementById("btnInicio")
const btnPanComun = document.getElementById("btnPanComun")
const btnPanPapa = document.getElementById("btnPanPapa")
const btnMedallonCarne = document.getElementById("btnMedallonCarne")
const btnMedallonPollo = document.getElementById("btnMedallonPollo")
const btnJamon = document.getElementById("btnJamon")
const btnQueso = document.getElementById("btnQueso")
const btnLechuga = document.getElementById("btnLechuga")
const btnTomate = document.getElementById("btnTomate")
const btnPapasChicas = document.getElementById("btnPapasChicas")
const btnPapasMedianas = document.getElementById("btnPapasMedianas")
const btnPapasGrandes = document.getElementById("btnPapasGrandes")
const btnCoca = document.getElementById("btnCoca")
const btnFanta = document.getElementById("btnFanta")
const btnSprite = document.getElementById("btnSprite")
const btnGaseosaChica = document.getElementById("btnGaseosaChica")
const btnGaseosaMediana = document.getElementById("btnGaseosaMediana")
const btnGaseosaGrande = document.getElementById("btnGaseosaGrande")
const btnCantMedallon1 = document.getElementById("btnCantMedallon1")
const btnCantMedallon2 = document.getElementById("btnCantMedallon2")
const btnCantMedallon3 = document.getElementById("btnCantMedallon3")
const panComunAbajo = document.getElementById("panComunAbajo")
const panPapaAbajo = document.getElementById("panPapaAbajo")
const panComunArriba = document.getElementById("panComunArriba")
const panPapaArriba = document.getElementById("panPapaArriba")
const superCombo = document.getElementById("superCombo")
const carne1 = document.getElementById("carne1")
const carne2 = document.getElementById("carne2")
const carne3 = document.getElementById("carne3")
const pollo1 = document.getElementById("pollo1")
const pollo2 = document.getElementById("pollo2")
const pollo3 = document.getElementById("pollo3")
const jamon = document.getElementById("jamon")
const queso = document.getElementById("queso")
const lechuga = document.getElementById("lechuga")
const tomate = document.getElementById("tomate")
const papasChicas = document.getElementById("papasChicas")
const papasMedianas = document.getElementById("papasMedianas")
const papasGrandes = document.getElementById("papasGrandes")
const cocaChica = document.getElementById("cocaChica")
const cocaMediana = document.getElementById("cocaMediana")
const cocaGrande = document.getElementById("cocaGrande")
const fantaChica = document.getElementById("fantaChica")
const fantaMediana = document.getElementById("fantaMediana")
const fantaGrande = document.getElementById("fantaGrande")
const spriteChica = document.getElementById("spriteChica")
const spriteMediana = document.getElementById("spriteMediana")
const spriteGrande = document.getElementById("spriteGrande")

const totalCombo = document.getElementById("totalCombo")
const selInicio = document.getElementById("selInicio")
const selPan = document.getElementById("selPan")
const selMedallon = document.getElementById("selMedallon")
const selJqlt = document.getElementById("selJqlt")
const selPapas = document.getElementById("selPapas")
const selGaseosa = document.getElementById("selGaseosa")
const selFinal = document.getElementById("selFinal")
const btnAgrega = document.getElementById("btnAgrega")
const btnPaga = document.getElementById("btnPaga")
const btnAtras = document.getElementById("btnAtras")
const btnSiguiente = document.getElementById("btnSiguiente")
const btnCancelar = document.getElementById("btnCancelar")
const tablaCombos = document.getElementById("tablaCombos")
const superTotalCombos = document.getElementById("superTotalCombos")

var contador = 0

class Combo {
    constructor(pan, precioPan, medallon, cantidadMedallon, stMedallon, precioMedallon, queso, jamon, lechuga, tomate, precioQueso, precioJamon, precioLechuga, precioTomate, sizePapas, papas, gaseosa, sizeGaseosa, precioGaseosa, descuento, precioDescuento, totalCombo) {

        this.pan = "comun";
        this.precioPan = 0;
        this.medallon = "carne";
        this.cantidadMedallon = 1;
        this.precioMedallon = 0;
        this.stMedallon = 0;
        this.queso = false;
        this.jamon = false;
        this.lechuga = false;
        this.tomate = false
        this.precioQueso = 0;
        this.precioJamon = 0;
        this.precioLechuga = 0;
        this.precioTomate = 0;
        this.sizePapas = "chicas";
        this.papas = 0;
        this.gaseosa = "Coca Cola";
        this.sizeGaseosa = "chica";
        this.precioGaseosa = 0;
        this.descuento = descuento;
        this.precioDescuento = precioDescuento;
        this.totalCombo = this.totalCombo;

    }

    elijePan() {

        btnPanComun.style.border = "none"
        btnPanPapa.style.border = "none"
        panComunAbajo.style.display = "none"
        panPapaAbajo.style.display = "none"
        superCombo.style.display = "none"

        if (this.pan == "comun") {
            btnPanComun.style.border = "solid 5px red"
            this.precioPan = precioPanComun
            panComunAbajo.style.display = "block"
        } else {
            btnPanPapa.style.border = "solid 5px red"
            this.precioPan = precioPanPapa
            panPapaAbajo.style.display = "block"
        }

        let tabla = document.getElementById("tablaPan");
        tabla.innerHTML = `<td> Pan  ${this.pan} </td> <td> $${this.precioPan} </td>`

        this.calculaTotal()

    }


    elijeMedallon() {
        btnMedallonPollo.style.border = "none"
        btnMedallonCarne.style.border = "none"
        btnCantMedallon1.style.border = "none"
        btnCantMedallon2.style.border = "none"
        btnCantMedallon3.style.border = "none"
        carne1.style.display = "none"
        carne2.style.display = "none"
        carne3.style.display = "none"
        pollo1.style.display = "none"
        pollo2.style.display = "none"
        pollo3.style.display = "none"

        if (this.medallon == "carne") {
            btnMedallonCarne.style.border = "solid 5px red"
            this.precioMedallon = precioCarne
        } else {
            btnMedallonPollo.style.border = "solid 5px red"
            this.precioMedallon = precioPollo
        }

        if (this.cantidadMedallon == 1) {
            btnCantMedallon1.style.border = "solid 5px red"
        } else if (this.cantidadMedallon == 2) {
            btnCantMedallon2.style.border = "solid 5px red"
        } else {
            btnCantMedallon3.style.border = "solid 5px red"
        }



        if (this.cantidadMedallon == 1) {
            let tabla = document.getElementById("tablaMedallon");
            tabla.innerHTML = `<tr><td>1 medallón de ${this.medallon}</td> <td> $${this.precioMedallon * this.cantidadMedallon} </td></tr>`
        } else {
            let tabla = document.getElementById("tablaMedallon");
            tabla.innerHTML = `<tr><td>${this.cantidadMedallon} medallones de ${this.medallon}</td> <td> $${this.precioMedallon * this.cantidadMedallon} </td></tr>`
        }

        if (this.medallon == "carne" && this.cantidadMedallon == 1) {

            carne1.style.display = "block"
        } else if (this.medallon == "carne" && this.cantidadMedallon == 2) {
            carne2.style.display = "block"
        } else if (this.medallon == "carne" && this.cantidadMedallon == 3) {
            carne3.style.display = "block"
        } else if (this.medallon == "pollo" && this.cantidadMedallon == 1) {
            pollo1.style.display = "block"
        } else if (this.medallon == "pollo" && this.cantidadMedallon == 2) {
            pollo2.style.display = "block"
        } else {
            pollo3.style.display = "block"
        }

        if (this.cantidadMedallon == 1) {
            queso.style.marginTop = "50px"
            jamon.style.marginTop = "50px"
            lechuga.style.marginTop = "50px"
            tomate.style.marginTop = "50px"
            panComunArriba.style.marginTop = "80px"
            panPapaArriba.style.marginTop = "80px"
        } else if (this.cantidadMedallon == 2) {
            queso.style.marginTop = "40px"
            jamon.style.marginTop = "40px"
            lechuga.style.marginTop = "40px"
            tomate.style.marginTop = "40px"
            panComunArriba.style.marginTop = "50px"
            panPapaArriba.style.marginTop = "50px"
        } else {
            queso.style.marginTop = "30px"
            jamon.style.marginTop = "30px"
            lechuga.style.marginTop = "30px"
            tomate.style.marginTop = "30px"
            panComunArriba.style.marginTop = "30px"
            panPapaArriba.style.marginTop = "30px"
        }

        this.stMedallon = this.cantidadMedallon * this.precioMedallon

        this.calculaTotal()

    }

    elijeQueso() {

        if (this.queso) {
            btnQueso.style.border = "solid 5px red"
            this.precioQueso = precioQueso
            let tabla = document.getElementById("tablaQueso");
            tabla.innerHTML = `<tr><td>Queso</td> <td> $${this.precioQueso} </td></tr>`
            queso.style.display = "block"
        } else {
            btnQueso.style.border = "none"
            let tabla = document.getElementById("tablaQueso");
            tabla.innerHTML = `<tr><td>Sin queso</td><td></td></tr>`
            this.precioQueso = 0
            queso.style.display = "none"
        }
        this.calculaTotal()
    }

    elijeJamon() {

        if (this.jamon) {
            btnJamon.style.border = "solid 5px red"
            this.precioJamon = precioJamon
            let tabla = document.getElementById("tablaJamon");
            tabla.innerHTML = `<tr><td>Jamon</td> <td> $${this.precioJamon} </td></tr>`
            jamon.style.display = "block"
        } else {
            btnJamon.style.border = "none"
            let tabla = document.getElementById("tablaJamon");
            tabla.innerHTML = `<tr><td>Sin Jamon</td><td></td></tr>`
            this.precioQueso = 0
            jamon.style.display = "none"
        }
        this.calculaTotal()
    }

    elijeLechuga() {

        if (this.lechuga) {
            btnLechuga.style.border = "solid 5px red"
            this.precioLechuga = precioLechuga
            let tabla = document.getElementById("tablaLechuga");
            tabla.innerHTML = `<tr><td>Lechuga</td> <td> $${this.precioLechuga} </td></tr>`
            lechuga.style.display = "block"
        } else {
            btnLechuga.style.border = "none"
            let tabla = document.getElementById("tablaLechuga");
            tabla.innerHTML = `<tr><td>Sin Lechuga</td><td></td></tr>`
            this.precioLechuga = 0
            lechuga.style.display = "none"
        }
        this.calculaTotal()
    }

    elijeTomate() {

        if (this.tomate) {
            btnTomate.style.border = "solid 5px red"
            this.precioTomate = precioTomate
            let tabla = document.getElementById("tablaTomate");
            tabla.innerHTML = `<tr><td>Tomate</td> <td> $${this.precioTomate} </td></tr>`
            tomate.style.display = "block"
        } else {
            btnTomate.style.border = "none"
            let tabla = document.getElementById("tablaTomate");
            tabla.innerHTML = `<tr><td>Sin Tomate</td><td></td></tr>`
            this.precioTomate = 0
            tomate.style.display = "none"
        }
        this.calculaTotal()
    }



    elijePapas() {

        btnPapasChicas.style.border = "none"
        btnPapasMedianas.style.border = "none"
        btnPapasGrandes.style.border = "none"
        papasChicas.style.display = "none"
        papasMedianas.style.display = "none"
        papasGrandes.style.display = "none"

        if (this.sizePapas == "chicas") {
            btnPapasChicas.style.border = "solid 5px red"
            this.papas = precioPapasChicas
            papasChicas.style.display = "block"

        } else if (this.sizePapas == "medianas") {
            btnPapasMedianas.style.border = "solid 5px red"
            this.papas = precioPapasMedianas
            papasMedianas.style.display = "block"
        } else {
            btnPapasGrandes.style.border = "solid 5px red"
            this.papas = precioPapasGrandes
            papasGrandes.style.display = "block"
        }

        let tabla = document.getElementById("tablaPapas");
        tabla.innerHTML = `<tr><td>Papas ${this.sizePapas}</td> <td> $${this.papas} </td></tr>`
        this.calculaTotal()
    }


    elijeGaseosa() {
console.log(contador)
        btnCoca.style.border = "none"
        btnFanta.style.border = "none"
        btnSprite.style.border = "none"
        btnGaseosaChica.style.border = "none"
        btnGaseosaMediana.style.border = "none"
        btnGaseosaGrande.style.border = "none"
        cocaChica.style.display = "none"
        cocaMediana.style.display = "none"
        cocaGrande.style.display = "none"
        fantaChica.style.display = "none"
        fantaMediana.style.display = "none"
        fantaGrande.style.display = "none"
        spriteChica.style.display = "none"
        spriteMediana.style.display = "none"
        spriteGrande.style.display = "none"

        if (this.gaseosa == "Coca Cola") {
            btnCoca.style.border = "solid 5px red"
            this.gaseosa = "Coca Cola"
        } else if (this.gaseosa == "Sprite") {
            btnSprite.style.border = "solid 5px red"
            this.gaseosa = "Sprite"
        } else {
            btnFanta.style.border = "solid 5px red"
            this.gaseosa = "Fanta"
        }


        if (this.sizeGaseosa == "chica") {
            btnGaseosaChica.style.border = "solid 5px red"
            this.precioGaseosa = precioGaseosaChica
        } else if (this.sizeGaseosa == "mediana") {
            btnGaseosaMediana.style.border = "solid 5px red"
            this.precioGaseosa = precioGaseosaMediana
        } else {
            btnGaseosaGrande.style.border = "solid 5px red"
            this.precioGaseosa = precioGaseosaGrande
        }

        

        if (this.gaseosa == "Coca Cola" && this.sizeGaseosa == "chica") {
            cocaChica.style.display = "block"
        } else if (this.gaseosa == "Coca Cola" && this.sizeGaseosa == "mediana") {
            cocaMediana.style.display = "block"
        } else if (this.gaseosa == "Coca Cola" && this.sizeGaseosa == "grande") {
            cocaGrande.style.display = "block"
        } else if (this.gaseosa == "Fanta" && this.sizeGaseosa == "chica") {
            fantaChica.style.display = "block"
        } else if (this.gaseosa == "Fanta" && this.sizeGaseosa == "mediana") {
            fantaMediana.style.display = "block"
        } else if (this.gaseosa == "Fanta" && this.sizeGaseosa == "grande") {
            fantaGrande.style.display = "block"
        } else if (this.gaseosa == "Sprite" && this.sizeGaseosa == "chica") {
            spriteChica.style.display = "block"
        } else if (this.gaseosa == "Sprite" && this.sizeGaseosa == "mediana") {
            spriteMediana.style.display = "block"
        }else{
            spriteGrande.style.display = "block"
        }

        let tabla = document.getElementById("tablaGaseosa");
        tabla.innerHTML = `<tr><td> ${this.gaseosa} ${this.sizeGaseosa}</td> <td> $${this.precioGaseosa} </td></tr>`
        this.calculaTotal()
    }




poneTapaPan(){
    


    if(this.pan == "comun" ){
        panComunArriba.style.display = "block"
    }else{
        panPapaArriba.style.display = "block" 
    }
}


    calculaTotal() {

        this.totalCombo = parseInt(this.precioPan + this.stMedallon + this.precioJamon + this.precioQueso + this.precioLechuga + this.precioTomate + this.papas + this.precioGaseosa)

        let tabla = document.getElementById("tablaTotal");
        tabla.innerHTML = `<tr><td id="tablaTotal">ESTE COMBO</td> <td>$${this.totalCombo} </td></tr>`


    }

    ocultaItemsPreview() {
        carne1.style.display = "none"
        carne2.style.display = "none"
        carne3.style.display = "none"
        pollo1.style.display = "none"
        pollo2.style.display = "none"
        pollo3.style.display = "none"
        papasChicas.style.display = "none"
        papasMedianas.style.display = "none"
        papasGrandes.style.display = "none"
        jamon.style.display = "none"
        queso.style.display = "none"
        lechuga.style.display = "none"
        tomate.style.display = "none"
        cocaChica.style.display = "none"
        cocaMediana.style.display = "none"
        cocaGrande.style.display = "none"
        fantaChica.style.display = "none"
        fantaMediana.style.display = "none"
        fantaGrande.style.display = "none"
        spriteChica.style.display = "none"
        spriteMediana.style.display = "none"
        spriteGrande.style.display = "none"
        panComunArriba.style.display = "none"
        panPapaArriba.style.display = "none"

}


}//ojo final del constructor


btnInicio.onclick = () => {
    combo = new Combo()
    ocultaTodo()
    selPan.style.display = "flex"
    muestraBotones()
    aumentaContador()
    console.log(contador)
    mueveSlide()
}

btnAtras.onclick = () => {
    disminuyeContador()
    mueveSlide()

}

btnSiguiente.onclick = () => {
    aumentaContador()
    mueveSlide()

}


function aumentaContador() {
    contador = contador + 1
}

function disminuyeContador() {
    contador = contador - 1
}

function mueveSlide() {
    if (contador == 0) {
        console.log(contador)
        ocultaTodo()
        selInicio.style.display = "flex"
        ocultaBotones()
        ocultaTapaPan()
        combo.elijePan()
    } else if (contador == 1) {
        console.log(contador)
        ocultaTodo()
        ocultaTapaPan()
        selPan.style.display = "flex"
        combo.elijePan()
    }
    else if (contador == 2) {
        console.log(contador)
        ocultaTodo()
        ocultaTapaPan()
        selMedallon.style.display = "flex"
        combo.elijeMedallon()

    } else if (contador == 3) {
        console.log(contador)
        ocultaTodo()
        ocultaTapaPan()
        selJqlt.style.display = "flex"
        combo.elijeQueso()
        combo.elijeJamon()
        combo.elijeLechuga()
        combo.elijeTomate()
    } else if (contador == 4) {
        console.log(contador)
        ocultaTodo()
        ocultaTapaPan()
        selPapas.style.display = "flex"
        combo.elijePapas()
    } else if (contador == 5) {
        console.log(contador)
        ocultaTodo()
        ocultaTapaPan()
        muestraBotones()
        selGaseosa.style.display = "flex"
        combo.elijeGaseosa()
    } else {
        console.log(contador)
        ocultaTodo()
        selFinal.style.display = "flex"
        btnSiguiente.style.display = "none"
        combo.poneTapaPan()
    }
    combo.calculaTotal()
}

let combo 

let pedido = []


function muestraBotones() {
    btnAtras.style.display = "flex"
    btnSiguiente.style.display = "flex"
}

function ocultaBotones() {
    btnAtras.style.display = "none"
    btnSiguiente.style.display = "none"
}

function ocultaTodo() {
    selInicio.style.display = "none"
    selPan.style.display = "none"
    selMedallon.style.display = "none"
    selJqlt.style.display = "none"
    selPapas.style.display = "none"
    selGaseosa.style.display = "none"
    selFinal.style.display = "none"
}

function ocultaTapaPan(){
    panComunArriba.style.display = "none"
panPapaArriba.style.display = "none" 
}

btnPanComun.onclick = () => {
    combo.pan = "comun"
    combo.precioPan = precioPanComun
    combo.elijePan()
}

btnPanPapa.onclick = () => {
    combo.pan = "de papa"
    combo.precioPan = precioPanPapa
    combo.elijePan()
}


btnMedallonCarne.onclick = () => {
    combo.medallon = "carne"
    combo.precioMedallon = precioCarne
    combo.elijeMedallon()
}

btnMedallonPollo.onclick = () => {
    combo.medallon = "pollo"
    combo.precioMedallon = precioPollo
    combo.elijeMedallon()
}

btnQueso.onclick = () => {
    if (combo.queso) {
        combo.queso = false
    } else {
        combo.queso = true
    }

    combo.elijeQueso()

}


btnJamon.onclick = () => {
    if (combo.jamon) {
        combo.jamon = false
    } else {
        combo.jamon = true
    }

    combo.elijeJamon()

}

btnLechuga.onclick = () => {
    if (combo.lechuga) {
        combo.lechuga = false
    } else {
        combo.lechuga = true
    }

    combo.elijeLechuga()

}

btnTomate.onclick = () => {
    if (combo.tomate) {
        combo.tomate = false
    } else {
        combo.tomate = true
    }

    combo.elijeTomate()

}



btnCantMedallon1.onclick = () => {

    combo.cantidadMedallon = 1
    combo.elijeMedallon()
}

btnCantMedallon2.onclick = () => {

    combo.cantidadMedallon = 2
    combo.elijeMedallon()
}

btnCantMedallon3.onclick = () => {

    combo.cantidadMedallon = 3
    combo.elijeMedallon()
}

btnPapasChicas.onclick = () => {
    combo.sizePapas = "chicas"
    combo.elijePapas()
}

btnPapasMedianas.onclick = () => {
    combo.sizePapas = "medianas"
    combo.elijePapas()
}

btnPapasGrandes.onclick = () => {
    combo.sizePapas = "grandes"
    combo.elijePapas()
}

btnCoca.onclick = () => {
    combo.gaseosa = "Coca Cola"
    combo.elijeGaseosa()
}

btnFanta.onclick = () => {
    combo.gaseosa = "Fanta"
    combo.elijeGaseosa()
}

btnSprite.onclick = () => {
    combo.gaseosa = "Sprite"
    combo.elijeGaseosa()
}

btnGaseosaChica.onclick = () => {
    combo.sizeGaseosa = "chica"
    combo.elijeGaseosa()
}

btnGaseosaMediana.onclick = () => {
    combo.sizeGaseosa = "mediana"
    combo.elijeGaseosa()
}

btnGaseosaGrande.onclick = () => {
    combo.sizeGaseosa = "grande"
    combo.elijeGaseosa()
}

btnCancelar.onclick = () => {
    btnCancelar.style.display = "none"
    contador = 6
    mueveSlide()
    tabla.innerHTML = 
   `<td id="tablaPan"></td>
    <tr id="tablaMedallon"></tr>
    <tr id="tablaQueso"></tr>
    <tr id="tablaJamon"></tr>
    <tr id="tablaLechuga"></tr>
    <tr id="tablaTomate"></tr>
    <tr id="tablaPapas"></tr>
    <tr id="tablaGaseosa"></tr>
    <tr id="tablaTotal"></tr>`

}

btnAgrega.onclick = () => {
    //alert("En una futura entrega, con este botón vamos a poder guardar el primer objeto creado en un array y mediante el constructor crear un nuevo objeto")
    
    pedido.push (combo)

    tablaCombos.innerHTML = ``
    
    pedido.forEach((combo, indice) =>{
        let acumulador
        acumulador = acumulador + combo.totalCombo
        tablaCombos.innerHTML += `
        <p>Combo ${indice + 1}: $${combo.totalCombo}</p>
        
        `
    } )


    var acumulador = 0
    for(var i = 0; i< pedido.length; i++){
acumulador += combo.totalCombo
   
//superTotalCombos.innerHTML += ``
    superTotalCombos.innerHTML = `<p>Total del pedido: $${acumulador}</p>` 
     }
    
    combo = new Combo()
    
    ocultaItemsPreview()
    btnSiguiente.style.display = "block"
    btnCancelar.style.display = "block"
    btnAtras.style.display = "none"
    contador = 1
    
    console.log (contador)
    mueveSlide()
    
    tabla.innerHTML = 
   `<td id="tablaPan"></td>
    <tr id="tablaMedallon"></tr>
    <tr id="tablaQueso"></tr>
    <tr id="tablaJamon"></tr>
    <tr id="tablaLechuga"></tr>
    <tr id="tablaTomate"></tr>
    <tr id="tablaPapas"></tr>
    <tr id="tablaGaseosa"></tr>
    <tr id="tablaTotal"></tr>`
    combo.elijePan()

    
}

btnPaga.onclick = () => {
   // alert("En una futura entrega, con este botón vamos a proceder a la página de pago, previo nos pregunte si somos jubilados o estudiantes para hacernos un descuento sobre el total, nos va a preguntar nuestro nombre y finalmente va a proceder a la página de pago")
pedido.push (combo)
contador = 0
console.log(contador)
mueveSlide()


/*if(localStorage.getItem('pedido')){
    alert("existe local storage")
    pedido = JSON.parse(localStorage.getItem('pedido'))
    local = JSON.parse(localStorage.getItem('pedido'))
    console.log(local)
}else{
    alert("no existe local storage")
    localStorage.setItem('pedido', JSON.stringify(pedido))
}

localStorage.setItem('pedido', JSON.stringify(pedido))*/


}

function ocultaItemsPreview() {
        carne1.style.display = "none"
        carne2.style.display = "none"
        carne3.style.display = "none"
        pollo1.style.display = "none"
        pollo2.style.display = "none"
        pollo3.style.display = "none"
        papasChicas.style.display = "none"
        papasMedianas.style.display = "none"
        papasGrandes.style.display = "none"
        jamon.style.display = "none"
        queso.style.display = "none"
        lechuga.style.display = "none"
        tomate.style.display = "none"
        cocaChica.style.display = "none"
        cocaMediana.style.display = "none"
        cocaGrande.style.display = "none"
        fantaChica.style.display = "none"
        fantaMediana.style.display = "none"
        fantaGrande.style.display = "none"
        spriteChica.style.display = "none"
        spriteMediana.style.display = "none"
        spriteGrande.style.display = "none"
        panComunArriba.style.display = "none"
        panPapaArriba.style.display = "none"

}