# ADR-001 — Cypress como ferramenta base de automação de UI

- **Status:** Aceita
- **Contexto:** Preciso de automação E2E rápida de configurar, com bom feedback de falhas, para começar a gerar evidências no portfólio.
- **Decisão:** Usar Cypress 15 no SauceDemo como primeira ferramenta.
- **Alternativas consideradas:** Selenium (mais comum em vagas, mais código de infraestrutura), Playwright (moderno, multi-navegador).
- **Consequências:**
  - (+) Esperas automáticas reduzem testes instáveis, o que já tive que tratar no projeto.
  - (+) Vídeo e screenshots de falha prontos para a CI.
  - (−) Roda só em JavaScript e em um navegador por vez, o que justifica o ADR-002.
