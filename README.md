# Workshop de Testes Automatizados com Maestro -- SEMAE

Workshop pratico de testes automatizados usando o **Maestro** para desenvolvedores Oracle APEX. O repositorio contem um site simulado do SEMAE (servico de agua de Campinas), desafios progressivos de testes com Maestro e desafios de JavaScript (TDD/BDD).

## Estrutura do Projeto

```
.
├── .github/workflows/deploy.yml   # Deploy automatico via GitHub Pages
├── website/                       # Site simulado do SEMAE (HTML/CSS/JS puro)
├── maestro/
│    ├── demo/                      # Flows de demonstracao do instrutor
│    └── challenges/                # 10 desafios (00-demo a 09-casos-extremos)
│       └── NN-nome/
│           ├── INSTRUCAO.md       # Instrucoes + cenario Gherkin
│           └── template.yaml      # Template para preencher
│                         
├── javascript/
│   ├── challenges/                # Instrucoes dos desafios JS
│   │   ├── 10-tdd-red-green/INSTRUCAO.md
│   │   └── 11-bdd-gherkin/INSTRUCAO.md
│   ├── src/                       # Arquivos de teste e implementacao
│   └── solution/                  # Solucoes de referencia
├── CHEATSHEET.md                  # Consulta rapida de comandos Maestro
└── README.md
```

## Site de Simulacao

O site simula o "Sistema de Atendimento ao Cidadao" do SEMAE. Possui:

- Login com validacao
- Dashboard com painel de navegacao
- Listagem de chamados com filtros e busca
- Detalhes de chamados com observacoes
- Formulario para reportar problemas
- Segunda via de conta
- Perfil do usuario (edicao)
- Pagina de ajuda com FAQ

### Acesso

| Campo  | Valor      |
|--------|------------|
| Usuario| `admin`    |
| Senha  | `semae123` |

## Desafios Maestro (01-09)

Cada desafio contem:

- **INSTRUCAO.md** -- Objetivo, passo-a-passo, cenario em Gherkin, comandos usados e dicas
- **template.yaml** -- Arquivo YAML com a URL configurada e comentarios indicando o que preencher.

### Lista de Desafios

| #  | Nome                  | Dificuldade   | O que pratica                              |
|----|-----------------------|---------------|--------------------------------------------|
| 00 | Demo                  | --            | Demonstracao do instrutor no Maestro Studio|
| 01 | Primeiros Passos      | Iniciante     | Navegacao e assertVisible                  |
| 02 | Login                 | Iniciante     | Formularios e assertions                   |
| 03 | Reportar Problema     | Iniciante     | Formulario complexo                        |
| 04 | Filtros e Busca       | Intermediario | Filtros, busca, assertNotVisible           |
| 05 | Detalhes e Acoes      | Intermediario | Navegacao click-through                    |
| 06 | Segunda Via           | Intermediario | Multiplas assertions                       |
| 07 | Perfil                | Intermediario | Edicao e persistencia                      |
| 08 | Fluxo Completo        | Avancado      | E2E com runFlow                            |
| 09 | Casos Extremos        | Bonus         | Error handling, edge cases                 |

## Desafios JavaScript (10-11)

| #  | Nome              | O que pratica                                              |
|----|-------------------|------------------------------------------------------------|
| 10 | TDD Red/Green     | Escrever testes antes da funcao (calcularContaDeAgua)      |
| 11 | BDD do Gherkin    | Converter cenario Gherkin em teste Jest (verificarChamado) |

## Como Rodar os Testes

### Maestro

```bash
maestro test maestro/challenges/01-primeiros-passos/template.yaml
```

### JavaScript (Jest)

```bash
cd javascript
npx jest
```

## Prerequisitos

| Ferramenta    | Versao | Para que serve                      |
|---------------|--------|-------------------------------------|
| Maestro CLI   | latest | Rodar os flows de teste             |
| Chromium      | --     | Navegador web usado pelo Maestro    |
| Node.js       | 18+    | Rodar os testes JavaScript (Jest)   |
| Java (JDK)    | 17+    | Requisito do Maestro CLI            |

## Links Uteis

- Documentacao do Maestro: https://docs.maestro.dev/
- Referencia de comandos: https://docs.maestro.dev/reference/
- Maestro Studio: https://studio.maestro.dev/
- Jest: https://jestjs.io/pt-BR/
