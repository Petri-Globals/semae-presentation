# Desafio 03 — Reportar um Problema

## Objetivo

Preencher um formulário completo com múltiplos campos e validar que o chamado foi registrado com sucesso.

## O que você precisa fazer

1. Faça login com `admin` / `semae123`
2. Navegue até "Reportar Problema"
3. Selecione o tipo "Vazamento" no dropdown
4. Preencha o endereço: `Rua Augusta, 1500`
5. Preencha a descrição: `Vazamento no cruzamento com a Rua Oscar Freire`
6. Selecione a urgência "Alta"
7. Clique em "Enviar Chamado"
8. Verifique que a mensagem "registrado com sucesso" aparece

## Comandos Maestro que você vai usar

| Comando | O que faz |
|---------|-----------|
| `tapOn` | Clica em elementos, dropdowns e botões |
| `inputText` | Digita texto em campos |
| `assertVisible` | Verifica texto na tela |
| `scrollUntilVisible` | Rola a página até encontrar um elemento |

## Dicas

- Para dropdowns, primeiro clique no texto atual e depois clique na opção desejada
- Para radio buttons, use `tapOn` com o texto do label
- A mensagem de sucesso contém o número do chamado — use `.*` no `assertVisible`
- Use `runFlow` do subflow de login se quiser reaproveitar o código
