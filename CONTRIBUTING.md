# Como contribuir e como este repositório é organizado

## Convenções
- **Commits:** `tipo: descrição curta` (`test:`, `docs:`, `fix:`, `ci:`, `chore:`)
- **Casos de teste:** `TC-<MÓDULO>-<NNN>` · **Bugs:** `BUG-<NNN>` · **Requisitos:** `RF-<NN>`
- **Nomes de teste automatizado:** devem citar o ID do caso (`TC-LOG-001 ...`) para a rastreabilidade
- **Falha esperada:** teste de bug conhecido é marcado (`xfail` no pytest / comentário `KNOWN BUG-XXX` no Cypress) com o ID do bug

## Antes de abrir um PR
1. Os testes passam localmente.
2. Casos novos entram em `docs/test-cases/` e na matriz de rastreabilidade.
3. Bugs novos têm relatório reproduzível em `docs/bug-reports/`.

Sugestões e críticas são bem-vindas, por *issue* ou *pull request*.
