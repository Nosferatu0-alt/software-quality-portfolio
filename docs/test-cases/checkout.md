# Casos de Teste — Checkout e usuários especiais

**Pré-condição geral:** logada como `standard_user`, com ao menos 1 produto no carrinho, na etapa de informações do checkout.

### TC-CHK-001 — Nome obrigatório
- **Req.:** RF-06 · **Prioridade:** Alta
- **Passos:** deixar First Name vazio, preencher o resto → Continue
- **Esperado:** erro informando que o nome é obrigatório; não avança

### TC-CHK-002 — Sobrenome obrigatório
- **Req.:** RF-06 · **Prioridade:** Alta
- **Passos:** deixar Last Name vazio → Continue
- **Esperado:** erro informando que o sobrenome é obrigatório

### TC-CHK-003 — CEP obrigatório
- **Req.:** RF-06 · **Prioridade:** Alta
- **Passos:** deixar Postal Code vazio → Continue
- **Esperado:** erro informando que o CEP é obrigatório

### TC-CHK-004 — Dados válidos avançam para o resumo
- **Req.:** RF-06 · **Prioridade:** Alta
- **Passos:** preencher os 3 campos corretamente → Continue
- **Esperado:** abrir a página de resumo do pedido

### TC-CHK-005 — Cálculo de subtotal, imposto e total
- **Req.:** RF-07 · **Prioridade:** Alta
- **Passos:** comprar 2 produtos de preços conhecidos → ver resumo
- **Esperado:** subtotal = soma dos preços; imposto e total coerentes (conferir com cálculo manual, arredondando em 2 casas)
- **Dica:** automatize somando os preços lidos da tela e comparando com o subtotal exibido

### TC-CHK-006 — Concluir a compra
- **Req.:** RF-08 · **Prioridade:** Alta · **Tipo:** Smoke
- **Passos:** no resumo, clicar em **Finish**
- **Esperado:** tela de confirmação do pedido

### TC-CHK-007 — Carrinho esvaziado após a compra
- **Req.:** RF-08 · **Prioridade:** Média
- **Passos:** concluir compra → voltar aos produtos
- **Esperado:** contador do carrinho zerado

---
## Usuários especiais

### TC-USR-001 — `problem_user`: detalhe do produto
- **Req.:** RF-04 · **Prioridade:** Alta
- **Esperado:** detalhe do produto clicado · **Resultado atual:** produto diferente → **BUG-001**

### TC-USR-002 — `problem_user`: adicionar/remover itens e checkout
- **Req.:** RF-05, RF-06 · **Prioridade:** Média · **Tipo:** Exploratório
- **Esperado:** mesmo comportamento do `standard_user`. Investigar e registrar qualquer divergência.

### TC-USR-003 — `performance_glitch_user`: tempo de login
- **Req.:** RF-01 · **Prioridade:** Baixa
- **Esperado:** login concluído em tempo aceitável; registrar o tempo observado e usar espera explícita (não `wait` fixo) no teste
