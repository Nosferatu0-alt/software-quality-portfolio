# BUG-003 — `DELETE /booking/{id}` responde 201 Created

| Campo | Valor |
|---|---|
| **Status** | Aberto (API de demonstração de terceiros, sem correção prevista) |
| **Severidade** | Baixa: a exclusão funciona, só o status code é semanticamente incorreto |
| **Prioridade** | Baixa |
| **Frequência** | Sempre (reproduzido em 15/11/2026) |
| **Ambiente** | https://restful-booker.herokuapp.com · Windows · Python 3.15.2 · requests 2.34.2 |
| **Encontrado por** | Lucia Maria Reis Braga, ao validar o fluxo CRUD |
| **Teste automatizado** | `test_delete_booking_returns_204_or_200` (`xfail`, strict) |

## Resumo
Ao excluir uma reserva com token válido, a API responde **201 Created**. O código 201 indica criação de recurso, e não exclusão.

## Impacto
- Clientes que validam o status (esperando 200 ou 204 para exclusão) podem tratar a resposta como erro.
- Confunde quem lê logs ou documentação, pois 201 sugere que algo foi criado.

## Passos para reproduzir
1. Autenticar com `POST /auth` (`admin` / `password123`) e guardar o `token`
2. Criar uma reserva com `POST /booking` e anotar o `bookingid`
3. Enviar `DELETE /booking/{bookingid}` com o cabeçalho `Cookie: token=<token>`
4. Observar o status e o corpo da resposta

## Resultado esperado
Status **204 No Content** (ou **200 OK**).

## Resultado atual
```
201 Created
```

## Evidência
Saída do comando de reprodução. Salve em `docs/bug-reports/evidence/BUG-003.png`.

## Observações
- A exclusão **ocorre de fato**: um `GET` posterior ao mesmo id retorna 404 (coberto por `test_delete_booking_then_get_returns_404`). Por isso a severidade é baixa.
- Como o serviço é de prática, o comportamento pode ser proposital.

## Histórico
| Data | Status | Nota |
|---|---|---|
| 15/11/2026 | Aberto | Reproduzido e documentado |
