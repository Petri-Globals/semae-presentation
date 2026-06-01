if (!verificarAutenticacao()) { /* redireciona */ } else {
  (function() {
    let todosChamados = obterChamados();

    function renderizar(chamados) {
      const tbody = document.querySelector("#tabela-chamados tbody");
      const msgVazio = document.getElementById("msg-vazio");
      tbody.innerHTML = "";
      if (chamados.length === 0) { msgVazio.style.display = "block"; return; }
      msgVazio.style.display = "none";
      chamados.forEach(c => {
        const statusClasse = c.status === "Aberto" ? "badge-aberto" : c.status === "Em Andamento" ? "badge-em-andamento" : "badge-resolvido";
        const urgenciaClasse = c.urgencia === "Alta" ? "badge-alta" : c.urgencia === "Média" ? "badge-media" : "badge-baixa";
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td><a href="chamado-detalhe.html?id=${c.id}" style="color:#1a6fa0;text-decoration:none;font-weight:600;">#${c.id}</a></td>
          <td>${c.tipo}</td>
          <td>${c.endereco}</td>
          <td><span class="badge ${statusClasse}">${c.status}</span></td>
          <td><span class="badge ${urgenciaClasse}">${c.urgencia}</span></td>
          <td>${formatarData(c.dataCriacao)}</td>
        `;
        tbody.appendChild(tr);
      });
    }

    function filtrar() {
      const status = document.getElementById("filtro-status").value;
      const busca = document.getElementById("filtro-busca").value.toLowerCase().trim();
      let filtrados = todosChamados;
      if (status !== "todos") filtrados = filtrados.filter(c => c.status === status);
      if (busca) filtrados = filtrados.filter(c =>
        c.tipo.toLowerCase().includes(busca) ||
        c.endereco.toLowerCase().includes(busca) ||
        c.descricao.toLowerCase().includes(busca) ||
        c.id.includes(busca)
      );
      renderizar(filtrados);
    }

    function formatarData(dataStr) {
      const [ano, mes, dia] = dataStr.split("-");
      return `${dia}/${mes}/${ano}`;
    }

    document.getElementById("filtro-status").addEventListener("change", filtrar);
    document.getElementById("filtro-busca").addEventListener("input", filtrar);
    document.getElementById("btn-limpar-filtros").addEventListener("click", function() {
      document.getElementById("filtro-status").value = "todos";
      document.getElementById("filtro-busca").value = "";
      filtrar();
    });

    renderizar(todosChamados);
  })();
}
