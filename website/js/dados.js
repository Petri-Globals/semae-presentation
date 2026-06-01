const DADOS_INICIAIS = {
  usuario: {
    login: "admin",
    senha: "semae123",
    nome: "Carlos Silva",
    email: "carlos.silva@semae.campinas.sp.gov.br",
    telefone: "(19) 3251-XXXX"
  },
  chamados: [
    {
      id: "001",
      tipo: "Vazamento",
      endereco: "Rua das Flores, 100",
      descricao: "Vazamento na rede principal em frente ao número 100. Água acumulada na calçada.",
      status: "Resolvido",
      urgencia: "Alta",
      dataCriacao: "2026-05-20",
      observacoes: [
        { texto: "Equipe de campo enviada.", data: "2026-05-20" },
        { texto: "Reparo concluído com sucesso.", data: "2026-05-21" }
      ]
    },
    {
      id: "002",
      tipo: "Falta de água",
      endereco: "Av. Brasil, 456",
      descricao: "Sem fornecimento de água desde as 8h da manhã. Bairro inteiro afetado.",
      status: "Em Andamento",
      urgencia: "Alta",
      dataCriacao: "2026-05-28",
      observacoes: [
        { texto: "Identificada ruptura na adutora.", data: "2026-05-28" }
      ]
    },
    {
      id: "003",
      tipo: "Conta com erro",
      endereco: "Rua José Paulino, 789",
      descricao: "Conta do mês de maio apresenta consumo de 500m³, valor muito acima do normal.",
      status: "Aberto",
      urgencia: "Média",
      dataCriacao: "2026-06-01",
      observacoes: []
    },
    {
      id: "004",
      tipo: "Esgoto a céu aberto",
      endereco: "Rua Santo Antônio, 321",
      descricao: "Esgoto transbordando na esquina com a Rua Bahia. Forte odor e risco sanitário.",
      status: "Em Andamento",
      urgencia: "Alta",
      dataCriacao: "2026-05-30",
      observacoes: [
        { texto: "Desobstrução programada para amanhã.", data: "2026-05-30" }
      ]
    },
    {
      id: "005",
      tipo: "Vazamento",
      endereco: "Rua Loredano, 555",
      descricao: "Pequeno vazamento no hidrômetro. Perda visível de água.",
      status: "Aberto",
      urgencia: "Média",
      dataCriacao: "2026-06-01",
      observacoes: []
    },
    {
      id: "006",
      tipo: "Ligação nova",
      endereco: "Rua Barão de Itapura, 200",
      descricao: "Solicitação de ligação de água para imóvel recém-construído.",
      status: "Resolvido",
      urgencia: "Baixa",
      dataCriacao: "2026-05-10",
      observacoes: [
        { texto: "Vistoria realizada.", data: "2026-05-12" },
        { texto: "Ligação executada.", data: "2026-05-18" }
      ]
    },
    {
      id: "007",
      tipo: "Interrupção de fornecimento",
      endereco: "Av. John Boyd Dunlop, 1000",
      descricao: "Fornecimento interrompido para manutenção programada não avisada.",
      status: "Aberto",
      urgencia: "Alta",
      dataCriacao: "2026-06-01",
      observacoes: []
    },
    {
      id: "008",
      tipo: "Hidrômetro quebrado",
      endereco: "Rua Ferreira Pinto, 80",
      descricao: "Visor do hidrômetro está quebrado, impossível fazer leitura.",
      status: "Resolvido",
      urgencia: "Baixa",
      dataCriacao: "2026-05-15",
      observacoes: [
        { texto: "Hidrômetro substituído.", data: "2026-05-20" }
      ]
    }
  ],
  contas: [
    {
      matricula: "12345",
      cliente: "Maria Oliveira",
      endereco: "Rua das Flores, 100",
      consumoM3: 12,
      valor: 85.00,
      vencimento: "15/07/2026"
    },
    {
      matricula: "67890",
      cliente: "João Santos",
      endereco: "Av. Brasil, 456",
      consumoM3: 8,
      valor: 50.00,
      vencimento: "20/07/2026"
    },
    {
      matricula: "11111",
      cliente: "Ana Costa",
      endereco: "Rua José Paulino, 789",
      consumoM3: 25,
      valor: 175.00,
      vencimento: "10/07/2026"
    },
    {
      matricula: "22222",
      cliente: "Pedro Lima",
      endereco: "Rua Santo Antônio, 321",
      consumoM3: 15,
      valor: 87.50,
      vencimento: "25/07/2026"
    }
  ],
  faq: [
    {
      pergunta: "Como solicitar uma ligação nova de água?",
      resposta: "Dirija-se a uma unidade de atendimento da SEMAE com RG, CPF e comprovante de residência. O pedido também pode ser feito pelo site da prefeitura. O prazo médio de atendimento é de 5 dias úteis."
    },
    {
      pergunta: "O que fazer em caso de vazamento?",
      resposta: "Comunique o vazamento pela Central de Atendimento (telefone 156 ou site da SEMAE). Para vazamentos pequenos, feche o registro geral do imóvel. Em caso de vazamento na rua, a SEMAE enviará uma equipe de emergência."
    },
    {
      pergunta: "Como contestar o valor da conta?",
      resposta: "Acesse uma unidade da SEMAE com a conta em mãos e solicite uma revisão de consumo. O pedido será analisado e, se confirmado erro, o valor será corrigido na próxima fatura."
    },
    {
      pergunta: "Qual o prazo para atendimento de emergência?",
      resposta: "Emergências como ruptura de tubulação e esgoto a céu aberto possuem atendimento em até 4 horas após o registro. Vazamentos menores são atendidos em até 48 horas."
    },
    {
      pergunta: "Como solicitar a segunda via da conta?",
      resposta: "A segunda via pode ser obtida pelo site da SEMAE, em unidades de atendimento ou pelo telefone 156. Informe o número da matrícula do imóvel."
    },
    {
      pergunta: "O que fazer quando falta água no meu bairro?",
      resposta: "Primeiro, verifique com vizinhos se o problema é localizado. Em seguida, entre em contato com a SEMAE pelo telefone 156 ou consulte o site para verificar se há manutenção programada na sua região."
    }
  ]
};

function inicializarDados() {
  if (!localStorage.getItem("semae_inicializado")) {
    localStorage.setItem("semae_usuario", JSON.stringify(DADOS_INICIAIS.usuario));
    localStorage.setItem("semae_chamados", JSON.stringify(DADOS_INICIAIS.chamados));
    localStorage.setItem("semae_contas", JSON.stringify(DADOS_INICIAIS.contas));
    localStorage.setItem("semae_faq", JSON.stringify(DADOS_INICIAIS.faq));
    localStorage.setItem("semae_inicializado", "true");
  }
}

function obterUsuario() {
  return JSON.parse(sessionStorage.getItem("semae_sessao") || "null");
}

function fazerLogin(login, senha) {
  const usuario = JSON.parse(localStorage.getItem("semae_usuario") || "{}");
  if (login === usuario.login && senha === usuario.senha) {
    sessionStorage.setItem("semae_sessao", JSON.stringify(usuario));
    return { sucesso: true, usuario };
  }
  return { sucesso: false };
}

function fazerLogout() {
  sessionStorage.removeItem("semae_sessao");
}

function obterChamados() {
  return JSON.parse(localStorage.getItem("semae_chamados") || "[]");
}

function salvarChamados(chamados) {
  localStorage.setItem("semae_chamados", JSON.stringify(chamados));
}

function obterContas() {
  return JSON.parse(localStorage.getItem("semae_contas") || "[]");
}

function buscarConta(matricula) {
  const contas = obterContas();
  return contas.find(c => c.matricula === matricula) || null;
}

function obterFAQ() {
  return JSON.parse(localStorage.getItem("semae_faq") || "[]");
}

function adicionarObservacao(chamadoId, texto) {
  const chamados = obterChamados();
  const chamado = chamados.find(c => c.id === chamadoId);
  if (chamado) {
    const hoje = new Date().toISOString().split("T")[0];
    chamado.observacoes.push({ texto, data: hoje });
    salvarChamados(chamados);
  }
}

function criarChamado(tipo, endereco, descricao, urgencia) {
  const chamados = obterChamados();
  const novoId = String(chamados.length + 1).padStart(3, "0");
  const hoje = new Date().toISOString().split("T")[0];
  chamados.push({
    id: novoId,
    tipo,
    endereco,
    descricao,
    status: "Aberto",
    urgencia,
    dataCriacao: hoje,
    observacoes: []
  });
  salvarChamados(chamados);
  return novoId;
}

function atualizarPerfil(dados) {
  const usuario = obterUsuario();
  const usuarioAtualizado = { ...usuario, ...dados };
  localStorage.setItem("semae_usuario", JSON.stringify(usuarioAtualizado));
  sessionStorage.setItem("semae_sessao", JSON.stringify(usuarioAtualizado));
  return usuarioAtualizado;
}

function estaLogado() {
  return !!obterUsuario();
}

function verificarAutenticacao() {
  if (!estaLogado()) {
    window.location.href = "login.html";
    return false;
  }
  return true;
}

inicializarDados();
