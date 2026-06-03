# Desafio 06 — Segunda Via

## Objetivo

Consultar uma conta de água pela matrícula e verificar os dados retornados.

## O que você precisa fazer

1. Faça login com `admin` / `semae123`
2. Navegue até "Segunda Via"
3. Digite a matrícula `12345` e clique em "Consultar"
4. Verifique que os dados da conta aparecem: matrícula, cliente, consumo, valor e vencimento
5. Apague a matrícula, digite `99999` e clique em "Consultar"
6. Verifique que a mensagem de erro aparece

## Comandos Maestro que você vai usar

| Comando | O que faz |
|---------|-----------|
| `inputText` | Digita a matrícula |
| `tapOn` | Clica no botão Consultar |
| `assertVisible` | Verifica dados e mensagens |
| `eraseText` | Apaga o campo antes de digitar novamente |

## Dicas

- Verifique cada campo de dados separadamente com `assertVisible`
- O valor aparece como "R$ 85,00" — use `.*` para casar parcialmente
- A mensagem de erro contém a matrícula digitada — use `.*` também
- Para apagar o campo antes de digitar novamente, use `eraseText`
- Matrículas válidas para teste: `12345`, `67890`, `11111`, `22222`
