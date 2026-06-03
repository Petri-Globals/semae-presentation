# Desafio 09 — Casos Extremos (Bônus)

## Objetivo

Testar o comportamento do sistema quando o usuário faz algo errado: envia formulários vazios, digita dados inválidos, etc.

## O que você precisa fazer

**Cenário 1 — Login com campos vazios:**
1. Abra a página de login e clique em "Entrar" sem preencher nada
2. Verifique que a mensagem "Campo obrigatório" aparece

**Cenário 2 — Formulário vazio de reportar problema:**
3. Faça login e navegue até "Reportar Problema"
4. Clique em "Enviar Chamado" sem preencher nada
5. Verifique que as mensagens de erro aparecem

**Cenário 3 — Segunda via com matrícula inexistente:**
6. Navegue até "Segunda Via", digite matrícula `00000` e clique em "Consultar"
7. Verifique que "não encontrada" aparece

**Cenário 4 — Busca sem resultados:**
8. Navegue até "Meus Chamados", digite "XYZW" no campo de busca
9. Verifique que "Nenhum chamado encontrado" aparece

## Cenário

```gherkin
Cenário: Login com campos vazios
  Dado que abro a página de login
  Quando clico em "Entrar" sem preencher nada
  Então vejo "Campo obrigatório"

Cenário: Formulário vazio de reportar problema
  Dado que fiz login e naveguei para "Reportar Problema"
  Quando clico em "Enviar Chamado" sem preencher
  Então vejo mensagens de erro

Cenário: Matrícula inexistente
  Quando navego para "Segunda Via" e digito "00000"
  Então vejo "não encontrada"

Cenário: Busca sem resultados
  Quando navego para "Meus Chamados" e digito "XYZW"
  Então vejo "Nenhum chamado encontrado"
```

## Comandos Maestro que você vai usar

| Comando | O que faz |
|---------|-----------|
| `tapOn` | Clica em botões sem preencher nada |
| `assertVisible` | Verifica mensagens de erro |
| `inputText` | Digita dados inválidos |
| `launchApp: { clearState: true }` | Reinicia entre cenários |

## Dicas

- Mensagens de erro podem ter pontuação — use `.*` no `assertVisible`
- Use `launchApp` com `clearState: true` entre os cenários para começar do zero
- Testar o que pode dar errado é tão importante quanto testar o caminho feliz
