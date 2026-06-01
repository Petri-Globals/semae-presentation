# Desafio 10 — TDD Red/Green: calcularContaDeAgua()

> **Solo** — Vivencie o ciclo Red → Green do TDD.

## Objetivo

Escrever testes ANTES de implementar a função, ver os testes falharem (RED), depois implementar a função e ver os testes passarem (GREEN).

## Contexto

A SEMAE precisa de uma função que calcula o valor da conta de água com base no consumo e na tarifa. A regra é:

- **Consumo até 10m³**: valor fixo de tarifa × 10 (tarifa mínima), independente do consumo real
- **Consumo acima de 10m³**: tarifa mínima + (consumo - 10) × tarifa × 1.5 (faixa de excesso)
- **Consumo negativo ou tarifa negativa**: retorna 0

### Exemplos

| Consumo (m³) | Tarifa (R$/m³) | Cálculo | Resultado |
|-------------|----------------|---------|-----------|
| 8 | 5.00 | 5 × 10 = 50.00 | 50.00 |
| 10 | 5.00 | 5 × 10 = 50.00 | 50.00 |
| 15 | 5.00 | 50 + (5 × 5 × 1.5) = 50 + 37.5 | 87.50 |
| 25 | 7.00 | 70 + (15 × 7 × 1.5) = 70 + 157.5 | 227.50 |
| 0 | 5.00 | 5 × 10 = 50.00 | 50.00 |
| -5 | 5.00 | inválido | 0 |
| 10 | -3 | inválido | 0 |

## Passo 1 — RED (Escrever os testes primeiro)

Crie o arquivo `src/calcularContaDeAgua.test.js` e escreva os testes:

```js
const calcularContaDeAgua = require("./calcularContaDeAgua");

describe("calcularContaDeAgua", () => {
  it("deve retornar a tarifa mínima para consumo até 10m³", () => {
    // Exemplo: 8m³ com tarifa R$5 → R$50.00
  });

  it("deve retornar a tarifa mínima exatamente no limite de 10m³", () => {
    // Exemplo: 10m³ com tarifa R$5 → R$50.00
  });

  it("deve calcular o valor com excesso para consumo acima de 10m³", () => {
    // Exemplo: 15m³ com tarifa R$5 → R$87.50
  });

  it("deve calcular corretamente com valores maiores", () => {
    // Exemplo: 25m³ com tarifa R$7 → R$227.50
  });

  it("deve retornar 0 para consumo negativo", () => {
  });

  it("deve retornar 0 para tarifa negativa", () => {
  });
});
```

Rode os testes:
```bash
npx jest
```

Todos devem **falhar** (RED) — isso é esperado! A função ainda não existe.

## Passo 2 — GREEN (Implementar a função)

Crie o arquivo `src/calcularContaDeAgua.js` e implemente a função:

```js
function calcularContaDeAgua(consumoM3, tarifaPorM3) {
  // Sua implementação aqui
}

module.exports = calcularContaDeAgua;
```

Rode os testes novamente:
```bash
npx jest
```

Todos devem **passar** (GREEN)!

## Comandos Jest que você vai usar

| Comando | O que faz |
|---------|-----------|
| `describe("nome", () => {})` | Agrupa testes relacionados |
| `it("descrição", () => {})` | Define um teste individual |
| `expect(valor).toBe(esperado)` | Verifica igualdade |
| `expect(valor).toBeCloseTo(esperado, 2)` | Verifica números decimais |

## Dica

Para comparar números decimais (como 87.50), use `toBeCloseTo` em vez de `toBe`:

```js
expect(calcularContaDeAgua(15, 5)).toBeCloseTo(87.50, 2);
```

## Como rodar

```bash
cd javascript
npx jest
```

## Conceito conectado (Dia 1)

- **Ato 4**: "TDD" — Test-Driven Development: escrever o teste primeiro, implementar depois
- **Ato 2**: "O que é um teste" — entrada (consumo + tarifa), ação (calcular), resultado esperado (valor da conta)

## Tempo estimado

~15 minutos
