# BUG-001 — `problem_user` abre detalhe de produto diferente do clicado

| Campo | Valor |
|---|---|
| **Status** | Aberto (site de terceiros, sem correção prevista) |
| **Severidade** | Alta (usuário pode comprar o produto errado) |
| **Prioridade** | Alta |
| **Ambiente** | Chrome (última versão), https://www.saucedemo.com, usuário `problem_user` |
| **Autora** | Lucia Maria Reis Braga |
| **Requisito / Caso** | RF-04 / TC-PRD-004, TC-USR-001 |

## Descrição
Ao clicar no nome de um produto na listagem, a página de detalhe exibe um produto diferente do selecionado.

## Passos para reproduzir
1. Acessar https://www.saucedemo.com
2. Logar com `problem_user` e a senha de demonstração
3. Na listagem, clicar em **Sauce Labs Backpack**
4. Observar o título na página de detalhe

## Resultado esperado
A página de detalhe exibe **Sauce Labs Backpack**.

## Resultado atual
A página exibe **Sauce Labs Fleece Jacket**.

## Evidência
_Adicionar print em `docs/bug-reports/evidence/BUG-001.png`._

## Observações
- Reproduzível sempre.
- Com `standard_user` o comportamento está correto, então o defeito é específico do perfil.
- Teste automatizado que comprova o bug: `it('deve permitir abrir os detalhes do produto correto')` (falha esperada). Dica: marque com uma tag/`// KNOWN BUG` para a CI diferenciar falha esperada de regressão.
