# Desafio 08 — Fluxo Completo

> **Solo** — Este é o desafio final de Maestro. Use tudo que aprendeu!

## Objetivo

Criar um teste E2E completo que usa subflows para compor um fluxo de ponta a ponta.

## O que você precisa fazer

1. **Login** (usando o subflow `../subflows/login.yaml`)
2. **Reportar um problema**: tipo "Esgoto a céu aberto", endereço `Rua Consolação, 300`, descrição `Esguo transbordando na calçada`, urgência "Alta"
3. Navegar até "Meus Chamados"
4. Verificar que o chamado recém-criado aparece na listagem
5. Clicar no chamado para ver os detalhes
6. Verificar que o endereço `Rua Consolação, 300` aparece
7. **Logout** (usando o subflow `../subflows/logout.yaml`)

## Comandos Maestro que você vai usar

| Comando | O que faz |
|---------|-----------|
| `runFlow: { file: }` | Executa um subflow de outro arquivo |
| `tapOn` | Clica em elementos |
| `inputText` | Digita texto |
| `assertVisible` | Verifica resultados |
| `scrollUntilVisible` | Rola para encontrar elemento |

## O que é um subflow?

Um subflow é um flow YAML separado que pode ser reutilizado em outros flows. Em vez de escrever os comandos de login toda vez, você pode chamar o arquivo `login.yaml` com `runFlow`.

## Dicas

- Use `runFlow` para o login e logout — não escreva os comandos novamente
- O caminho do subflow é relativo ao flow atual: `../subflows/login.yaml`
- O chamado recém-criado terá o tipo "Esgoto a céu aberto" — use isso para encontrá-lo na listagem
- O logout redireciona para a página de login — verifique que "Usuário" aparece (indica que saiu)

## Dica 1

```yaml
# Para usar o subflow de login:
- runFlow:
    file: ../subflows/login.yaml
```

## Dica 2

```yaml
# Para usar o subflow de logout:
- runFlow:
    file: ../subflows/logout.yaml
```

## Esqueleto do flow

```yaml
url: https://Petri-Globals.github.io/semae-presentation/website/login.html
---
# 1. Login usando subflow

# 2. Reportar problema

# 3. Verificar na listagem

# 4. Abrir detalhes

# 5. Verificar detalhes

# 6. Logout usando subflow
```

## Como rodar

```bash
maestro test 08-fluxo-completo/flow.yaml
```

## Conceito conectado (Dia 1)

- **Ato 3**: "Funcional — E2E" — o topo da pirâmide de testes
- **Ato 4**: "Pirâmide de testes" — testes E2E são caros mas essenciais para fluxos críticos
- **Ato 5**: "CI/CD" — este tipo de teste roda em pipelines de deployed

## Tempo estimado

~20 minutos
