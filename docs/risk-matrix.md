# Matriz de Riscos

**Escala:** Impacto (1 baixo, 2 médio, 3 alto) × Probabilidade de falha (1 baixa, 2 média, 3 alta).
**Risco = Impacto × Probabilidade.** 6–9 = Alto · 3–4 = Médio · 1–2 = Baixo.

| ID | Área / funcionalidade | Impacto | Prob. | Risco | Nível | Justificativa |
|---|---|---|---|---|---|---|
| R-01 | Checkout (concluir compra) | 3 | 2 | 6 | Alto | Fluxo que gera receita; erro aqui bloqueia a venda |
| R-02 | Cálculo de total e imposto | 3 | 2 | 6 | Alto | Valor errado causa prejuízo e perda de confiança |
| R-03 | Login com credenciais válidas | 3 | 1 | 3 | Médio | Sem login ninguém compra, mas é fluxo simples e estável |
| R-04 | Validação de campos do checkout | 2 | 3 | 6 | Alto | Formulários costumam ter regras de borda esquecidas |
| R-05 | Carrinho (adicionar/remover) | 3 | 2 | 6 | Alto | Perda de item ou item errado afeta o pedido |
| R-06 | Detalhe do produto correto | 2 | 3 | 6 | Alto | Bug já confirmado com `problem_user` (BUG-001) |
| R-07 | Ordenação de produtos | 1 | 2 | 2 | Baixo | Conveniência, não bloqueia a compra |
| R-08 | Mensagens de erro de login | 2 | 2 | 4 | Médio | Afeta usabilidade, risco moderado |
| R-09 | Acessibilidade | 2 | 2 | 4 | Médio | Exclui usuários e há exigência legal em muitos contextos |
| R-10 | Layout em mobile | 2 | 2 | 4 | Médio | Boa parte do tráfego de e-commerce é mobile |

## Decisão
Os riscos **Altos** (R-01, 02, 04, 05, 06) viram prioridade de execução e de automação. Se o prazo cair pela metade, os Baixos (R-07) são cortados primeiro, e isso é comunicado explicitamente.
