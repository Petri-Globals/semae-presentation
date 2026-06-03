# Desafio 02 — Login

## Objetivo

Preencher o formulário de login, enviar e verificar que o login foi bem-sucedido.

## O que você precisa fazer

1. Preencha o campo "Usuário" com `admin`
2. Preencha o campo "Senha" com `semae123`
3. Clique em "Entrar"
4. Verifique que "Bem-vindo" aparece na tela

## Comandos Maestro que você vai usar

| Comando | O que faz |
|---------|-----------|
| `tapOn` | Clica em um campo ou botão |
| `inputText` | Digita texto em um campo |
| `assertVisible` | Verifica se um texto aparece |
| `launchApp: { clearState: true }` | Abre o site e limpa dados anteriores |

## Dicas

- O campo "Usuário" e "Senha" são identificados pelo texto da label acima deles
- Lembre-se de usar `.*` no `assertVisible` para casar textos parciais
