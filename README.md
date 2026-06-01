# Workshop de Testes Automatizados — SEMAE (Dia 2)

Repositório do workshop prático de testes automatizados para a SEMAE — Campinas. Este repositório contém o site de simulação, os desafios do Maestro e os desafios de JavaScript (TDD/BDD).

## Pré-requisitos

| Ferramenta | Versão | Para que serve |
|-----------|--------|---------------|
| Node.js | 18+ | Rodar os testes JavaScript (Jest) |
| Java (JDK) | 17+ | Maestro CLI |
| Maestro CLI | latest | Rodar os flows de teste Maestro |
| Maestro Studio | latest | Criar e editar flows visualmente |

## Setup

### Linux / macOS

```bash
chmod +x setup/setup.sh
./setup/setup.sh
```

### Windows (PowerShell)

```powershell
.\setup\setup.ps1
```

O script vai verificar se tudo está instalado e instalar o que estiver faltando.

### Instalação manual

- **Node.js**: https://nodejs.org/
- **Java 17+**: https://adoptium.net/temurin/releases/
- **Maestro CLI**: `curl -fsSL "https://get.maestro.mobile.dev" | bash` (Linux/macOS) ou [download do GitHub](https://github.com/mobile-dev-inc/maestro/releases) (Windows)
- **Maestro Studio**: https://studio.maestro.dev/

## Site de Simulação

O site "Sistema de Atendimento SEMAE" está na pasta `website/`. Ele simula um sistema real com login, chamados, segunda via de conta e mais.

### Acessar localmente

```bash
npx serve website
```

Depois abra http://localhost:3000 no navegador.

### Credenciais de acesso

| Campo | Valor |
|-------|-------|
| Usuário | `admin` |
| Senha | `semae123` |

### Resetar dados

Abra o Console do navegador (F12) e digite:

```javascript
resetarDados()
```

## Desafios Maestro

### Como rodar um flow

```bash
maestro test maestro/challenges/01-primeiros-passos/flow.yaml
```

### Lista de desafios

| # | Nome | Dificuldade | O que pratica |
|---|------|------------|---------------|
| 00 | Demo | — | Demonstração do instrutor |
| 01 | Primeiros Passos | Iniciante | Navegação e assertVisible |
| 02 | Login | Iniciante | Formulários e assertions |
| 03 | Reportar Problema | Iniciante | Formulário complexo |
| 04 | Filtros e Busca | Intermediário | Filtros, busca, assertNotVisible |
| 05 | Detalhes e Ações | Intermediário | Navegação click-through |
| 06 | Segunda Via | Intermediário | Múltiplas assertions |
| 07 | Perfil | Intermediário | Edição e persistência |
| 08 | Fluxo Completo | Avançado | E2E com subflows |
| 09 | Casos Extremos | Bônus | Error handling, edge cases |

### Comandos Maestro mais usados

| Comando | O que faz |
|---------|-----------|
| `launchApp` | Abre o site |
| `tapOn: "texto"` | Clica em um elemento pelo texto |
| `inputText: "texto"` | Digita texto em um campo |
| `assertVisible: "texto"` | Verifica que um texto aparece |
| `assertNotVisible: "texto"` | Verifica que um texto NÃO aparece |
| `scrollUntilVisible` | Rola até encontrar um elemento |
| `eraseText` | Apaga o texto de um campo |
| `pressKey: Enter` | Pressiona uma tecla |
| `takeScreenshot: "nome"` | Tira um print |
| `runFlow: { file: "caminho" }` | Executa um subflow |

## Desafios JavaScript

### Como rodar os testes

```bash
cd javascript
npx jest
```

### Lista de desafios

| # | Nome | O que pratica |
|---|------|---------------|
| 10 | TDD Red/Green | Escrever testes antes da função (calcularContaDeAgua) |
| 11 | BDD do Gherkin | Converter cenário Gherkin em teste Jest |

## Estrutura do Repositório

```
├── website/                    # Site de simulação (GitHub Pages)
├── maestro/
│   ├── demo/                   # Flows de demonstração
│   ├── challenges/              # Desafios (INSTRUCAO.md + flow.yaml)
│   ├── subflows/               # Flows reutilizáveis (login, logout)
│   └── solution/                # Soluções de referência
├── javascript/
│   ├── src/                    # Código-fonte dos desafios
│   └── challenges/              # Instruções dos desafios JS
├── setup/
│   ├── setup.sh                # Script Linux/macOS
│   └── setup.ps1               # Script Windows
└── PLANEJAMENTO.md             # Planejamento completo do workshop
```

## Links Úteis

- **Documentação do Maestro**: https://docs.maestro.dev/
- **Referência de comandos Maestro**: https://docs.maestro.dev/reference/
- **Maestro Studio download**: https://studio.maestro.dev/
- **Jest**: https://jestjs.io/pt-BR/
