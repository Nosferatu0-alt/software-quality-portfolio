# BUG-002 — `POST /auth` responde 200 OK para credenciais inválidas

| Campo | Valor |
|---|---|
| **Status** | Aberto (API de demonstração de terceiros, sem correção prevista) |
| **Severidade** | Média: o cliente da API pode tratar uma falha de login como sucesso |
| **Prioridade** | Média |
| **Frequência** | Sempre (reproduzido em 15/11/2026) |
| **Ambiente** | https://restful-booker.herokuapp.com · Windows · Python 3.15.2 · requests 2.34.2 |
| **Encontrado por** | Lucia Maria Reis Braga, ao executar `tests/test_auth.py` |
| **Teste automatizado** | `test_auth_invalid_credentials_returns_401` (`xfail`, strict) |

## Resumo
Ao autenticar com usuário válido e **senha incorreta**, a API devolve status **200** com uma mensagem de erro no corpo, em vez de um status de erro HTTP.

## Impacto
- Um cliente que decide pelo status code (prática comum) interpreta o login como bem-sucedido.
- A falha só é percebida lendo o corpo da resposta e verificando a ausência do campo `token`.
- Dificulta monitoramento: tentativas de login inválidas não aparecem como erros 4xx nos logs.

## Passos para reproduzir
1. Enviar `POST https://restful-booker.herokuapp.com/auth`
2. Cabeçalho `Content-Type: application/json`
3. Corpo: `{"username": "admin", "password": "errada"}`
4. Observar status e corpo da resposta

Comando usado:
```
python -c "import requests; r=requests.post('https://restful-booker.herokuapp.com/auth', json={'username':'admin','password':'errada'}); print(r.status_code, r.text)"
```

## Resultado esperado
Status **401 Unauthorized** (credenciais inválidas), sem token.

## Resultado atual
```
200 {"reason":"Bad credentials"}
```

## Evidência
Saída do comando acima. Salve um print ou o trecho do terminal em `docs/bug-reports/evidence/BUG-002.png`.

## Observações
- O corpo traz `reason: "Bad credentials"` e **não** traz `token`, então não há acesso indevido: o problema é de contrato HTTP, não de autorização.
- O Restful-Booker é um serviço de prática, e esse comportamento pode ser intencional. Registro como desvio das convenções REST encontrado pelo teste.
- Estratégia de teste: o teste que espera 401 está como `xfail(strict=True)`. Se o serviço for corrigido, ele passa (XPASS) e a suíte falha, avisando para atualizar este relatório. Outro teste valida o comportamento atual (sem token e `reason` presente).

## Histórico
| Data | Status | Nota |
|---|---|---|
| 15/11/2026 | Aberto | Reproduzido e documentado |
