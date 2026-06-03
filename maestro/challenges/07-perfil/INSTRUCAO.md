# Desafio 07 — Perfil

## Objetivo

Editar dados do perfil de usuário, salvar e verificar que as alterações persistem ao navegar entre páginas.

## O que você precisa fazer

1. Faça login com `admin` / `semae123`
2. Navegue até "Perfil"
3. Verifique que o nome atual "Carlos Silva" aparece
4. Apague o telefone atual e digite um novo telefone
5. Clique em "Salvar Alterações"
6. Verifique que a mensagem de sucesso aparece e o telefone foi atualizado
7. Navegue até "Meus Chamados", volte para "Perfil" e verifique que o telefone persistiu

## Cenário

```gherkin
Cenário: Editar telefone e verificar persistência
  Dado que fiz login e naveguei para "Perfil"
  Quando apago o telefone e digito "(19) 99876-5432"
  E clico em "Salvar Alterações"
  Então vejo a mensagem de sucesso
  Quando navego para "Meus Chamados" e volto para "Perfil"
  Então vejo "(19) 99876-5432" no campo de telefone
```

## Comandos Maestro que você vai usar

| Comando | O que faz |
|---------|-----------|
| `tapOn` | Clica em botão e links de navegação |
| `inputText` | Digita o novo telefone |
| `eraseText` | Apaga o campo antes de digitar |
| `assertVisible` | Verifica dados e mensagens |

## Dicas

- Use `eraseText` para limpar o campo antes de digitar o novo valor
- O telefone persiste no `localStorage` — mesmo navegando para outra página, os dados ficam salvos
- A verificação final (voltar ao perfil e confirmar) é a mais importante do teste
