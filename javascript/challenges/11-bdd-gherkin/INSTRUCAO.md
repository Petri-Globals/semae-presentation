# Desafio 11 — BDD do Gherkin: Converter cenário em teste

> **Solo** — Converta o cenário Gherkin do Dia 1 em um teste Jest real.

## Objetivo

Pegar o cenário escrito em Gherkin (que vimos no Dia 1) e transformá-lo em um teste automatizado usando `describe` e `it` do Jest.

## Lembre-se do Gherkin (Dia 1)

No Dia 1, vimos como escrever cenários de teste usando Gherkin:

```gherkin
Cenário: Calcular conta com consumo na faixa normal
  Dado que o cliente consumiu 15m³ de água
  E a tarifa base é R$ 5,00 por m³
  Quando o sistema calcular a conta
  Então o valor deve ser R$ 87,50
```

Agora vamos converter isso (e mais cenários) para código Jest!

## A correspondência Gherkin → Jest

| Gherkin | Jest |
|---------|------|
| `Cenário` | `it("nome do cenário", () => {})` |
| `Dado` | Preparação dos dados (variáveis) |
| `E` | Complemento da preparação |
| `Quando` | Ação (chamar a função) |
| `Então` | Verificação (`expect`) |

## O que você precisa fazer

Crie o arquivo `src/verificarChamado.test.js` com os seguintes cenários:

### Cenário 1 — Chamado urgente de alto impacto

```gherkin
Cenário: Verificar urgência de chamado com esgoto a céu aberto
  Dado um chamado do tipo "Esgoto a céu aberto"
  E com urgência "Alta"
  Quando o sistema verifica a prioridade
  Então o chamado deve ser classificado como "Emergência"
```

### Cenário 2 — Chamado comum

```gherkin
Cenário: Verificar urgência de chamado com conta com erro
  Dado um chamado do tipo "Conta com erro"
  E com urgência "Média"
  Quando o sistema verifica a prioridade
  Então o chamado deve ser classificado como "Normal"
```

### Cenário 3 — Chamado de baixa prioridade

```gherkin
Cenário: Verificar urgência de chamado com hidrômetro quebrado
  Dado um chamado do tipo "Hidrômetro quebrado"
  E com urgência "Baixa"
  Quando o sistema verifica a prioridade
  Então o chamado deve ser classificado como "Baixa Prioridade"
```

## Função a ser testada

Crie o arquivo `src/verificarChamado.js` com uma função que recebe `tipo` e `urgencia` e retorna a classificação de prioridade:

| Tipo | Urgência | Resultado esperado |
|------|----------|-------------------|
| "Esgoto a céu aberto" | "Alta" | "Emergência" |
| "Conta com erro" | "Média" | "Normal" |
| "Hidrômetro quebrado" | "Baixa" | "Baixa Prioridade" |

## Exemplo de estrutura do teste

```js
const verificarChamado = require("./verificarChamado");

describe("Verificar prioridade de chamado", () => {
  it("deve classificar como Emergência quando esgoto com urgência Alta", () => {
    // Dado
    const tipo = "Esgoto a céu aberto";
    const urgencia = "Alta";

    // Quando
    const resultado = verificarChamado(tipo, urgencia);

    // Então
    expect(resultado).toBe("Emergência");
  });

  // Escreva os outros cenários aqui...
});
```

## Dica

Perceba como o `describe` agrupa os testes (como "Feature" no Gherkin), e cada `it` é um cenário. Os comentários `// Dado`, `// Quando`, `// Então` ajudam a ver a correspondência com o Gherkin.

## Como rodar

```bash
cd javascript
npx jest
```

## Conceito conectado (Dia 1)

- **Ato 2**: "Gherkin" — Dado/Quando/Então em português
- **Ato 4**: "BDD" — Behavior-Driven Development — pensar em comportamento antes de implementar
- **Ato 4**: "ATDD" — Acceptance Test-Driven Development

## Tempo estimado

~15 minutes
