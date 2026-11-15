# Testes de API — Restful-Booker (pytest + requests)

Alvo: https://restful-booker.herokuapp.com (API de prática com comportamentos peculiares para investigar).

## Estrutura
```
clients/      camada de servico (um metodo por endpoint)
schemas/      contrato das respostas (JSON Schema)
test_data/    dados externos (CSV) para testes data-driven
tests/        testes por funcionalidade
conftest.py   fixtures: client, token, created_booking (com limpeza)
```

## Como rodar
```bash
cd api/pytest-requests
python -m venv .venv && source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
pytest                 # tudo
pytest -m smoke        # so o fluxo critico
```
Relatório HTML em `reports/report.html`. URL e credenciais podem ser trocadas com `BASE_URL`, `API_USER`, `API_PASS`.

## Decisões
Ver `docs/decisions/ADR-003-api-restful-booker-pytest.md`.

## Defeitos / comportamentos a documentar
Testes marcados `known_bug` + `xfail` registram divergências do serviço. Cada um deve virar um `BUG-XXX` em `docs/bug-reports/` **depois de reproduzido por você**.
