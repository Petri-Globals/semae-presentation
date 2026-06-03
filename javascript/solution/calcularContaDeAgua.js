function calcularContaDeAgua(consumoM3, tarifaPorM3) {
  if (consumoM3 < 0 || tarifaPorM3 < 0) {
    return 0;
  }
  const tarifaMinima = tarifaPorM3 * 10;
  if (consumoM3 <= 10) {
    return tarifaMinima;
  }
  const excesso = consumoM3 - 10;
  return tarifaMinima + excesso * tarifaPorM3 * 1.5;
}

module.exports = calcularContaDeAgua;
