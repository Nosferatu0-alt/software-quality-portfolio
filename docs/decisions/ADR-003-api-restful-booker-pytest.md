# ADR-003 — Testes de API com pytest + requests no Restful-Booker

- **Status:** Aceita
- **Contexto:** O roadmap tinha "Testes de API" em aberto. O Restful-Booker é feito para prática e tem comportamentos peculiares para investigar.
- **Decisão:** Camada de serviço (`clients/`), validação de contrato com JSON Schema, dados externos em CSV e limpeza automática dos dados criados.
- **Por que camada de serviço:** os testes ficam legíveis e uma mudança de endpoint é corrigida em um só lugar.
- **Complemento:** coleção Postman executada com Newman na CI (próxima etapa).
