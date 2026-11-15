# Casos de Teste — Login

**Senha dos usuários de demonstração:** exibida na própria tela de login do site.

---
### TC-LOG-001 — Login com credenciais válidas
- **Requisito:** RF-01 · **Prioridade:** Alta · **Tipo:** Funcional, smoke
- **Pré-condição:** estar na página inicial, deslogada
- **Passos:**
  1. Informar `standard_user` no campo usuário
  2. Informar a senha válida
  3. Clicar em **Login**
- **Resultado esperado:** redirecionar para `/inventory.html` com a lista de produtos visível

### TC-LOG-002 — Senha incorreta
- **Requisito:** RF-02 · **Prioridade:** Alta
- **Pré-condição:** página de login
- **Passos:** informar `standard_user` + senha errada → Login
- **Resultado esperado:** permanecer no login e exibir mensagem de erro informando que usuário e senha não conferem

### TC-LOG-003 — Usuário inexistente
- **Requisito:** RF-02 · **Prioridade:** Média
- **Passos:** informar usuário que não existe + qualquer senha → Login
- **Resultado esperado:** mesma mensagem genérica do TC-LOG-002 (não revelar se o usuário existe)

### TC-LOG-004 — Usuário bloqueado
- **Requisito:** RF-02 · **Prioridade:** Alta
- **Passos:** informar `locked_out_user` + senha válida → Login
- **Resultado esperado:** login negado com mensagem informando que o usuário está bloqueado

### TC-LOG-005 — Campo usuário vazio
- **Requisito:** RF-02 · **Prioridade:** Média
- **Passos:** deixar usuário vazio, preencher senha → Login
- **Resultado esperado:** mensagem informando que o usuário é obrigatório

### TC-LOG-006 — Campo senha vazio
- **Requisito:** RF-02 · **Prioridade:** Média
- **Passos:** preencher usuário, deixar senha vazia → Login
- **Resultado esperado:** mensagem informando que a senha é obrigatória

### TC-LOG-007 — Logout
- **Requisito:** RF-09 · **Prioridade:** Média
- **Pré-condição:** logada como `standard_user`
- **Passos:** abrir o menu lateral → clicar em **Logout**
- **Resultado esperado:** voltar à tela de login; acessar `/inventory.html` diretamente **não** deve exibir produtos sem autenticação