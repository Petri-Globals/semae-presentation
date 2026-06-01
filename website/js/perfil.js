if (!verificarAutenticacao()) { /* redireciona */ } else {
  (function() {
    const usuario = obterUsuario();
    document.getElementById("avatar-inicial").textContent = usuario.nome.charAt(0);
    document.getElementById("campo-nome").value = usuario.nome;
    document.getElementById("campo-email").value = usuario.email;
    document.getElementById("campo-telefone").value = usuario.telefone;

    document.getElementById("form-perfil").addEventListener("submit", function(e) {
      e.preventDefault();

      document.getElementById("grupo-telefone").classList.remove("invalid");

      const nome = document.getElementById("campo-nome").value.trim();
      const email = document.getElementById("campo-email").value.trim();
      const telefone = document.getElementById("campo-telefone").value.trim();

      if (!telefone) {
        document.getElementById("grupo-telefone").classList.add("invalid");
        return;
      }

      atualizarPerfil({ nome, email, telefone });
      document.getElementById("avatar-inicial").textContent = nome.charAt(0);
      showToast("Perfil atualizado com sucesso!", "success");
    });
  })();
}
