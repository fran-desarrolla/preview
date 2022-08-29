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
const previewImg = document.getElementById("previewImg")
const previewPedido = document.getElementById("previewPedido")
const selector = document.getElementById("selector")
const cuenta = document.getElementById("cuenta")
const btnPagar = document.getElementById("btnPagar")
const contenedorGeneral = document.getElementById("contenedorGeneral")
const totalTablaPedido = document.getElementById("totalTablaPedido")
const bandeja = document.getElementById("bandeja")


var acumulador


var contador = 0

class Combo {
    constructor(pan, precioPan, medallon, cantidadMedallon, stMedallon, precioMedallon, queso, jamon, lechuga, tomate, precioQueso, precioJamon, precioLechuga, precioTomate, sizePapas, papas, gaseosa, sizeGaseosa, precioGaseosa, descuento, precioDescuento, totalCombo) {

        this.pan = "comun";
        this.precioPan = 0;
        this.medallon = "carne";
        this.cantidadMedallon = 1;
        this.precioMedallon = 0;
        this.stMedallon = 0;
        this.queso = "Sin queso";
        this.jamon = "Sin jamon";
        this.lechuga = "Sin lechuga";
        this.tomate = "Sin tomate";
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
        bandeja.style.display = "flex"

        if (this.pan == "comun") {
            btnPanComun.style.border = "solid 5px yellow"
            this.precioPan = precioPanComun
            panComunAbajo.style.display = "block"
        } else {
            btnPanPapa.style.border = "solid 5px yellow"
            this.precioPan = precioPanPapa
            panPapaAbajo.style.display = "block"
        }

        let tabla = document.getElementById("tablaPan");
        tabla.innerHTML = `<tr><td> Pan  ${this.pan} </td> <td> $${this.precioPan} </td></tr>`

        this.calculaTotal()
        sumaItems()
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
        bandeja.style.display = "flex"

        if (this.medallon == "carne") {
            btnMedallonCarne.style.border = "solid 5px yellow"
            this.precioMedallon = precioCarne
        } else {
            btnMedallonPollo.style.border = "solid 5px yellow"
            this.precioMedallon = precioPollo
        }

        if (this.cantidadMedallon == 1) {
            btnCantMedallon1.style.border = "solid 5px yellow"
        } else if (this.cantidadMedallon == 2) {
            btnCantMedallon2.style.border = "solid 5px yellow"
        } else {
            btnCantMedallon3.style.border = "solid 5px yellow"
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

        if (this.queso == "Queso") {
            btnQueso.style.border = "solid 5px yellow"
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

        if (this.jamon == "Jamon") {
            btnJamon.style.border = "solid 5px yellow"
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

        if (this.lechuga == "Lechuga") {
            btnLechuga.style.border = "solid 5px yellow"
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

        if (this.tomate == "Tomate") {
            btnTomate.style.border = "solid 5px yellow"
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
        bandeja.style.display = "flex"

        if (this.sizePapas == "chicas") {
            btnPapasChicas.style.border = "solid 5px yellow"
            this.papas = precioPapasChicas
            papasChicas.style.display = "block"

        } else if (this.sizePapas == "medianas") {
            btnPapasMedianas.style.border = "solid 5px yellow"
            this.papas = precioPapasMedianas
            papasMedianas.style.display = "block"
        } else {
            btnPapasGrandes.style.border = "solid 5px yellow"
            this.papas = precioPapasGrandes
            papasGrandes.style.display = "block"
        }

        let tabla = document.getElementById("tablaPapas");
        tabla.innerHTML = `<tr><td>Papas ${this.sizePapas}</td> <td> $${this.papas} </td></tr>`
        this.calculaTotal()
    }


    elijeGaseosa() {

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
        bandeja.style.display = "flex"

        if (this.gaseosa == "Coca Cola") {
            btnCoca.style.border = "solid 5px yellow"
            this.gaseosa = "Coca Cola"
        } else if (this.gaseosa == "Sprite") {
            btnSprite.style.border = "solid 5px yellow"
            this.gaseosa = "Sprite"
        } else {
            btnFanta.style.border = "solid 5px yellow"
            this.gaseosa = "Fanta"
        }


        if (this.sizeGaseosa == "chica") {
            btnGaseosaChica.style.border = "solid 5px yellow"
            this.precioGaseosa = precioGaseosaChica
        } else if (this.sizeGaseosa == "mediana") {
            btnGaseosaMediana.style.border = "solid 5px yellow"
            this.precioGaseosa = precioGaseosaMediana
        } else {
            btnGaseosaGrande.style.border = "solid 5px yellow"
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
        } else {
            spriteGrande.style.display = "block"
        }

        let tabla = document.getElementById("tablaGaseosa");
        tabla.innerHTML = `<tr><td> ${this.gaseosa} ${this.sizeGaseosa}</td> <td> $${this.precioGaseosa} </td></tr>`
        this.calculaTotal()
    }




    poneTapaPan() {


        this.pan == "comun" ? panComunArriba.style.display = "block" : panPapaArriba.style.display = "block"
    }


    calculaTotal() {

        this.totalCombo = parseInt(this.precioPan + this.stMedallon + this.precioJamon + this.precioQueso + this.precioLechuga + this.precioTomate + this.papas + this.precioGaseosa)

        let tabla = document.getElementById("tablaTotal");
        tabla.innerHTML = `<tr class="wrap"><td id="tablaTotal">TOTAL COMBO</td> <td id="valorTotalCombo">$${this.totalCombo} </td></tr>`


        sumaItems()


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
    contador++
}

function disminuyeContador() {
    contador--
}



function mueveSlide() {
    if (contador == 0) {

        ocultaTodo()
        selInicio.style.display = "flex"
        ocultaBotones()
        ocultaTapaPan()
        ocultaCuenta()
        combo.elijePan()
        sumaItems()

    } else if (contador == 1) {

        ocultaTodo()
        ocultaTapaPan()
        selPan.style.display = "flex"
        combo.elijePan()
        muestraBotones()

    }
    else if (contador == 2) {

        ocultaTodo()
        ocultaTapaPan()
        selMedallon.style.display = "flex"
        combo.elijeMedallon()
        muestraBotones()


    } else if (contador == 3) {

        ocultaTodo()
        ocultaTapaPan()
        selJqlt.style.display = "flex"
        combo.elijeQueso()
        combo.elijeJamon()
        combo.elijeLechuga()
        combo.elijeTomate()
        muestraBotones()
    } else if (contador == 4) {

        ocultaTodo()
        ocultaTapaPan()
        selPapas.style.display = "flex"
        combo.elijePapas()
        muestraBotones()
    } else if (contador == 5) {

        ocultaTodo()
        ocultaTapaPan()
        muestraBotones()
        selGaseosa.style.display = "flex"
        combo.elijeGaseosa()
    } else {

        ocultaTodo()
        selGaseosa.style.display = "flex"
        combo.poneTapaPan()
        comboArmado()
    }
    combo.calculaTotal()
}

let combo
let pedido = []
combo = new Combo()

Swal.fire({
    title: 'Bienvenidos a Súper Burger',
    text: "Hacé click en OK para iniciar tu pedido",
   }).then((result) => {
   
    if (result.isConfirmed) {

    } else if (result.isDenied) {

    }
})


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

function ocultaTapaPan() {
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
    if (combo.queso == "Queso") {
        combo.queso = "Sin queso"
        combo.precioQueso = 0
    } else {
        combo.queso = "Queso"
    }

    combo.elijeQueso()

}

btnJamon.onclick = () => {
    if (combo.jamon == "Jamon") {
        combo.jamon = "Sin jamon"
        combo.precioJamon = 0
    } else {
        combo.jamon = "Jamon"
    }

    combo.elijeJamon()

}

btnLechuga.onclick = () => {
    if (combo.lechuga == "Lechuga") {
        combo.lechuga = "Sin lechuga"
        combo.precioLechuga = 0
    } else {
        combo.lechuga = "Lechuga"
    }

    combo.elijeLechuga()

}

btnTomate.onclick = () => {
    if (combo.tomate == "Tomate") {
        combo.tomate = "Sin tomate"
        combo.precioTomate = 0
    } else {
        combo.tomate = "Tomate"
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


btnPagar.onclick = () => {



    Swal.fire({
        title: 'Gracias por hacer tu pedido',
        text: "A partir de acá el sistema se comunicaría con la base de datos. En este caso va a guardar el array en el LocalStorage",
        showCancelButton: true,
        
    }).then((result) => {
       
        if (result.isConfirmed) {
            // guarda el array pedidos en el localstorage
            localStorage.setItem("pedido", JSON.stringify(pedido))
            location.reload()
        } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
        }
    })



}


function pagar() {
    //agrega el último combo al pedido
    pedido.push(combo)
    

    //oculta las imagenes del combo y muestra el pedido
    previewImg.style.display = "none"
    selector.style.display = "none"
    cuenta.style.display = "none"
    previewPedido.style.display = "flex"
    contenedorGeneral.style.display = "none"

    //traer los datos del combo y con un foreach mostrarlos en tablas
        pedido.forEach((combo, indice) => {
        //tablaPedido.innerHTML = ``
        tablaPedido.innerHTML += `
    <div id="combo${indice}" class="ticketPedido">
    <h2>Combo ${indice + 1}</h2>
    <p>Pan ${combo.pan}: $${combo.precioPan}</p>
    <p>${combo.cantidadMedallon} medallón/es de ${combo.medallon}: $${combo.cantidadMedallon * combo.precioMedallon}</p>
    <p>${combo.queso}: $${combo.precioQueso}</p>
    <p>${combo.jamon}: $${combo.precioJamon}</p>
    <p>${combo.lechuga}: $${combo.precioLechuga}</p>
    <p>${combo.tomate}: $${combo.precioTomate}</p>
    <p>Papas ${combo.sizePapas}: $${combo.papas}</p>
    <p>${combo.gaseosa} ${combo.sizeGaseosa}: $${combo.precioGaseosa}</p>
    
    <h3>Total: $${combo.totalCombo}</h3>
    <img class="bin" src="img/trash-fill.svg">
    
    <div>
    
    `
   })


  
acumulador = 0

pedido.forEach((combo, indice) => {
    acumulador = acumulador + combo.totalCombo
    totalTablaPedido.innerHTML = ``
    totalTablaPedido.innerHTML += `
<h3>Total a pagar: $${acumulador}</h3>`


})



// asigna a los botones eliminar el evento eliminar on click
     pedido.forEach((combo, indice) => {
        let tarjetaCombo = document.getElementById(`combo${indice}`)
        tarjetaCombo.children[10].addEventListener('click', () => {
        tarjetaCombo.remove() //elimina del dom
        pedido.splice(indice,1,"") //elimina del array
        // Aca tengo una duda grande. Tengo que eliminar mis objetos del array y del dom (no del localstorage porque aun no los mando ahi).
        //con el metodo remove() no tuve problemas ya que lo elimina sin problemas. En cambio cuando los quiero eliminar con .splice, dependiendo del orden en que los elimino funciona o no. Esto sucede supongo que porque cuando elimino a uno de los elementos se reasignan los indices, por lo tanto luego de borrar el primero todo cambia y ya no funciona. Para resolverlo hice una pequeña trampa y en el metodo splice agregué un tercer parámetro que lo que hace es en vez de borrarlo lo guarda como si estuviera vacío. Entiendo que tiene que haber un modo de resolverlo pero la verdad que no pude hacerlo. 
        acumulador = acumulador - combo.totalCombo
        totalTablaPedido.innerHTML = ``
        totalTablaPedido.innerHTML += `
    <h3>Total a pagar: $${acumulador}</h3>`

    if(acumulador == 0){
        location.reload()
    }


//alerta tostofy
        Toastify({
            text: "Eliminaste un combo",
            duration: 3000,
            newWindow: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
           }).showToast();
          
        })
    })





}





////////////////////////////////////




/////////////////////////////////////////
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

function comboArmado() {
    Swal.fire({
        title: 'Ya armaste un nuevo combo!',
        text: "¿Armamos otro o vamos a pagar?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Otro...',
        denyButtonText: `Vamos a pagar`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            creaCombo()

        } else if (result.isDenied) {
            pagar()


        }
    })
}




function creaCombo() {
    pedido.push(combo)
    tablaCombos.innerHTML = ``

    pedido.forEach((combo, indice) => {
        var acumulador
        acumulador = acumulador + combo.totalCombo
        tablaCombos.innerHTML += `
        <p>Combo ${indice + 1}: $${combo.totalCombo}</p>
        
        `

    })


    acumulador = 0
    for (var i = 0; i < pedido.length; i++) {

        acumulador += combo.totalCombo

        //superTotalCombos.innerHTML += ``
        superTotalCombos.innerHTML = `<p>Totales pedido: $${acumulador}</p>`

    }


    combo = new Combo()
    combo.elijePan()

    sumaItems()

    ocultaItemsPreview()
    btnSiguiente.style.display = "block"
    //btnCancelar.style.display = "block"
    btnAtras.style.display = "none"
    contador = 1


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

function sumaItems() {
    if (acumulador == undefined) {
        acumulador = 0
    }
    superTotalCombos.innerHTML = ``
    superTotalCombos.innerHTML = `       
    <p>Total pedido: $${acumulador + combo.totalCombo}</p>
      `
}