# Desafio 00 — Demo

> **Instrutor resolve na tela.** Os participantes assistem e acompanham.

## Objetivo

Mostrar o Maestro Studio em ação, explicar a sintaxe YAML e rodar um flow completo do começo ao fim. Os participantes devem entender o que cada comando faz e como o Maestro interage com o site.

## O que você vai fazer

1. Abrir o Maestro Studio
2. Conectar ao navegador web
3. Criar um novo flow YAML apontando para o site do workshop
4. Demonstrar os comandos: `launchApp`, `tapOn`, `inputText`, `assertVisible`
5. Rodar o flow e mostrar a execução passo a passo
6. Explicar a estrutura de um flow (config `url:` + comandos após `---`)

## Flow de demonstração

```yaml
url: https://Petri-Globals.github.io/semae-presentation/website/login.html
---
- launchApp:
    clearState: true
- tapOn: "Usuário"
- inputText: "admin"
- tapOn: "Senha"
- inputText: "semae123"
- tapOn: "Entrar"
- assertVisible: "Bem-vindo"
- tapOn: "Meus Chamados"
- assertVisible: "Meus Chamados"
- tapOn: "Ajuda"
- assertVisible: "Perguntas Frequentes"
- tapOn: "Como solicitar uma ligação nova de água?"
- assertVisible: "Dirija-se a uma unidade"
- takeScreenshot: "demo-finalizado"
```

## Pontos a explicar durante a demo

- A linha `url:` no topo define qual site o Maestro vai abrir
- Os três traços `---` separam a configuração dos comandos
- `tapOn` clica em um elemento pelo texto visível
- `inputText` digita texto em um campo
- `assertVisible` verifica se um texto aparece na tela
- `clearState: true` limpa os dados do site (cookies, localStorage)
- `takeScreenshot` tira um print para conferência

## Tempo estimado

~20 minutos
