# Desafio 02 — Login

> **Guiado → Solo** — Comece acompanhando o instrutor, depois complete sozinho.

## Objetivo

Preencher um formulário de login, enviar e verificar se o login foi bem-sucedido ou se a mensagem de erro aparece.

## O que você precisa fazer

**Parte A — Login válido:**
1. Preencha o campo "Usuário" com `admin`
2. Preencha o campo "Senha" com `semae123`
3. Clique em "Entrar"
4. Verifique que "Bem-vindo" aparece na tela

**Parte B — Login inválido:**
5. Volte para a página de login (ou abra novamente)
6. Preencha o campo "Usuário" com `errado`
7. Preencha o campo "Senha" com `errado`
8. Clique em "Entrar"
9. Verifique que a mensagem "Usuário ou senha incorretos" aparece

## Comandos Maestro que você vai usar

| Comando | O que faz |
|---------|-----------|
| `tapOn` | Clica em um campo ou botão |
| `inputText` | Digita texto em um campo |
| `assertVisible` | Verifica se um texto aparece |
| `launchApp: { clearState: true }` | Abre o site e limpa dados anteriores |

## Dicas

- Para fazer login duas vezes, use `launchApp` com `clearState: true` entre as duas partes
- O site usa `sessionStorage` para manter a sessão. `clearState` limpa tudo.
- O campo "Usuário" e "Senha" são identificados pelo texto da label acima deles

## Esqueleto do flow

```yaml
url: https://Petri-Globals.github.io/semae-presentation/website/login.html
---
# PARTE A: Login válido

# 1. Abra o site com clearState
- launchApp:
    clearState: true

# 2. Clique no campo "Usuário" e digite "admin"

# 3. Clique no campo "Senha" e digite "semae123"

# 4. Clique em "Entrar"

# 5. Verifique que "Bem-vindo" aparece


# PARTE B: Login inválido

# 6. Abra o site novamente com clearState

# 7. Clique no campo "Usuário" e digite "errado"

# 8. Clique no campo "Senha" e digite "errado"

# 9. Clique em "Entrar"

# 10. Verifique que "Usuário ou senha incorretos" aparece
```

## Como rodar

```bash
maestro test 02-login/flow.yaml
```

## Conceito conectado (Dia 1)

- **Ato 2**: "Criando um cenário — bom vs ruim" — um bom teste verifica tanto o sucesso quanto o erro
- **Ato 2**: "Bons testes vs ruins" — testamos o que DEVE e o que NÃO DEVE acontecer

## Tempo estimado

~15 minutos
