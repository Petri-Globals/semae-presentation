function verificarChamado(tipo, urgencia) {
  if (tipo === "Esgoto a céu aberto" && urgencia === "Alta") {
    return "Emergência";
  }
  if (tipo === "Conta com erro" && urgencia === "Média") {
    return "Normal";
  }
  if (tipo === "Hidrômetro quebrado" && urgencia === "Baixa") {
    return "Baixa Prioridade";
  }
  return "Indeterminado";
}

module.exports = verificarChamado;
