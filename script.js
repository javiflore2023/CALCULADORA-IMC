java:
function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const estatura = parseFloat(document.getElementById('estatura').value);
  
    if (isNaN(peso) || isNaN(estatura)) {
      alert('Ingrese valores válidos para peso y estatura.');
      return;
    }
  
    const imc = peso / ((estatura / 100) * (estatura / 100));
    const clasificacion = clasificarIMC(imc);
  
    const resultado = `
      Su IMC es: ${imc.toFixed(2)}<br>
      Clasificación: ${clasificacion}<br>
    `;
  
    document.getElementById('resultados').innerHTML = resultado;
  }
  
  function clasificarIMC(imc) {
    if (imc < 18.5) {
      return 'Bajo peso';
    } else if (imc < 25) {
      return 'Peso normal';
    } else if (imc < 30) {
      return 'Sobrepeso';
    } else {
      return 'Obesidad';
    }
  }
