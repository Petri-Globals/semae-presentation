const calcularContaDeAgua = require("./calcularContaDeAgua");

describe("calcularContaDeAgua", () => {
  it("deve retornar a tarifa mínima para consumo até 10m³", () => {
    expect(calcularContaDeAgua(8, 5)).toBeCloseTo(50, 2);
  });

  it("deve retornar a tarifa mínima exatamente no limite de 10m³", () => {
    expect(calcularContaDeAgua(10, 5)).toBeCloseTo(50, 2);
  });

  it("deve calcular o valor com excesso para consumo acima de 10m³", () => {
    expect(calcularContaDeAgua(15, 5)).toBeCloseTo(87.5, 2);
  });

  it("deve calcular corretamente com valores maiores", () => {
    expect(calcularContaDeAgua(25, 7)).toBeCloseTo(227.5, 2);
  });

  it("deve retornar 0 para consumo negativo", () => {
    expect(calcularContaDeAgua(-5, 5)).toBe(0);
  });

  it("deve retornar 0 para tarifa negativa", () => {
    expect(calcularContaDeAgua(10, -3)).toBe(0);
  });
});
