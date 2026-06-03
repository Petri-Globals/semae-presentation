# Desafio 08 — Fluxo Completo

## Objetivo

Criar um teste E2E completo que usa subflows para compor um fluxo de ponta a ponta.

## O que você precisa fazer

1. Faça login usando o subflow `../subflows/login.yaml`
2. Reporte um problema: tipo "Esgoto a céu aberto", endereço `Rua Consolação, 300`, descrição `Esgoto transbordando na calçada`, urgência "Alta"
3. Navegue até "Meus Chamados" e verifique que o chamado aparece na listagem
4. Clique no chamado e verifique que o endereço `Rua Consolação, 300` aparece nos detalhes
5. Faça logout usando o subflow `../subflows/logout.yaml`

## Comandos Maestro que você vai usar

| Comando | O que faz |
|---------|-----------|
| `runFlow: { file: }` | Executa um subflow de outro arquivo |
| `tapOn` | Clica em elementos |
| `inputText` | Digita texto |
| `assertVisible` | Verifica resultados |
| `scrollUntilVisible` | Rola para encontrar elemento |

## O que é um subflow?

Um subflow é um flow YAML separado que pode ser reutilizado em outros flows. Em vez de escrever os comandos de login toda vez, você chama o arquivo `login.yaml` com `runFlow`. O caminho do arquivo é relativo ao flow atual.

## Dicas

- O chamado recém-criado terá o tipo "Esgoto a céu aberto" — use isso para encontrá-lo
- Se o chamado não aparecer de imediato, use `scrollUntilVisible`
- O logout redireciona para a página de login
