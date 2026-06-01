# Desafio 06 — Segunda Via

> **Solo** — Complete este desafio sem acompanhamento.

## Objetivo

Consultar uma conta de água pela matrícula, verificar múltiplos campos de dados e testar com uma matrícula inválida.

## O que você precisa fazer

**Parte A — Matrícula válida:**
1. Faça login com `admin` / `semae123`
2. Navegue até "Segunda Via"
3. Digite a matrícula `12345`
4. Clique em "Consultar"
5. Verifique que os seguintes dados aparecem:
   - Matrícula: `12345`
   - Cliente: `Maria Oliveira`
   - Consumo: `12 m³`
   - Valor com "R$ 85,00"
   - Vencimento: `15/07/2026`

**Parte B — Matrícula inválida:**
6. Volte para "Segunda Via"
7. Digite a matrícula `99999`
8. Clique em "Consultar"
9. Verifique que a mensagem `"Matrícula \"99999\" não encontrada."` aparece

## Comandos Maestro que você vai usar

| Comando | O que faz |
|---------|-----------|
| `inputText` | Digita a matrícula |
| `tapOn` | Clica no botão Consultar |
| `assertVisible` | Verifica dados e mensagens |

## Dicas

- Use `assertVisible` para cada campo de dados — não apenas para um
- A consulta anterior some quando você faz uma nova — verifique o resultado correto a cada vez
- Matrículas válidas para teste: `12345`, `67890`, `11111`, `22222`

## Dica 1

```yaml
# Verifique múltiplos dados:
- assertVisible: "12345"
- assertVisible: "Maria Oliveira"
- assertVisible: "12 m³"
- assertVisible: "85,00"
```

## Esqueleto do flow

```yaml
url: https://Petri-Globals.github.io/semae-presentation/website/login.html
---
# PARTE A: Matrícula válida

# 1. Faça login

# 2. Navegue até "Segunda Via"

# 3-5. Consulte a matrícula 12345 e verifique os dados


# PARTE B: Matrícula inválida

# 6-9. Consulte a matrícula 99999 e verifique o erro
```

## Como rodar

```bash
maestro test 06-segunda-via/flow.yaml
```

## Conceito conectado (Dia 1)

- **Ato 4**: "Pirâmide de testes" — múltiplas assertions no mesmo teste (Service layer)
- **Ato 2**: "O que é um teste" — entrada (matrícula), ação (consultar), resultado esperado (dados da conta)

## Tempo estimado

~15 minutos
