const verificarChamado = require("./verificarChamado");

describe("Verificar prioridade de chamado", () => {
  it("deve classificar como Emergência quando esgoto com urgência Alta", () => {
    const tipo = "Esgoto a céu aberto";
    const urgencia = "Alta";
    const resultado = verificarChamado(tipo, urgencia);
    expect(resultado).toBe("Emergência");
  });

  it("deve classificar como Normal quando conta com erro com urgência Média", () => {
    const tipo = "Conta com erro";
    const urgencia = "Média";
    const resultado = verificarChamado(tipo, urgencia);
    expect(resultado).toBe("Normal");
  });

  it("deve classificar como Baixa Prioridade quando hidrômetro quebrado com urgência Baixa", () => {
    const tipo = "Hidrômetro quebrado";
    const urgencia = "Baixa";
    const resultado = verificarChamado(tipo, urgencia);
    expect(resultado).toBe("Baixa Prioridade");
  });
});
