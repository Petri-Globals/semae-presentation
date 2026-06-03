# Desafio 04 — Filtros e Busca

## Objetivo

Usar filtros de status e busca por texto na listagem de chamados, verificando que os resultados estão corretos.

## O que você precisa fazer

1. Faça login com `admin` / `semae123`
2. Navegue até "Meus Chamados"
3. Filtre por status "Resolvido" e verifique que só chamados resolvidos aparecem
4. Limpe os filtros
5. Busque por "Vazamento" e verifique que só chamados com esse termo aparecem

## Comandos Maestro que você vai usar

| Comando | O que faz |
|---------|-----------|
| `tapOn` | Clica em dropdown e botão |
| `inputText` | Digita no campo de busca |
| `assertVisible` | Verifica que um texto aparece |
| `assertNotVisible` | Verifica que um texto NÃO aparece |

## Dicas

- O dropdown de filtro mostra "Todos os Status" como padrão
- Use `assertNotVisible` para verificar que chamados de outros status desapareceram
- A busca é instantânea — basta digitar para filtrar
