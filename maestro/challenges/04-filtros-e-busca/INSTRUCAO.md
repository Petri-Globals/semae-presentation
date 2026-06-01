# Desafio 04 — Filtros e Busca

> **Solo** — Complete este desafio sem acompanhamento.

## Objetivo

Usar filtros de status e busca por texto na listagem de chamados, verificando que os resultados estão corretos.

## O que você precisa fazer

1. Faça login com `admin` / `semae123`
2. Navegue até "Meus Chamados"
3. **Filtro por status**: Selecione "Resolvido" no dropdown de filtro
4. Verifique que só chamados com status "Resolvido" aparecem
5. **Limpar filtro**: Clique em "Limpar Filtros"
6. **Busca por texto**: Digite "Vazamento" no campo de busca
7. Verifique que só chamados contendo "Vazamento" aparecem

## Comandos Maestro que você vai usar

| Comando | O que faz |
|---------|-----------|
| `tapOn` | Clica em dropdown e botão |
| `inputText` | Digita no campo de busca |
| `assertVisible` | Verifica que um texto aparece |
| `assertNotVisible` | Verifica que um texto NÃO aparece |
| `scrollUntilVisible` | Rola a página para encontrar elemento |

## Dicas

- O dropdown de filtro mostra "Todos os Status" como padrão
- Ao selecionar "Resolvido", chamados com outros status não devem aparecer
- Use `assertNotVisible` para verificar que chamados de outros status desapareceram
- A busca é instantânea — basta digitar para filtrar

## Dica 1

```yaml
# Para selecionar no dropdown de status:
- tapOn: "Todos os Status"
- tapOn: "Resolvido"

# Para limpar filtros:
- tapOn: "Limpar Filtros"
```

## Dica 2

```yaml
# Para verificar que algo NÃO aparece:
- assertNotVisible: "Em Andamento"
```

## Esqueleto do flow

```yaml
url: https://Petri-Globals.github.io/semae-presentation/website/login.html
---
# 1. Faça login

# 2. Navegue até "Meus Chamados"

# 3. Filtre por "Resolvido" e verifique

# 4. Limpe os filtros

# 5. Busque por "Vazamento" e verifique
```

## Como rodar

```bash
maestro test 04-filtros-e-busca/flow.yaml
```

## Conceito conectado (Dia 1)

- **Ato 2**: "Bons testes vs ruins" — testar que algo NÃO aparece é tão importante quanto testar que aparece
- **Ato 3**: "Funcional — Smoke test" — verificar que os filtros funcionam é um teste essencial

## Tempo estimado

~15 minutos
