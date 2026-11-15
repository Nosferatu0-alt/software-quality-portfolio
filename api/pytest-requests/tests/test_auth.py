import pytest

from conftest import ADMIN_PASS, ADMIN_USER


@pytest.mark.smoke
def test_auth_valid_credentials_returns_token(client):
    resp = client.auth(ADMIN_USER, ADMIN_PASS)
    assert resp.status_code == 200
    assert resp.json().get("token")


def test_auth_invalid_credentials_does_not_return_token(client):
    resp = client.auth(ADMIN_USER, "senha-errada")
    assert "token" not in resp.json()
    assert resp.json().get("reason") == "Bad credentials"


@pytest.mark.known_bug
@pytest.mark.xfail(
    reason="BUG-002: /auth responde 200 para credenciais invalidas; esperado 401",
    strict=True,  # se o servico for corrigido, o teste passa (XPASS) e a suite avisa
)
def test_auth_invalid_credentials_returns_401(client):
    resp = client.auth(ADMIN_USER, "senha-errada")
    assert resp.status_code == 401
