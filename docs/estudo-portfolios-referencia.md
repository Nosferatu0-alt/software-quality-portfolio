# Estudo de portfólios de referência

Quatro repositórios analisados em 13/11/2026 (leitura da página principal e do README; não executei o código deles).

| Repositório | Ponto forte | O que adotamos | O que evitamos |
|---|---|---|---|
| **Sebastian Alatorre** | Mesmo sistema testado por 4 ferramentas, um pipeline por suíte, `docs/decisions`, Makefile, Docker | ADRs em `docs/decisions/`, Makefile, tabela "o que o projeto demonstra", diagrama de arquitetura | Docker/k6 por enquanto: ainda não é o foco |
| **Viktória Tóth** | Multi-módulo: o mesmo sistema por ângulos diferentes (API em 4 stacks, UI, mobile web, performance); comandos de execução na raiz; notas de ambiente | Estrutura por módulo, comandos de execução padronizados, seção de notas de ambiente, Postman + Newman | Gradle e Java/REST Assured: fora do stack |
| **Lili Imerlishvili** | Documentação de QA em volume (casos, cenários, checklists, RTM, planos, relatórios); organização por domínio | Pasta de relatórios de execução, checklists, padrão de documentação por projeto, aviso de confidencialidade | Escala (27+ projetos): para nós, qualidade acima de quantidade |
| **Yogeshhs QA** | Framework de API com camada de serviço, JSON Schema, asserts customizados, limpeza de dados, dados em CSV/JSON | Camada de serviço, JSON Schema, CSV, limpeza automática (já implementados em `api/`) | Notas "9.8/10", "valor de US$ 27 mil", "nível sênior" e placeholders `[Your Name]` no README: soam inflados e enfraquecem a credibilidade |

## Lições transversais
1. **Profundidade em um sistema vale mais que superfície em vários.** Sebastian e Viktória repetem o mesmo sistema com ferramentas diferentes.
2. **Cada suíte com seu CI e badge.** É a prova visível de que roda.
3. **Decisões escritas.** ADRs mostram raciocínio, não só ferramenta.
4. **Comandos de execução na raiz.** Quem avalia consegue rodar em 1 minuto.
5. **Números sem prova não ajudam.** Cite só métricas que o relatório da CI comprova.
