# Casos de Teste — Produtos e Carrinho

**Pré-condição geral:** logada como `standard_user`, na página de produtos.

### TC-PRD-001 — Listagem exibe todos os produtos
- **Req.:** RF-03 · **Prioridade:** Média
- **Passos:** observar a lista após o login
- **Esperado:** 6 produtos, cada um com nome, descrição, preço, imagem e botão de adicionar

### TC-PRD-002 — Ordenar por preço (menor → maior)
- **Req.:** RF-03 · **Prioridade:** Baixa
- **Passos:** selecionar "Price (low to high)" no filtro
- **Esperado:** preços em ordem crescente

### TC-PRD-003 — Ordenar por nome (Z → A)
- **Req.:** RF-03 · **Prioridade:** Baixa
- **Passos:** selecionar "Name (Z to A)"
- **Esperado:** nomes em ordem alfabética inversa

### TC-PRD-004 — Abrir detalhe do produto correto
- **Req.:** RF-04 · **Prioridade:** Alta
- **Passos:** clicar no nome de "Sauce Labs Backpack"
- **Esperado:** página de detalhe exibe **Sauce Labs Backpack**
- **Observação:** com `problem_user` este caso **falha** (ver BUG-001)

### TC-PRD-005 — Voltar da página de detalhe
- **Req.:** RF-04 · **Prioridade:** Baixa
- **Passos:** abrir detalhe → clicar em "Back to products"
- **Esperado:** retornar à listagem

---
### TC-CAR-001 — Adicionar um produto ao carrinho
- **Req.:** RF-05 · **Prioridade:** Alta
- **Passos:** clicar em "Add to cart" de um produto
- **Esperado:** botão vira "Remove"; contador do carrinho mostra 1

### TC-CAR-002 — Adicionar vários produtos
- **Req.:** RF-05 · **Prioridade:** Alta
- **Passos:** adicionar 3 produtos diferentes → abrir o carrinho
- **Esperado:** contador mostra 3; carrinho lista exatamente os 3 escolhidos, com preços corretos

### TC-CAR-003 — Remover produto do carrinho
- **Req.:** RF-05 · **Prioridade:** Alta
- **Passos:** adicionar 2 produtos → no carrinho, remover 1
- **Esperado:** item some da lista; contador mostra 1

### TC-CAR-004 — Persistência do carrinho ao navegar
- **Req.:** RF-05 · **Prioridade:** Média
- **Passos:** adicionar produto → voltar à listagem → abrir o carrinho novamente
- **Esperado:** produto continua no carrinho
