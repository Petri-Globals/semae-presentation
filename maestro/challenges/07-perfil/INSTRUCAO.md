# Desafio 07 — Perfil

> **Solo** — Complete este desafio sem acompanhamento.

## Objetivo

Editar dados do perfil de usuário, salvar e verificar que as alterações persistem ao navegar entre páginas.

## O que você precisa fazer

1. Faça login com `admin` / `semae123`
2. Navegue até "Perfil"
3. Verifique que o nome atual "Carlos Silva" aparece
4. Apague o telefone atual e digite: `(19) 99876-5432`
5. Clique em "Salvar Alterações"
6. Verifique que "Perfil atualizado com sucesso!" aparece
7. Verifique que o telefone `(19) 99876-5432` aparece no campo
8. Navegue até "Meus Chamados"
9. Volte para "Perfil"
10. Verifique que o telefone ainda é `(19) 99876-5432` (os dados persistiram)

## Comandos Maestro que você vai usar

| Comando | O que faz |
|---------|-----------|
| `inputText` | Digita o novo telefone |
| `tapOn` | Clica em botão e links de navegação |
| `assertVisible` | Verifica dados e mensagens |

## Dicas

- Para apagar o campo atual antes de digitar, use `eraseText` seguido de `inputText`
- O telefone persiste no `localStorage` — mesmo navegando para outra página, os dados ficam salvos
- A verificação final (passo 10) é o mais importante: confirma que a edição realmente funcionou

## Dica 1

```yaml
# Para limpar o campo antes de digitar:
- tapOn: "Telefone"
- eraseText
- inputText: "(19) 99876-5432"
```

## Esqueleto do flow

```yaml
url: https://Petri-Globals.github.io/semae-presentation/website/login.html
---
# 1. Faça login

# 2. Navegue até "Perfil"

# 3. Verifique o nome atual

# 4-6. Altere o telefone e salve

# 7. Verifique que o telefone foi atualizado

# 8-9. Navegue para outra página e volte

# 10. Verifique que o telefone ainda está atualizado
```

## Como rodar

```bash
maestro test 07-perfil/flow.yaml
```

## Conceito conectado (Dia 1)

- **Ato 2**: "Bons testes vs ruins" — um teste ruim só verifica que o botão foi clicado; um teste bom verifica que os dados realmente mudaram e persistiram

## Tempo estimado

~15 minutos
