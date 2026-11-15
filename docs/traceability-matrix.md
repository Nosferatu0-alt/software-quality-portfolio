# Matriz de Rastreabilidade

## Requisitos (derivados do comportamento esperado do site)
| ID | Requisito |
|---|---|
| RF-01 | O sistema deve permitir login com usuário e senha válidos |
| RF-02 | O sistema deve bloquear login inválido ou de usuário bloqueado, com mensagem clara |
| RF-03 | O sistema deve listar produtos e permitir ordenação |
| RF-04 | O sistema deve exibir o detalhe correto do produto clicado |
| RF-05 | O sistema deve permitir adicionar e remover produtos do carrinho |
| RF-06 | O sistema deve validar os dados obrigatórios do checkout |
| RF-07 | O sistema deve calcular corretamente subtotal, imposto e total |
| RF-08 | O sistema deve concluir a compra e confirmar o pedido |
| RF-09 | O sistema deve permitir logout |

## Rastreabilidade
Preencha a coluna **Spec Cypress** com o nome real do arquivo/teste do seu projeto.

| Requisito | Casos de teste | Prioridade | Spec Cypress | Status |
|---|---|---|---|---|
| RF-01 | TC-LOG-001 | Alta | _a preencher_ | Automatizado |
| RF-02 | TC-LOG-002, 003, 004, 005, 006 | Alta | _a preencher_ | Automatizado |
| RF-09 | TC-LOG-007 | Média | _a preencher_ | A fazer |
| RF-03 | TC-PRD-001, 002, 003 | Média | _a preencher_ | A fazer |
| RF-04 | TC-PRD-004, TC-USR-001 | Alta | _a preencher_ | Falha esperada (BUG-001) |
| RF-05 | TC-CAR-001 a 004 | Alta | _a preencher_ | A fazer |
| RF-06 | TC-CHK-001 a 004 | Alta | _a preencher_ | A fazer |
| RF-07 | TC-CHK-005 | Alta | _a preencher_ | A fazer |
| RF-08 | TC-CHK-006, 007 | Alta | _a preencher_ | A fazer |

> **nota de aprendizagem-lucia** a matriz mostra que cada requisito tem teste (nada ficou sem cobertura) e que cada teste existe por um motivo (nada é teste "solto"). Quando o requisito muda, dá para ver exatamente quais casos revisar.
