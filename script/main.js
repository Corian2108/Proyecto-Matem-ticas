/*document.getElementById("triangulos").
addEventListener("click", mostrar("home", "materia", "materia_senos", "materia_cosenos"));*/
var triangulos = "triangulos";
var senos = "senos";
var cosenos = "cosenos";
var home = "botones";

function mostrarTriangulos(id) {

    if (id = triangulos) {
        document.getElementById("home").style.display = "none"
        document.getElementById("materia").style.display = "block"
        document.getElementById("trianguloMostrar").style.display = "block"
        document.getElementById("senosMostrar").style.display = "none"
        document.getElementById("cosenosMostrar").style.display = "none"
        document.getElementById("botones").style.display = "block"
        mostrarEjercicioTriangulos();
    }
};

function mostrarSenos(id) {
    if (id = senos) {
        document.getElementById("home").style.display = "none"
        document.getElementById("materia").style.display = "block"
        document.getElementById("trianguloMostrar").style.display = "none"
        document.getElementById("senosMostrar").style.display = "block"
        document.getElementById("cosenosMostrar").style.display = "none"
        document.getElementById("botones").style.display = "block"
        mostrarEjercicioSenos();
    }
}

function mostrarCosenos(id) {
    if (id = cosenos) {
        document.getElementById("home").style.display = "none"
        document.getElementById("materia").style.display = "block"
        document.getElementById("trianguloMostrar").style.display = "none"
        document.getElementById("senosMostrar").style.display = "none"
        document.getElementById("cosenosMostrar").style.display = "block"
        document.getElementById("botones").style.display = "block"
        mostrarEjercicioCosenos();
    }
}

function regresar(id) {
    if (id = home) {
        document.getElementById("home").style.display = "block"
        document.getElementById("materia").style.display = "none"
        document.getElementById("trianguloMostrar").style.display = "none"
        document.getElementById("senosMostrar").style.display = "none"
        document.getElementById("cosenosMostrar").style.display = "none"
        document.getElementById("botones").style.display = "none"
        document.getElementById("respuesta").style.display = "none"
        document.getElementById("terminar").style.display = "block"
    }
}

function mostrarEjercicioTriangulos() {
    random = Math.trunc(Math.random() * 3 + 1)

    if (random === 1) {
        document.getElementById("ejercicio1Triangulos").style.display = "block"
        document.getElementById("ejercicio2Triangulos").style.display = "none"
        document.getElementById("ejercicio3Triangulos").style.display = "none"
    }
    if (random === 2) {
        document.getElementById("ejercicio1Triangulos").style.display = "none"
        document.getElementById("ejercicio2Triangulos").style.display = "block"
        document.getElementById("ejercicio3Triangulos").style.display = "none"
    }
    if (random === 3) {
        document.getElementById("ejercicio1Triangulos").style.display = "none"
        document.getElementById("ejercicio2Triangulos").style.display = "none"
        document.getElementById("ejercicio3Triangulos").style.display = "block"
    }
}

function mostrarEjercicioSenos() {
    random = Math.trunc(Math.random() * 3 + 1)

    if (random === 1) {
        document.getElementById("ejercicio1Senos").style.display = "block"
        document.getElementById("ejercicio2Senos").style.display = "none"
        document.getElementById("ejercicio3Senos").style.display = "none"
    }
    if (random === 2) {
        document.getElementById("ejercicio1Senos").style.display = "none"
        document.getElementById("ejercicio2Senos").style.display = "block"
        document.getElementById("ejercicio3Senos").style.display = "none"
    }
    if (random === 3) {
        document.getElementById("ejercicio1Senos").style.display = "none"
        document.getElementById("ejercicio2Senos").style.display = "none"
        document.getElementById("ejercicio3Senos").style.display = "block"
    }
}

function mostrarEjercicioCosenos() {
    random = Math.trunc(Math.random() * 3 + 1)

    if (random === 1) {
        document.getElementById("ejercicio1Cosenos").style.display = "block"
        document.getElementById("ejercicio2Cosenos").style.display = "none"
        document.getElementById("ejercicio3Cosenos").style.display = "none"
    }
    if (random === 2) {
        document.getElementById("ejercicio1Cosenos").style.display = "none"
        document.getElementById("ejercicio2Cosenos").style.display = "block"
        document.getElementById("ejercicio3Cosenos").style.display = "none"
    }
    if (random === 3) {
        document.getElementById("ejercicio1Cosenos").style.display = "none"
        document.getElementById("ejercicio2Cosenos").style.display = "none"
        document.getElementById("ejercicio3Cosenos").style.display = "block"
    }
}


function revisar(num) {
    check = document.getElementById(num.toString())

    if (num > 18) {
        console.log(check);
        console.log("Fin");
    } else {

        if (check.checked === true) {
            terminar(num)
        }
        return revisar(++num)
    }
}

function terminar(numero) {
    if (numero % 2 === 0) {
        pantallaIncorrecto()
    } else {
        pantallaCorrecto()
    }
}

function pantallaCorrecto() {
    document.getElementById("respuesta").style.display = "block"
    document.getElementById("incorrecto").style.display = "none"
    document.getElementById("correcto").style.display = "block"
    document.getElementById("materia").style.display = "none"
    document.getElementById("terminar").style.display = "none"
}

function pantallaIncorrecto() {
    document.getElementById("respuesta").style.display = "block"
    document.getElementById("incorrecto").style.display = "block"
    document.getElementById("correcto").style.display = "none"
    document.getElementById("materia").style.display = "none"
    document.getElementById("terminar").style.display = "none"
}