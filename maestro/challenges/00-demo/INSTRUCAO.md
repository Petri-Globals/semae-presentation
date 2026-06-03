# Desafio 00 — Demo

## Objetivo

Mostrar o Maestro Studio em ação, explicar a sintaxe YAML e rodar um flow completo do começo ao fim.

## O que você vai ver

1. Abrir o Maestro Studio e conectar ao navegador web
2. Criar um novo flow YAML apontando para o site do workshop
3. Demonstrar os comandos: `launchApp`, `tapOn`, `inputText`, `assertVisible`
4. Rodar o flow e explicar a execução passo a passo

## Comandos Maestro que você vai ver

| Comando | O que faz |
|---------|-----------|
| `launchApp` | Abre o site no navegador |
| `tapOn` | Clica em um elemento pelo texto |
| `inputText` | Digita texto em um campo |
| `assertVisible` | Verifica se um texto está visível |
| `takeScreenshot` | Tira um print da tela |

## Pontos de atenção

- A linha `url:` no topo define qual site o Maestro vai abrir
- Os três traços `---` separam a configuração dos comandos
- `clearState: true` limpa os dados do site (cookies, localStorage)
