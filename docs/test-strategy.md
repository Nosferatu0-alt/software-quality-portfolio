# Estratégia de Testes — SauceDemo

## 1. Objetivo
Garantir que os fluxos principais de compra do SauceDemo (login, produtos, carrinho, checkout) funcionem corretamente, e registrar os defeitos encontrados de forma clara e reproduzível.

## 2. Sistema sob teste
- **Aplicação:** https://www.saucedemo.com (site de demonstração para prática de QA)
- **Usuários disponíveis:** `standard_user`, `locked_out_user`, `problem_user`, `performance_glitch_user`, `error_user`, `visual_user` (senha pública no próprio site)

## 3. Escopo
**Dentro do escopo**
- Login e logout
- Listagem, ordenação e detalhe de produtos
- Carrinho (adicionar, remover, persistência)
- Checkout (formulário, resumo, cálculo, conclusão)
- Comportamento dos usuários especiais

**Fora do escopo (e por quê)**
- Segurança aprofundada (pentest): site público de terceiros, não há autorização para isso
- Carga/estresse: não é nosso ambiente, pode prejudicar o serviço
- Backend e banco de dados: não temos acesso (ficam no projeto de SQL separado)

## 4. Abordagem (tipos de teste)
| Tipo | Como | Ferramenta |
|---|---|---|
| Funcional (caixa preta) | Casos de teste derivados dos requisitos | Manual + Cypress |
| Regressão | Suíte automatizada rodando a cada push | Cypress + GitHub Actions |
| Sanidade (smoke) | Login + adicionar ao carrinho + concluir compra | Cypress (tag `@smoke`) |
| Exploratório | Sessões com charter e tempo definido | Manual (`docs/exploratory/`) |
| Acessibilidade | Verificação automática de violações | cypress-axe |
| Performance (básico) | Auditoria de página | Lighthouse |
| Compatibilidade | Emulação de viewport mobile | Cypress `viewport` |

## 5. Priorização
Testes priorizados por **risco = impacto × probabilidade** (ver `risk-matrix.md`). O fluxo de compra completo é prioridade máxima, porque é o que gera valor para o negócio.

## 6. Critérios
- **Entrada:** ambiente acessível, usuários de teste válidos, casos de teste revisados.
- **Saída:** 100% dos casos de prioridade Alta executados; nenhum defeito crítico aberto sem justificativa; defeitos documentados em `bug-reports/`.

## 7. Gestão de defeitos
Ciclo: **Aberto → Em análise → Corrigido → Verificado → Fechado** (ou **Reaberto**). Como o SauceDemo é de terceiros, os defeitos ficam documentados como *conhecidos/não corrigíveis por mim*, com teste marcado como falha esperada.

## 8. Riscos do projeto
- Site de terceiros pode mudar sem aviso e quebrar seletores.
- Usuários de comportamento "problemático" são propositais, então é preciso diferenciar defeito real de comportamento intencional da demonstração.

## 9. Ferramentas
Cypress, Node.js, GitHub Actions, cypress-axe, Lighthouse.
