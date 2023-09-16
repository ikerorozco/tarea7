function calcularPi(numero) {
    let piAproximado = 0;
  
    for (let i = 0; i <= numero ; i+1) {
      const denominador = (2 * i) + 1;
      if (i % 2 === 0) {
        piAproximado += 1 / denominador;
      } else {
        piAproximado -= 1 / denominador;
      }
    }
  
    piAproximado *= 4;
  
    return piAproximado;
  }
  
  const numero = 10;
  const piAproximado = calcularPi(numero);
  
  console.log(`Aproximación de π usando ${numero} términos: ${piAproximado}`);