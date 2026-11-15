# Charter de Teste Exploratório — 001

| Campo | Valor |
|---|---|
| **Missão** | Explorar o fluxo de checkout com dados incomuns para descobrir falhas de validação |
| **Área** | Checkout |
| **Usuário** | `standard_user` e `problem_user` |
| **Duração** | 45 minutos (time-box) |
| **Data / Testadora** | |

## Ideias de exploração
- Campos com apenas espaços, 1 caractere, 200+ caracteres
- Caracteres especiais, acentos, emoji, `<script>`
- CEP com letras, curto, muito longo
- Voltar do resumo para o formulário e conferir se os dados permanecem
- Concluir compra e usar o botão "voltar" do navegador
- Carrinho vazio indo direto ao checkout
- Comparar `standard_user` × `problem_user` no mesmo fluxo

## Notas da sessão
| Hora | Ação | Observação |
|---|---|---|
| | | |

## Resultado
- **Bugs encontrados:** (links para `bug-reports/`)
- **Dúvidas/riscos novos:**
- **Próximo charter sugerido:**
