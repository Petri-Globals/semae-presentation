# Maestro — Consulta Rápida de Comandos

Referência rápida dos comandos Maestro mais usados no workshop. Organizados do mais comum ao mais avançado.

> **Dica importante:** Todo texto em `assertVisible`, `tapOn`, etc. é tratado como **regex**. Se o texto do elemento for `"Chamado #001 registrado com sucesso!"`, use `".*registrado com sucesso.*"` para casar parcialmente.

## Preciso abrir o site

```yaml
url: https://meu-site.com
---
- launchApp
```

Abrir com estado limpo (limpa cookies, dados do navegador, etc.):

```yaml
url: https://meu-site.com
---
- launchApp:
    clearState: true
```

## Preciso clicar em algo na tela

```yaml
- tapOn: "Entrar"
```

Clicar pelo ID do elemento:

```yaml
- tapOn:
    id: botao-submit
```

Clicar por coordenadas:

```yaml
- tapOn:
    point: "50%, 50%"
```

## Preciso digitar texto em um campo

Primeiro clique no campo, depois digite:

```yaml
- tapOn: "Usuário"
- inputText: "admin"
```

## Preciso apagar texto de um campo

```yaml
- eraseText
```

Apagar apenas alguns caracteres:

```yaml
- eraseText: 5
```

## Preciso verificar se algo aparece na tela

```yaml
- assertVisible: "Bem-vindo"
```

```yaml
- assertVisible: ".*registrado com sucesso.*"
```

> Se o texto for parcial, use `.*` (regex wildcard):

## Preciso verificar se algo NÃO aparece na tela

```yaml
- assertNotVisible: "Erro"
```

## Preciso navegar para outra URL

```yaml
- openLink: "https://meu-site.com/dashboard.html"
```

## Preciso rolar a tela

Rolar até encontrar um elemento:

```yaml
- scrollUntilVisible:
    element: "Ver mais"
    direction: DOWN
```

Rolar simples:

```yaml
- scroll
```

## Preciso pressionar uma tecla

```yaml
- pressKey: Enter
```

Outras teclas: `Back`, `Home`, `Volume Up`, `Volume Down`.

## Preciso tirar um print

```yaml
- takeScreenshot: "tela-login"
```

## Preciso esperar algo demorado

Esperar até 30 segundos por um elemento:

```yaml
- extendedWaitUntil:
    visible: "Carregando..."
    timeout: 30000
```

## Preciso reutilizar um fluxo (subflow)

```yaml
- runFlow:
    file: ../subflows/login.yaml
```

## Preciso selecionar uma opção num dropdown

```yaml
- tapOn: "Selecione..."
- tapOn: "Vazamento"
```

## Preciso clicar em um radio button / checkbox

```yaml
- tapOn: "Alta"
```

## Preciso executar JavaScript

```yaml
- evalScript: ${1 + 1}
```

## Preciso repetir uma ação

```yaml
- repeat:
    times: 3
    commands:
      - tapOn: "Próximo"
```

## Preciso tentar de novo se falhar

```yaml
- retry:
    maxRetries: 3
    commands:
      - tapOn: "Salvar"
```

## Preciso usar seletores CSS (web)

```yaml
- tapOn:
    css: ".btn-primary"
- assertVisible:
    css: "#modal-titulo"
```

## Preciso de seletores relacionais

```yaml
- tapOn:
    text: "Editar"
    below: "Perfil"
```