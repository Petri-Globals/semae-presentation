# Desafio 11 — BDD do Gherkin: statusChamado()

## Objetivo

Converter cenarios Gherkin em testes Jest automatizados, seguindo a correspondencia Dado/Quando/Entao → variaveis/acao/expect.

## Regras de negocio

A funcao `statusChamado(status, dias)` recebe o status do chamado e quantos dias ele esta aberto, e determina se esta atrasado:

- `"Aberto"` com mais de 7 dias → `"Atrasado"`
- `"Em Andamento"` com mais de 15 dias → `"Atrasado"`
- Qualquer outro caso → `"No Prazo"`

## O que voce precisa fazer

1. Crie `src/statusChamado.test.js` convertendo os cenarios Gherkin abaixo em testes Jest
2. Rode `npx jest` — todos devem **falhar** (RED)
3. Implemente `src/statusChamado.js`
4. Rode `npx jest` novamente — todos devem **passar** (GREEN)

## Cenarios

```gherkin
Cenario: Chamado aberto a mais de 7 dias
  Dado um chamado com status "Aberto"
  E com 10 dias
  Quando o sistema verifica o prazo
  Entao o resultado deve ser "Atrasado"

Cenario: Chamado aberto dentro do prazo
  Dado um chamado com status "Aberto"
  E com 5 dias
  Quando o sistema verifica o prazo
  Entao o resultado deve ser "No Prazo"

Cenario: Chamado em andamento a mais de 15 dias
  Dado um chamado com status "Em Andamento"
  E com 20 dias
  Quando o sistema verifica o prazo
  Entao o resultado deve ser "Atrasado"

Cenario: Chamado em andamento dentro do prazo
  Dado um chamado com status "Em Andamento"
  E com 10 dias
  Quando o sistema verifica o prazo
  Entao o resultado deve ser "No Prazo"
```

## Correspondencia Gherkin → Jest

| Gherkin | Jest |
|---------|------|
| `Cenario` | `it("nome do cenario", () => {})` |
| `Dado` | Preparacao dos dados (variaveis) |
| `E` | Complemento da preparacao |
| `Quando` | Acao (chamar a funcao) |
| `Entao` | Verificacao (`expect`) |

## Dicas

- Cada `it` e um cenario. O `describe` agrupa todos (como "Feature" no Gherkin)
- Use comentarios `// Dado`, `// Quando`, `// Entao` para manter a correspondencia visivel
- A funcao deve ser exportada com `module.exports = statusChamado`
