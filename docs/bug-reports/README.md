# Bug Reports

| ID | Título | Onde | Severidade | Status |
|---|---|---|---|---|
| [BUG-001](BUG-001-problem-user-detalhe-produto-errado.md) | `problem_user` abre detalhe de produto errado | UI (SauceDemo) | Alta | Aberto |
| [BUG-002](BUG-002-auth-credenciais-invalidas-retorna-200.md) | `POST /auth` responde 200 para credenciais inválidas | API (Restful-Booker) | Média | Aberto |
| [BUG-003](BUG-003-delete-booking-retorna-201.md) | `DELETE /booking/{id}` responde 201 Created | API (Restful-Booker) | Baixa | Aberto |

## Como escrevo um bom bug report
1. **Título** com o que acontece e onde.
2. **Passos reproduzíveis**, que qualquer pessoa consiga seguir sem me perguntar nada.
3. **Esperado × atual**, de forma objetiva, com os valores reais observados.
4. **Evidência** (print ou saída do terminal) em `evidence/`.
5. **Severidade** (impacto técnico) separada de **prioridade** (urgência de negócio).
6. **Só relato o que reproduzi.** Hipótese de causa fica marcada como hipótese.

## Candidatos a investigar
Ao explorar `problem_user` e `error_user`, vale checar: imagens dos produtos, botões de adicionar/remover, ordenação e campos do checkout. Só vira BUG-00X o que eu reproduzir e puder evidenciar.

Use o [template](_template.md) para cada novo defeito.
