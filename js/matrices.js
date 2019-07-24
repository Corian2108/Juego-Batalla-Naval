//Autor: Jeffo
//Tema: Creación de matrices

var matriz = [];

var generarMatriz = function () {

    var filasIngresadas = parseInt(document.getElementById("filas").value);
    var columnasIngresadas = parseInt(document.getElementById("columnas").value);

    for (let columnas = 0; columnas < columnasIngresadas; columnas++) {
        matriz.push([]);
        for (let filas = 1; filas <= filasIngresadas; filas++) {
            matriz[columnas].push(filas + ((matriz.length - 1) * filasIngresadas));
        }
    }

}

document.getElementById("generar")
    .addEventListener("click", function () {

        generarMatriz();
        console.log(matriz)

    });

document.getElementById("limpiar")
    .addEventListener("click", function () {

        matriz = [];
        console.log(matriz);

    });


var imprimirFilas = function () {
    for (let fila = 0; fila < matriz.length; fila++) {
        console.log("Los elementos de la fila " + (fila + 1) + " son:")
        for (let columna = 0; columna < matriz[fila].length; columna++) {
            console.log(matriz[fila][columna]);

        }

    }
}

var imprimirColumnas = function () {
    for (let columna = 0; columna < matriz[0].length; columna++) {
        console.log("Los elementos de la columna " + (columna + 1) + " son:")
        for (let fila = 0; fila < matriz.length; fila++) {
            console.log(matriz[fila][columna]);

        }

    }
}

var imprimirTodo = function () {
    console.log("Los elementos de la matriz son:")
    for (let fila = 0; fila < matriz.length; fila++) {
        for (let columna = 0; columna < matriz[fila].length ; columna++) {
            console.log(matriz[fila][columna]);

        }

    }
}

/*una forma de imprimir filas sin el for

var numero = 0

var imprimirFilas = function () {

    matriz.forEach(imprimir);
}

function imprimir(elemento) {
    ++numero
    console.log("Los elementos de la fila " + numero + " son:")
    elemento.forEach(imprimirEnConsola);
}

function imprimirEnConsola(posicion) {
    console.log(posicion);
}*/