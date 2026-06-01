function gerarNavbar() {
  const usuario = obterUsuario();
  if (!usuario) return "";
  const nome = usuario.nome.split(" ")[0];
  return `
    <nav>
      <div class="logo">SEMAE Atendimento</div>
      <div class="nav-links">
        <a href="dashboard.html">Painel</a>
        <a href="chamados.html">Meus Chamados</a>
        <a href="reportar-problema.html">Reportar Problema</a>
        <a href="segunda-via.html">Segunda Via</a>
        <a href="perfil.html">Perfil</a>
        <a href="ajuda.html">Ajuda</a>
      </div>
      <div class="nav-right">
        <span class="nome-usuario">Olá, ${nome}</span>
        <button onclick="fazerLogout(); window.location.href='login.html'">Sair</button>
      </div>
    </nav>
  `;
}

function inserirNavbar() {
  const navPlaceholder = document.getElementById("navbar");
  if (navPlaceholder) {
    navPlaceholder.innerHTML = gerarNavbar();
  }
}

function showToast(mensagem, tipo) {
  const toast = document.createElement("div");
  toast.className = `toast toast-${tipo}`;
  toast.textContent = mensagem;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add("show"), 10);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function ativarLinkAtual() {
  const pagina = window.location.pathname.split("/").pop() || "dashboard.html";
  const links = document.querySelectorAll("nav .nav-links a");
  links.forEach(link => {
    const href = link.getAttribute("href");
    if (href === pagina) {
      link.classList.add("active");
    }
  });
}

function resetarDados() {
  localStorage.removeItem("semae_inicializado");
  localStorage.removeItem("semae_usuario");
  localStorage.removeItem("semae_chamados");
  localStorage.removeItem("semae_contas");
  localStorage.removeItem("semae_faq");
  sessionStorage.removeItem("semae_sessao");
  inicializarDados();
}

document.addEventListener("DOMContentLoaded", () => {
  inserirNavbar();
  ativarLinkAtual();
});
