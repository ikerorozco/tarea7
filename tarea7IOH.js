
function calcularFactorial(numero) {
    multiplicacion=1;
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      for(let i=2;i<=numero;i+1){
        multiplicacion *= i;
      }
    }
    return multiplicacion;
  }
  
  const numero = parseInt(prompt("Ingresa un número para calcular su factorial:"));
  
  if (isNaN(numero) || numero < 0) {
    console.log("Por favor, ingresa un número válido y no negativo.");
  } else {
 
    const factorial = calcularFactorial(numero);
    
    console.log(`El factorial de ${numero} es: ${factorial}`);
  }
  