# Desafio 03 — Reportar um Problema

> **Solo** — Complete este desafio sem acompanhamento.

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

- Para o dropdown, use `tapOn` com o texto do option desejado (ex: "Vazamento")
- Para o radio de urgência, use `tapOn` com o texto do label (ex: "Alta")
- Use `runFlow` do subflow de login se quiser reaproveitar o código
- Se o botão "Enviar Chamado" não estiver visível, use `scrollUntilVisible` antes de clicar

## Dica 1

```yaml
# Para selecionar no dropdown:
- tapOn: "Selecione..."
- tapOn: "Vazamento"

# Para selecionar o radio:
- tapOn: "Alta"
```

## Dica 2

```yaml
# Se precisar rolar até o botão:
- scrollUntilVisible:
    element: "Enviar Chamado"
    direction: DOWN
```

## Esqueleto do flow

```yaml
url: https://Petri-Globals.github.io/semae-presentation/website/login.html
---
# 1. Faça login (use o subflow ou escreva os comandos aqui)

# 2. Clique em "Reportar Problema"

# 3. Preencha o formulário completo

# 4. Envie e verifique o sucesso
```

## Como rodar

```bash
maestro test 03-reportar-problema/flow.yaml
```

## Conceito conectado (Dia 1)

- **Ato 3**: "Funcional — E2E" — testamos o fluxo completo de um formulário
- **Ato 2**: "Abordagens — Blackbox" — testamos sem olhar o código, pela interface

## Tempo estimado

~15 minutos
