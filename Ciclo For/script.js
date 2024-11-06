function analizarValores() {
    // Contadores para números negativos, positivos y múltiplos de 15
    let negativos = 0;
    let positivos = 0;
    let multiplosDe15 = 0;

    // Pedir 5 números al usuario
    for (let i = 1; i <= 5; i++) {
        const valor = Number(prompt('Ingresa un número entero (' + i + '/5):'));

        // Revisar si el valor ingresado es un número válido
        if (valor || valor === 0) { // Acepta el valor si es un número, incluyendo 0
            if (valor < 0) {
                negativos++;
            } else if (valor > 0) {
                positivos++;
            }

            if (valor % 15 === 0) {
                multiplosDe15++;
            }
        } else {
            alert('Por favor ingresa un número válido.');
            i--; // No avanza si la entrada no es válida
        }
    }

    // Mostrar resultados al usuario
    alert('Cantidad de valores negativos: ' + negativos);
    alert('Cantidad de valores positivos: ' + positivos);
    alert('Cantidad de múltiplos de 15: ' + multiplosDe15);
}

// Llamar a la función para iniciar el programa
analizarValores();

//Trabajo hecho por: Billy Jhonson Angulo Arboleda y Leiner Jair Riascos Arcos
                     