# ADR-002 — Selenium + pytest com Page Object Model no mesmo sistema

- **Status:** Proposta
- **Contexto:** Selenium é muito pedido em vagas de estágio de QA, e os mesmos cenários já existem em Cypress.
- **Decisão:** Reimplementar os cenários de maior risco (RF-01, RF-05, RF-08) em Selenium + pytest, usando Page Object Model.
- **Por que o mesmo sistema:** comparar as duas ferramentas com os mesmos casos mostra senso crítico, não só familiaridade.
- **Entregável:** tabela comparativa (tempo de escrita, estabilidade, legibilidade, relatório) preenchida com dados reais.
