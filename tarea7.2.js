function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
  
    let a = 0;
    let b = 1;
    let resultado = 0;
  
    for (let i = 2; i <= n; i++) {
      resultado = a + b;
      a = b;
      b = resultado;
    }
  
    return resultado;
  }
  
  // Ejemplo de uso
  const numero = 10; // Cambia esto al número deseado
  const resultado = fibonacci(numero);
  console.log(`El resultado de Fibonacci para n=${numero} es ${resultado}`);
  