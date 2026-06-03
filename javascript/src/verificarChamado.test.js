const verificarChamado = require("./verificarChamado");

describe("Verificar prioridade de chamado", () => {
  it("deve classificar como Emergência quando esgoto com urgência Alta", () => {
    // Dado
    const tipo = "Esgoto a céu aberto";
    const urgencia = "Alta";

    // Quando
    const resultado = verificarChamado(tipo, urgencia);

    // Então
    expect(resultado).toBe("Emergência");
  });

  it("deve classificar como Normal quando conta com erro com urgência Média", () => {
    // Dado
    // ...

    // Quando
    // ...

    // Então
    // ...
  });

  it("deve classificar como Baixa Prioridade quando hidrômetro quebrado com urgência Baixa", () => {
    // Dado
    // ...

    // Quando
    // ...

    // Então
    // ...
  });
});
