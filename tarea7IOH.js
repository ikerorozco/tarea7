
function calcularFactorial(numero) {

  if (numero === 0 || numero === 1) {

    return 1;

  } else {
 
    return numero * calcularFactorial(numero - 1);

  }

}


const numero = 10;
const factorial = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${factorial}`);

  