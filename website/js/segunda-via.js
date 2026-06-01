if (!verificarAutenticacao()) { /* redireciona */ } else {
  (function() {
    document.getElementById("form-segunda-via").addEventListener("submit", function(e) {
      e.preventDefault();

      document.getElementById("grupo-matricula").classList.remove("invalid");
      document.getElementById("card-resultado").style.display = "none";
      document.getElementById("card-erro").style.display = "none";

      const matricula = document.getElementById("campo-matricula").value.trim();
      if (!matricula) {
        document.getElementById("grupo-matricula").classList.add("invalid");
        return;
      }

      const conta = buscarConta(matricula);
      if (!conta) {
        document.getElementById("card-erro").style.display = "block";
        document.getElementById("msg-erro").textContent = `Matrícula "${matricula}" não encontrada.`;
        return;
      }

      document.getElementById("card-resultado").style.display = "block";
      document.getElementById("conta-dados").innerHTML = `
        <div class="detalhe-campo">
          <div class="rotulo">Matrícula</div>
          <div class="valor">${conta.matricula}</div>
        </div>
        <div class="detalhe-campo">
          <div class="rotulo">Vencimento</div>
          <div class="valor">${conta.vencimento}</div>
        </div>
        <div class="detalhe-campo">
          <div class="rotulo">Cliente</div>
          <div class="valor">${conta.cliente}</div>
        </div>
        <div class="detalhe-campo">
          <div class="rotulo">Consumo</div>
          <div class="valor">${conta.consumoM3} m³</div>
        </div>
        <div class="detalhe-campo" style="grid-column:1/-1;">
          <div class="rotulo">Endereço</div>
          <div class="valor">${conta.endereco}</div>
        </div>
        <div class="conta-valor">R$ ${conta.valor.toFixed(2).replace(".", ",")}</div>
      `;
    });
  })();
}
