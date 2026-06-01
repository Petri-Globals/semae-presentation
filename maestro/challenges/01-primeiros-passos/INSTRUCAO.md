# Desafio 01 — Primeiros Passos

> **Guiado** — O instrutor faz junto com os participantes.

## Objetivo

Navegar pelo site, clicar em links e verificar que o conteúdo correto aparece na tela. Este é o seu primeiro contato com flows Maestro.

## O que você precisa fazer

1. Abra o site na página de Ajuda
2. Verifique que o título "Perguntas Frequentes" aparece
3. Clique em uma das perguntas do FAQ
4. Verifique que a resposta da pergunta aparece na tela

## Comandos Maestro que você vai usar

| Comando | O que faz |
|---------|-----------|
| `launchApp` | Abre o site no navegador |
| `tapOn` | Clica em um elemento pelo texto |
| `assertVisible` | Verifica se um texto está visível |

## Dicas

- O flow começa com `url:` apontando para a página de ajuda
- Use `tapOn` com o texto exato que aparece no link
- Use `assertVisible` com parte do texto da resposta para verificar

## Esqueleto do flow

```yaml
url: https://Petri-Globals.github.io/semae-presentation/website/ajuda.html
---
# Passo 1: Abra o site
- launchApp

# Passo 2: Verifique que o título "Perguntas Frequentes" aparece
# Dica: use assertVisible

# Passo 3: Clique em uma das perguntas
# Dica: use tapOn com o texto da pergunta

# Passo 4: Verifique que a resposta aparece
# Dica: use assertVisible com parte da resposta
```

## Como rodar

```bash
maestro test 01-primeiros-passos/flow.yaml
```

## Conceito conectado (Dia 1)

- **Ato 5**: "Maestro — Blackbox automation without code"
- **Ato 2**: "O que é um teste" — os três elementos: entrada, ação, resultado esperado

## Tempo estimado

~10 minutos
