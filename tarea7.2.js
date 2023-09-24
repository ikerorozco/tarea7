function fibonacci(posicion) {
  if (posicion === 0) {
    return 0;
  } else if (posicion === 1) {
    return 1;
  } else {
    return fibonacci(posicion - 1) + fibonacci(posicion - 2);
  }
}


const posicion = 15; 
const resultado = fibonacci(posicion);
console.log(`El valor en la posición ${posicion} de la serie de Fibonacci es ${resultado}`);
  