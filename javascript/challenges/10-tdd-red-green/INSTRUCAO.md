# Desafio 10 — TDD Red/Green: classificarConta()

## Objetivo

Escrever testes ANTES de implementar a funcao, ver os testes falharem (RED), depois implementar a funcao e ver os testes passarem (GREEN).

## Regras de negocio

A funcao `classificarConta(consumoM3)` recebe o consumo em metros cubicos e retorna a faixa de consumo:

- Ate 10m3 → `"Economica"`
- 11 a 20m3 → `"Normal"`
- Acima de 20m3 → `"Atencao"`
- Consumo negativo → `null`

## O que voce precisa fazer

1. Crie `src/classificarConta.test.js` com testes para os cenarios acima
2. Rode `npx jest` — todos devem **falhar** (RED)
3. Implemente `src/classificarConta.js`
4. Rode `npx jest` novamente — todos devem **passar** (GREEN)

## Cenario

```gherkin
Cenario: Consumo na faixa economica
  Dado que o consumo foi de 8m3
  Quando o sistema classifica a conta
  Entao a faixa deve ser "Economica"

Cenario: Consumo na faixa normal
  Dado que o consumo foi de 15m3
  Quando o sistema classifica a conta
  Entao a faixa deve ser "Normal"

Cenario: Consumo na faixa de atencao
  Dado que o consumo foi de 25m3
  Quando o sistema classifica a conta
  Entao a faixa deve ser "Atencao"

Cenario: Consumo invalido
  Dado que o consumo e -5
  Quando o sistema classifica a conta
  Entao o resultado deve ser null
```

## Comandos Jest que voce vai usar

| Comando | O que faz |
|---------|-----------|
| `describe("nome", () => {})` | Agrupa testes relacionados |
| `it("descricao", () => {})` | Define um teste individual |
| `expect(valor).toBe(esperado)` | Verifica igualdade |
| `expect(valor).toBeNull()` | Verifica que o valor e null |

## Dicas

- Lembre de testar os limites: 10 (ultimo da Economica), 11 (primeiro da Normal), 20 (ultimo da Normal), 21 (primeiro da Atencao)
- A funcao deve ser exportada com `module.exports = classificarConta`
