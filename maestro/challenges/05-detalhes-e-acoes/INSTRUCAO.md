# Desafio 05 — Detalhes e Ações

> **Solo** — Complete este desafio sem acompanhamento.

## Objetivo

Navegar da listagem para o detalhe de um chamado, visualizar suas informações e adicionar uma observação.

## O que você precisa fazer

1. Faça login com `admin` / `semae123`
2. Navegue até "Meus Chamados"
3. Clique no chamado `#002` (Falta de água)
4. Verifique que o tipo "Falta de água" aparece na tela
5. Verifique que o status "Em Andamento" aparece
6. Verifique que o endereço "Av. Brasil, 456" aparece
7. No campo "Adicionar Observação", digite: `Equipe de manutenção confirmada para hoje.`
8. Clique em "Adicionar"
9. Verifique que a mensagem "Observação adicionada com sucesso" aparece
10. Verifique que o texto da observação aparece na lista de observações

## Comandos Maestro que você vai usar

| Comando | O que faz |
|---------|-----------|
| `tapOn` | Clica em links, campos e botões |
| `inputText` | Digita texto no campo de observação |
| `assertVisible` | Verifica textos na tela |
| `scrollUntilVisible` | Rola até encontrar um elemento |

## Dicas

- O chamado #002 é um link — clique no texto "#002"
- O campo de observação é um `textarea` — use `tapOn` no label "Adicionar Observação"
- Após clicar em "Adicionar", um toast verde aparece brevemente na tela
- Use `assertVisible` para verificar tanto o toast quanto o texto na lista

## Esqueleto do flow

```yaml
url: https://Petri-Globals.github.io/semae-presentation/website/login.html
---
# 1. Faça login

# 2. Navegue até "Meus Chamados"

# 3. Clique no chamado #002

# 4. Verifique as informações do chamado

# 5. Adicione uma observação

# 6. Verifique o sucesso
```

## Como rodar

```bash
maestro test 05-detalhes-e-acoes/flow.yaml
```

## Conceito conectado (Dia 1)

- **Ato 3**: "Funcional — Integration" — testamos a navegação entre páginas e a persistência de dados

## Tempo estimado

~15 minutos
