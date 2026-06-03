# Desafio 05 — Detalhes e Ações

## Objetivo

Navegar da listagem para o detalhe de um chamado, visualizar suas informações e adicionar uma observação.

## O que você precisa fazer

1. Faça login com `admin` / `semae123`
2. Navegue até "Meus Chamados"
3. Clique no chamado `#002` (Falta de água)
4. Verifique que o tipo, status e endereço do chamado aparecem
5. No campo de observação, digite um texto e clique em "Adicionar"
6. Verifique que a mensagem de sucesso aparece
7. Verifique que o texto da observação aparece na lista

## Comandos Maestro que você vai usar

| Comando | O que faz |
|---------|-----------|
| `tapOn` | Clica em links, campos e botões |
| `inputText` | Digita texto no campo de observação |
| `assertVisible` | Verifica textos na tela |

## Dicas

- O chamado #002 é um link — clique no texto "#002"
- Após adicionar a observação, um toast verde aparece brevemente
- Mensagens de toast e observações podem ter pontuação — use `.*` no `assertVisible`
