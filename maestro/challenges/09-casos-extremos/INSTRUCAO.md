# Desafio 09 — Casos Extremos (Bônus)

> **Bônus** — Para quem terminar rápido. Teste situações de erro e edge cases.

## Objetivo

Testar o comportamento do sistema quando o usuário faz algo errado: envia formulários vazios, digita dados inválidos, etc.

## O que você precisa fazer

**Cenário 1 — Login com campos vazios:**
1. Abra a página de login
2. Clique em "Entrar" sem preencher nada
3. Verifique que aparece a mensagem "Campo obrigatório" em ambos os campos

**Cenário 2 — Formulário vazio de reportar problema:**
4. Faça login e navegue até "Reportar Problema"
5. Clique em "Enviar Chamado" sem preencher nada
6. Verifique que as mensagens de erro aparecem (4 campos inválidos)

**Cenário 3 — Segunda via com matrícula inexistente:**
7. Navegue até "Segunda Via"
8. Digite matrícula `00000`
9. Clique em "Consultar"
10. Verifique que "não encontrada" aparece

**Cenário 4 — Busca sem resultados:**
11. Navegue até "Meus Chamados"
12. Digite "XYZW" no campo de busca
13. Verifique que "Nenhum chamado encontrado" aparece

## Comandos Maestro que você vai usar

| Comando | O que faz |
|---------|-----------|
| `tapOn` | Clica em botões sem preencher nada |
| `assertVisible` | Verifica mensagens de erro |
| `inputText` | Digita dados inválidos |
| `launchApp: { clearState: true }` | Reinicia entre cenários |

## Por que isso é importante?

Testar o que pode dar errado é tão importante quanto testar o caminho feliz. Se o usuário esquecer de preencher um campo, o sistema deve mostrar uma mensagem clara em vez de simplesmente não fazer nada.

## Conceito conectado (Dia 1)

- **Ato 1**: "Trade-offs — edge cases" — situações incomuns que podem causar bugs
- **Ato 4**: "Ciclo de vida de um bug" — bugs nascem de edge cases não testados

## Tempo estimado

~15 minutos (bônus)
