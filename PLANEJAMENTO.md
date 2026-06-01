# Planejamento — Workshop de Testes Automatizados SEMAE (Dia 2)

## Contexto

- **Instituição**: SEMAE — órgão público de saneamento de Campinas/SP
- **Audiência**: ~10 desenvolvedores, maioria Oracle APEX + banco de dados
- **Nível técnico**: Iniciantes em programação, sem experiência formal com testes
- **Idioma**: TODO o conteúdo que a SEMAE lê/interage DEVE estar em português
- **Objetivo**: Elevar a maturidade técnica do time em testes automatizados

## Apresentação

### Dia 1 — "Do Caos à Confiança" (5 atos, 22 slides)

| Ato | Tema | Slides |
|-----|------|--------|
| 1 | O Problema | Por que testes importam, falácia "testes atrasam", trade-offs, profissionais da área |
| 2 | Os Fundamentos | O que é um teste, criar cenário, Gherkin, bons vs ruins, abordagens, tipos de execução |
| 3 | O Universo dos Testes | Funcionais, não funcionais, performance/carga/estresse, acessibilidade, segurança |
| 4 | Como Estruturar | Pirâmide, metodologias (TDD/BDD/ATDD), QA no fluxo, ciclo de vida do bug |
| 5 | Na Prática | CI/CD, Maestro (abertura do dia 2), próximos passos |

### Dia 2 — Workshop Prático (~3 horas)

- Foco: **Maestro** (blackbox automation sem código)
- Extras: Desafios JavaScript para vivenciar TDD e BDD
- Plataforma: **Web** (evita setup pesado de Android Studio)
- Maestro web usa Chromium gerenciado — sem necessidade de emulador

## Repositório

### Estrutura

```
semae-presentation/
├── website/                          # App estática sob teste (GitHub Pages)
│   ├── index.html                    # Página inicial / redireciona para login
│   ├── login.html                    # Tela de login
│   ├── dashboard.html                # Dashboard com resumo
│   ├── chamados.html                 # Listagem de chamados (filtros + busca)
│   ├── chamado-detalhe.html          # Detalhe de um chamado + comentários
│   ├── reportar-problema.html        # Formulário de reporte
│   ├── segunda-via.html              # Consulta de conta (por matrícula)
│   ├── perfil.html                   # Perfil do usuário (view/edit)
│   ├── ajuda.html                    # FAQ com accordion
│   ├── css/
│   │   └── styles.css               # Estilos globais
│   └── js/
│       ├── app.js                    # Lógica global (auth, navegação, localStorage)
│       ├── login.js                   # Validação de login
│       ├── chamados.js               # Filtros, busca, listagem
│       ├── reportar.js               # Envio de formulário
│       ├── segunda-via.js            # Consulta de conta
│       ├── perfil.js                 # Edição de perfil
│       └── dados.js                 # Dados simulados (chamados, contas, usuários)
├── maestro/
│   ├── demo/                         # Flows de demonstração (usados na apresentação)
│   │   ├── demo-login.yaml
│   │   ├── demo-navegacao.yaml
│   │   └── demo-reportar.yaml
│   ├── challenges/
│   │   ├── 00-demo/
│   │   │   └── INSTRUCAO.md          # (Você resolve na tela — não tem YAML para eles)
│   │   ├── 01-primeiros-passos/
│   │   │   ├── INSTRUCAO.md
│   │   │   └── flow.yaml             # Esqueleto com comentários (ou vazio)
│   │   ├── 02-login/
│   │   │   ├── INSTRUCAO.md
│   │   │   └── flow.yaml
│   │   ├── 03-reportar-problema/
│   │   │   ├── INSTRUCAO.md
│   │   │   └── flow.yaml
│   │   ├── 04-filtros-e-busca/
│   │   │   ├── INSTRUCAO.md
│   │   │   └── flow.yaml
│   │   ├── 05-detalhes-e-acoes/
│   │   │   ├── INSTRUCAO.md
│   │   │   └── flow.yaml
│   │   ├── 06-segunda-via/
│   │   │   ├── INSTRUCAO.md
│   │   │   └── flow.yaml
│   │   ├── 07-perfil/
│   │   │   ├── INSTRUCAO.md
│   │   │   └── flow.yaml
│   │   ├── 08-fluxo-completo/
│   │   │   ├── INSTRUCAO.md
│   │   │   └── flow.yaml
│   │   └── 09-casos-extremos/       # Bônus para quem terminar rápido
│   │       ├── INSTRUCAO.md
│   │       └── flow.yaml
│   ├── subflows/                     # Flows reutilizáveis (login, logout)
│   │   ├── login.yaml
│   │   └── logout.yaml
│   └── solution/                     # Soluções de referência (todas escritas)
│       ├── 01-primeiros-passos.yaml
│       ├── 02-login.yaml
│       ├── 03-reportar-problema.yaml
│       ├── 04-filtros-e-busca.yaml
│       ├── 05-detalhes-e-acoes.yaml
│       ├── 06-segunda-via.yaml
│       ├── 07-perfil.yaml
│       ├── 08-fluxo-completo.yaml
│       └── 09-casos-extremos.yaml
├── javascript/
│   ├── package.json
│   ├── jest.config.js
│   ├── src/
│   │   ├── calcularContaDeAgua.js     # Função alvo do TDD (challenge 10)
│   │   ├── verificarChamado.js       # Função alvo do BDD (challenge 11)
│   │   └── calcularContaDeAgua.test.js  # Tests do challenge 10
│   ├── challenges/
│   │   ├── 10-tdd-red-green/
│   │   │   └── INSTRUCAO.md
│   │   └── 11-bdd-gherkin/
│   │       └── INSTRUCAO.md
│   └── solution/
│       ├── calcularContaDeAgua.js
│       ├── calcularContaDeAgua.test.js
│       └── verificarChamado.test.js
├── setup/
│   ├── setup.sh                      # Linux/macOS
│   └── setup.ps1                     # Windows (PowerShell)
├── PLANEJAMENTO.md                   # Este arquivo
└── README.md                         # Instruções em português para os participantes
```

## Website — "Sistema de Atendimento SEMAE"

### Características técnicas

- **Estático**: HTML + CSS + JavaScript puro (sem frameworks)
- **Dados**: `localStorage` como banco de dados simulado
- **Auth**: Simulação via `sessionStorage` (login/logout)
- **Deploy**: GitHub Pages (a partir de `/website`)
- **Navegação**: SPA simples ou páginas separadas (decisão: páginas separadas por simplicidade)
- **Responsivo**: Não é prioridade (Maestro roda em viewport fixo), mas não deve quebrar
- **Idioma**: Todo texto visível em português

### Páginas e funcionalidades

| Página | URL relativa | Funcionalidades |
|--------|-------------|-----------------|
| Login | `/login.html` | Campo usuário, campo senha, botão "Entrar", mensagem de erro (credenciais inválidas), mensagem de sucesso |
| Dashboard | `/dashboard.html` | Cards: chamados abertos, em andamento, resolvidos, conta próxima do vencimento. Links rápidos para "Reportar Problema", "Meus Chamados", "Segunda Via". Saudação com nome do usuário |
| Meus Chamados | `/chamados.html` | Lista de chamados. Filtros por status (Aberto/Em Andamento/Resolvido). Busca por texto. Scroll na lista |
| Detalhe do Chamado | `/chamado-detalhe.html?id=X` | Detalhes do chamado (tipo, endereço, descrição, status, data). Campo para adicionar observação/comentário |
| Reportar Problema | `/reportar-problema.html` | Formulário: tipo de problema (dropdown), endereço (texto), descrição (textarea), urgência (radio: baixa/média/alta). Botão enviar. Validação de campos obrigatórios. Toast de sucesso |
| Segunda Via | `/segunda-via.html` | Campo matrícula. Botão consultar. Exibe: nome do cliente, endereço, valor, vencimento, consumo (m³). Erro se matrícula não encontrada |
| Perfil | `/perfil.html` | Nome, email, telefone (editáveis). Botão salvar. Confirmação de atualização |
| Ajuda/FAQ | `/ajuda.html` | Accordion com perguntas frequentes. Expandir/recolher seções |

### Dados simulados (`dados.js`)

- **Usuário padrão**: `admin` / `semae123` (nome: Carlos Silva)
- **Chamados**: ~8 chamados pré-cadastrados com status variados
- **Contas (segunda via)**: 3-4 matrículas com dados de consumo
- **FAQ**: 5-6 perguntas sobre serviços da SEMAE

## Maestro — Desafios

### Formato de cada desafio

- Pasta com `INSTRUCAO.md` (enunciado em português) + `flow.yaml` (esqueleto ou vazio)
- Instruções explicam o que o teste deve fazer, sem dar a resposta completa
- Hints/dicas progressivas (dica 1, dica 2) se ficarem presos
- Conceito Maestro being taught está explícito na instrução

### Formato do flow.yaml

```yaml
url: https://USUARIO.github.io/semae-presentation/website/login.html
---
# Seu teste começa aqui
```

### Detalhamento dos desafios

#### Challenge 00 — Demo (Você resolve na tela)

- **Objetivo**: Mostrar Maestro Studio, explicar YAML, rodar um flow completo
- **Você faz**: Abre o site, faz login, navega até dashboard, clica em "Meus Chamados"
- **Eles assistem**: Veem a sintaxe, entendem o que cada comando faz
- **Conceito**: Visão geral — `launchApp`, `tapOn`, `inputText`, `assertVisible`
- **Slide connection**: Act 5 — "Maestro — Blackbox automation without code"
- **Tempo**: ~20 min

#### Challenge 01 — Primeiros Passos (Guiado)

- **Objetivo**: Primeiro contato — abrir site, navegar, verificar texto
- **Tarefas**: Abrir site → navegar para "Ajuda" → verificar que FAQ aparece → clicar em uma pergunta → verificar resposta visível
- **Conceitos Maestro**: `openLink`/`launchApp`, `tapOn`, `assertVisible`
- **Slide connection**: Act 5 "Next steps — First scenario" + Act 2 "O que é um teste"
- **Tempo**: ~10 min (guiado com você)
- **INSTRUCAO.md** inclui esqueleto do YAML com comentários

#### Challenge 02 — Login (Guiado → Solo)

- **Objetivo**: Interagir com formulário, usar assertions condicionais
- **Tarefas**:
  - (a) Preencher login válido → verificar "Bem-vindo, Carlos" no dashboard
  - (b) Preencher login inválido → verificar mensagem de erro "Usuário ou senha incorretos"
- **Conceitos Maestro**: `inputText`, `pressKey: Enter`, `assertVisible` (sucesso e erro)
- **Slide connection**: Act 2 "Criando um cenário — bom vs ruim"
- **Tempo**: ~15 min

#### Challenge 03 — Reportar um Problema (Solo)

- **Objetivo**: Formulário complexo com múltiplos campos
- **Tarefas**: Fazer login → navegar para "Reportar Problema" → preencher tipo (Vazamento), endereço, descrição, urgência → enviar → verificar toast "Chamado registrado com sucesso"
- **Conceitos Maestro**: `tapOn` em dropdown, `inputText` múltiplo, `scrollUntilVisible`, `assertVisible` para toast
- **Slide connection**: Act 3 "Funcional — E2E" + Act 2 "Abordagens — Blackbox"
- **Tempo**: ~15 min

#### Challenge 04 — Filtros e Busca (Solo)

- **Objetivo**: Scroll, filtros, busca por texto
- **Tarefas**: Login → "Meus Chamados" → filtrar por "Resolvido" → verificar que só chamados resolvidos aparecem → limpar filtro → buscar por texto (ex: "Vazamento") → verificar resultados
- **Conceitos Maestro**: `tapOn` em filtro, `scrollUntilVisible`, `assertVisible`, `assertNotVisible`
- **Slide connection**: Act 2 "Bons testes vs ruins" (testar que algo NÃO aparece)
- **Tempo**: ~15 min

#### Challenge 05 — Detalhes e Ações (Solo)

- **Objetivo**: Navegação click-through, multi-step
- **Tarefas**: Login → "Meus Chamados" → clicar em um chamado específico → verificar detalhes → adicionar observação → verificar que observação aparece na lista
- **Conceitos Maestro**: `tapOn` em item de lista, navegação entre páginas, `inputText` em novo campo, `assertVisible`
- **Slide connection**: Act 3 "Funcional — Integration"
- **Tempo**: ~15 min

#### Challenge 06 — Segunda Via (Solo)

- **Objetivo**: Múltiplas assertions, verificação de dados
- **Tarefas**: Login → "Segunda Via" → digitar matrícula válida → verificar nome, endereço, valor, vencimento, consumo → testar matrícula inválida → verificar erro
- **Conceitos Maestro**: `assertVisible` múltiplos, validação de dados, verificação de erro
- **Slide connection**: Act 4 "Pirâmide de testes — Service layer"
- **Tempo**: ~15 min

#### Challenge 07 — Perfil (Solo)

- **Objetivo**: Editar dados, verificar persistência
- **Tarefas**: Login → "Perfil" → alterar telefone → salvar → verificar que novo telefone aparece → navegar para outra página → voltar → verificar que telefone ainda está atualizado
- **Conceitos Maestro**: `inputText`, `tapOn` salvar, `assertVisible`, navegação + retorno, verificação de persistência
- **Slide connection**: Act 2 "Bons testes vs ruins — verificação real de persistência"
- **Tempo**: ~15 min

#### Challenge 08 — Fluxo Completo (Solo)

- **Objetivo**: E2E completo, composição com subflows
- **Tarefas**: Usar `runFlow` para:
  1. Login (subflow)
  2. Reportar problema
  3. Ir para "Meus Chamados"
  4. Verificar que o chamado aparece
  5. Clicar no chamado
  6. Verificar detalhes
  7. Logout (subflow)
- **Conceitos Maestro**: `runFlow` com `file:`, subflows em `/maestro/subflows/`, composição
- **Slide connection**: Act 3 "Funcional — E2E" + Act 4 "Pirâmide — topo"
- **Tempo**: ~20 min

#### Challenge 09 — Casos Extremos (Bônus)

- **Objetivo**: Testar estados de erro e edge cases
- **Tarefas**:
  - Enviar formulário vazio → verificar erros
  - Login com campo vazio → verificar erro
  - Segunda via com matrícula inexistente → verificar erro
  - Caracteres especiais no campo de busca → verificar comportamento
- **Conceitos Maestro**: `assertVisible` para mensagens de erro, edge cases
- **Slide connection**: Act 1 "Trade-offs — edge cases"
- **Tempo**: bônus

## JavaScript — Desafios

### Challenge 10 — TDD Red/Green (calcularContaDeAgua)

- **Objetivo**: Vivenciar o ciclo Red → Green
- **Função**: `calcularContaDeAgua(consumoM3, tarifaPorM3)`
- **Regras**:
  - Consumo até 10m³: tarifa mínima (tarifa * 10), não importa o consumo real
  - Consumo acima de 10m³: tarifa mínima + (consumo - 10) * tarifa * 1.5 (faixa excesso)
  - Consumo negativo: retorna 0
  - Tarifa negativa: retorna 0
- **Eles fazem**:
  1. Escrevem os testes primeiro (RED — todos falham)
  2. Implementam a função (GREEN — todos passam)
- **Conceitos Jest**: `describe`, `it`, `expect`, `toBe`
- **Slide connection**: Act 4 "TDD"
- **Tempo**: ~15 min

### Challenge 11 — BDD do Gherkin

- **Objetivo**: Converter cenário Gherkin (do slide do Dia 1) em teste Jest
- **Cenário Gherkin** (mesmo do slide):
  ```gherkin
  Cenário: Calcular conta com consumo na faixa normal
    Dado que o cliente consumiu 15m³ de água
    E a tarifa base é R$ 5,00 por m³
    Quando o sistema calcular a conta
    Então o valor deve ser R$ 87,50
  ```
- **Eles fazem**: Converter esse Gherkin + 2 cenários extras em `describe/it` com assertions
- **Conceitos Jest**: `describe` como cenário, `it` como "Então", `expect` como verificação
- **Slide connection**: Act 2 "Gherkin" + Act 4 "BDD"
- **Tempo**: ~15 min

## Setup Script

### Pré-requisitos (instalados pelo script)

| Ferramenta | Versão mínima | Uso |
|-----------|--------------|-----|
| Node.js | 18+ | Jest (JS challenges) |
| Java (JDK) | 17+ | Maestro CLI |
| Maestro CLI | latest | Maestro challenges |
| Maestro Studio | latest | Visual flow building |

### Comportamento do script

1. Verifica SO (Linux/macOS/Windows)
2. Verifica se Node.js está instalado → se não, instrui a instalar (ou tenta instalar via nvm)
3. Verifica se Java 17+ está instalado → se não, instrui a instalar (ou tenta instalar)
4. Instala Maestro CLI (`curl -fsSL "https://get.maestro.mobile.dev" | bash`)
5. Verifica instalação do Maestro (`maestro --version`)
6. Roda `npm install` na pasta `javascript/` (instala Jest)
7. Exibe mensagem de sucesso com próximos passos
8. Instalação do Maestro Studio: link para download + instruções (não pode automatizar)

### Arquivos

- `setup/setup.sh` — Linux/macOS
- `setup/setup.ps1` — Windows PowerShell

## README.md

### Conteúdo (em português)

1. **Introdução**: O que é este repositório, como se conecta ao Dia 1
2. **Pré-requisitos**: O que precisa ter instalado
3. **Setup**: Como rodar o script de configuração
4. **Como acessar o site**: URL do GitHub Pages
5. **Desafios Maestro**: Lista com descrição curta e dificuldade
6. **Desafios JavaScript**: Lista com descrição curta
7. **Como rodar um teste Maestro**: `maestro test flow.yaml`
8. **Como rodar um teste Jest**: `npx jest`
9. **Referência rápida de comandos Maestro**: os mais usados
10. **Onde encontrar ajuda**: link para docs do Maestro, README do repo

## GitHub Actions

- Deploy automático da pasta `/website` para GitHub Pages
- Trigger: push na branch `main` (ou `main` quando arquivo em `/website` muda)
- Não precisa de CI/CD para os testes (workshop presencial)

## Cronograma do Dia 2 (~3 horas)

| Tempo | Atividade | Tipo |
|-------|-----------|------|
| 15 min | Recap Dia 1 + slide Maestro | Apresentação |
| 20 min | Challenge 00 — Demo (você na tela) | Demonstração |
| 10 min | Challenge 01 — Primeiros Passos (guiado) | Guided |
| 15 min | Challenge 02 — Login (guiado → solo) | Guided/Solo |
| 15 min | Challenge 03 — Reportar Problema | Solo |
| 15 min | Challenge 04 — Filtros e Busca | Solo |
| 15 min | **Intervalo** | Break |
| 15 min | Challenge 05 — Detalhes e Ações | Solo |
| 15 min | Challenge 06 — Segunda Via | Solo |
| 15 min | Challenge 07 — Perfil | Solo |
| 20 min | Challenge 08 — Fluxo Completo | Solo |
| 10 min | **Intervalo** | Break |
| 15 min | Challenge 10 — TDD Red/Green | Solo |
| 15 min | Challenge 11 — BDD do Gherkin | Solo |
| 10 min | Wrap-up + próximos passos | Apresentação |
| | **Total: ~3h** | |

Challenge 09 é bônus para quem terminar rápido.

## Restrições e Diretrizes

### Idioma
- **TODO** o conteúdo visível pela SEMAE deve estar em português
- Isso inclui: INSTRUCAO.md, README.md, comentários nos flows YAML, textos do website, nomes das variáveis nos desafios JS, mensagens de erro/toast
- Exceção: nomes de comandos Maestro (`tapOn`, `assertVisible`, etc.) são em inglês (são palavras-chave)
- Exceção: variáveis de código JS (`function calcularContaDeAgua`) podem ter nomes técnicos mistos
- Arquivo PLANEJAMENTO.md pode estar em português (para você) — ou pode ser bilíngue

### Maestro Web — Limitações técnicas
- Web é **Beta** no Maestro — mencionar no README
- Apenas Chromium como engine
- Locale padrão: `en-US`
- Primeiro run: Maestro baixa Chromium automaticamente
- Comandos são os mesmos de mobile — `url:` no lugar de `appId:`
- `--headless` disponível para CI
- `--screen-size=WxH` para definir viewport

### Website — Notas técnicas
- Static HTML/CSS/JS puro — sem frameworks
- `localStorage` como "banco de dados" (dados persistem no browser)
- `sessionStorage` para sessão de login
- Dados simulados em `dados.js` (seed no primeiro acesso)
- Páginas separadas (não SPA) — mais fácil para iniciantes entenderem
- Navegação entre páginas via links `<a>` normais
- Maestro interage com o que está renderizado — não importa a implementação

### Dados simulados — Especificação

**Usuário padrão**:
- Login: `admin`
- Senha: `semae123`
- Nome: Carlos Silva
- Email: carlos.silva@semae.campinas.sp.gov.br
- Telefone: (19) 3251-XXXX

**Chamados pré-cadastrados** (8+ chamados):
| ID | Tipo | Endereço | Status | Urgência |
|----|------|----------|--------|----------|
| 001 | Vazamento | Rua das Flores, 100 | Resolvido | Alta |
| 002 | Falta de água | Av. Brasil, 456 | Em Andamento | Alta |
| 003 | Conta com erro | Rua José Paulino, 789 | Aberto | Média |
| 004 | Esgoto a céu aberto | Rua Santo Antônio, 321 | Em Andamento | Alta |
| 005 | Vazamento | Rua Loredano, 555 | Aberto | Média |
| 006 | Ligação nova | Rua Barão de Itapura, 200 | Resolvido | Baixa |
| 007 | Interrupção de fornecimento | Av. John Boyd Dunlop, 1000 | Aberto | Alta |
| 008 | Hidrômetro quebrado | Rua Ferreira Pinto, 80 | Resolvido | Baixa |

**Contas (segunda via)**:
| Matrícula | Cliente | Endereço | Consumo (m³) | Valor (R$) | Vencimento |
|-----------|---------|----------|-------------|-----------|-------------|
| 12345 | Maria Oliveira | Rua das Flores, 100 | 12 | 85,00 | 15/07/2026 |
| 67890 | João Santos | Av. Brasil, 456 | 8 | 50,00 | 20/07/2026 |
| 11111 | Ana Costa | Rua José Paulino, 789 | 25 | 175,00 | 10/07/2026 |
| 22222 | Pedro Lima | Rua Santo Antônio, 321 | 15 | 87,50 | 25/07/2026 |

**FAQ (5+ perguntas)**:
1. Como solicitar uma ligação nova de água?
2. O que fazer em caso de vazamento?
3. Como contestar o valor da conta?
4. Qual o prazo para atendimento de emergência?
5. Como solicitar a segunda via da conta?
6. O que fazer quando falta água no meu bairro?

### Design do website
- Visual limpo e profissional, mas simples
- Cores: tons de azul (água) + verde (sustentabilidade)
- Navbar com links para todas as seções
- Sem frameworks CSS — CSS puro para simplicidade
- Não precisa ser responsivo perfeito — o foco é testar com Maestro
- Fonte: system-ui (sem dependência externa)

### Subflows Maestro (reutilizáveis)
- `/maestro/subflows/login.yaml` — Faz login com credenciais padrão
- `/maestro/subflows/logout.yaml` — Faz logout
- Usados no Challenge 08 (Fluxo Completo) e em qualquer desafio que precise de login

### Soluções de referência
- Pasta `/maestro/solution/` com os YAMLs completos e funcionais
- Escritos por você usando Maestro Studio
- Commitados no repo para que participantes possam consultar depois
- NÃO devem ser facilmente acessíveis durante o workshop (ou pelo menos instruir a não olhar antes)

## Checklist de Construção

- [ ] Planejamento completo (este documento)
- [ ] Website — página de login
- [ ] Website — dashboard
- [ ] Website — listagem de chamados (com filtros e busca)
- [ ] Website — detalhe do chamado (com comentários)
- [ ] Website — reportar problema (formulário completo)
- [ ] Website — segunda via (consulta por matrícula)
- [ ] Website — perfil (view/edit)
- [ ] Website — ajuda/FAQ (accordion)
- [ ] Website — dados simulados (dados.js)
- [ ] Website — lógica global (app.js — auth, navegação, seed)
- [ ] Website — estilos (styles.css)
- [ ] Setup script Linux/macOS (setup.sh)
- [ ] Setup script Windows (setup.ps1)
- [ ] Maestro — subflows (login.yaml, logout.yaml)
- [ ] Maestro — demo flows (demo-login, demo-navegacao, demo-reportar)
- [ ] Maestro — Challenge 00 (INSTRUCAO.md)
- [ ] Maestro — Challenge 01 (INSTRUCAO.md + flow.yaml esqueleto)
- [ ] Maestro — Challenge 02 (INSTRUCAO.md + flow.yaml esqueleto)
- [ ] Maestro — Challenge 03 (INSTRUCAO.md + flow.yaml esqueleto)
- [ ] Maestro — Challenge 04 (INSTRUCAO.md + flow.yaml esqueleto)
- [ ] Maestro — Challenge 05 (INSTRUCAO.md + flow.yaml esqueleto)
- [ ] Maestro — Challenge 06 (INSTRUCAO.md + flow.yaml esqueleto)
- [ ] Maestro — Challenge 07 (INSTRUCAO.md + flow.yaml esqueleto)
- [ ] Maestro — Challenge 08 (INSTRUCAO.md + flow.yaml esqueleto)
- [ ] Maestro — Challenge 09 (INSTRUCAO.md + flow.yaml esqueleto)
- [ ] Maestro — Solution (10 arquivos YAML de referência)
- [ ] JS — package.json + jest.config.js
- [ ] JS — Challenge 10 (INSTRUCAO.md — TDD Red/Green)
- [ ] JS — Challenge 11 (INSTRUCAO.md — BDD do Gherkin)
- [ ] JS — Solution (calcularContaDeAgua.js + tests + verificarChamado.test.js)
- [ ] README.md (português, completo)
- [ ] GitHub Actions (deploy para Pages)
- [ ] Revisão final — todo em português, links funcionando, desafios solúveis
