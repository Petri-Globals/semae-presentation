if (!verificarAutenticacao()) { /* redireciona */ } else {
  (function() {
    document.getElementById("form-reportar").addEventListener("submit", function(e) {
      e.preventDefault();
      let valido = true;

      const grupos = ["grupo-tipo", "grupo-endereco", "grupo-descricao", "grupo-urgencia"];
      grupos.forEach(id => document.getElementById(id).classList.remove("invalid"));

      const tipo = document.getElementById("campo-tipo").value;
      const endereco = document.getElementById("campo-endereco").value.trim();
      const descricao = document.getElementById("campo-descricao").value.trim();
      const urgenciaEl = document.querySelector("input[name='urgencia']:checked");

      if (!tipo) { document.getElementById("grupo-tipo").classList.add("invalid"); valido = false; }
      if (!endereco) { document.getElementById("grupo-endereco").classList.add("invalid"); valido = false; }
      if (!descricao) { document.getElementById("grupo-descricao").classList.add("invalid"); valido = false; }
      if (!urgenciaEl) { document.getElementById("grupo-urgencia").classList.add("invalid"); valido = false; }

      if (!valido) return;

      const urgencia = urgenciaEl.value;
      const novoId = criarChamado(tipo, endereco, descricao, urgencia);
      showToast(`Chamado #${novoId} registrado com sucesso!`, "success");

      document.getElementById("form-reportar").reset();
    });
  })();
}
