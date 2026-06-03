const calcularContaDeAgua = require("./calcularContaDeAgua");

describe("calcularContaDeAgua", () => {
  it("deve retornar a tarifa mínima para consumo até 10m³", () => {
    // Exemplo: 8m³ com tarifa R$5 → R$50.00
  });

  it("deve retornar a tarifa mínima exatamente no limite de 10m³", () => {
    // Exemplo: 10m³ com tarifa R$5 → R$50.00
  });

  it("deve calcular o valor com excesso para consumo acima de 10m³", () => {
    // Exemplo: 15m³ com tarifa R$5 → R$87.50
  });

  it("deve calcular corretamente com valores maiores", () => {
    // Exemplo: 25m³ com tarifa R$7 → R$227.50
  });

  it("deve retornar 0 para consumo negativo", () => {
  });

  it("deve retornar 0 para tarifa negativa", () => {
  });
});
