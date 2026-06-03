# Desafio 01 — Primeiros Passos

## Objetivo

Navegar pelo site, clicar em links e verificar que o conteúdo correto aparece na tela. Este é o seu primeiro contato com flows Maestro.

## O que você precisa fazer

1. Abra o site na página de Ajuda
2. Verifique que o título "Perguntas Frequentes" aparece
3. Clique em uma das perguntas do FAQ
4. Verifique que a resposta da pergunta aparece na tela

## Cenário

```gherkin
Cenário: Verificar resposta do FAQ
  Dado que abro a página de Ajuda
  Quando clico em "Como solicitar uma ligação nova de água?"
  Então vejo a resposta da pergunta na tela
```

## Comandos Maestro que você vai usar

| Comando | O que faz |
|---------|-----------|
| `launchApp` | Abre o site no navegador |
| `tapOn` | Clica em um elemento pelo texto |
| `assertVisible` | Verifica se um texto está visível |

## Dicas

- O flow começa com `url:` apontando para a página de ajuda
- Use `tapOn` com o texto exato que aparece no link
- Para `assertVisible`, lembre-se: o Maestro usa regex. Se o texto for parcial, use `.*` antes e depois
