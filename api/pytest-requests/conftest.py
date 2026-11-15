import csv
import os
from pathlib import Path

import pytest

from clients.booking_client import BookingClient

BASE_URL = os.getenv("BASE_URL", "https://restful-booker.herokuapp.com")
# Credenciais publicas de demonstracao do Restful-Booker; sobrescreva por variavel de ambiente.
ADMIN_USER = os.getenv("API_USER", "admin")
ADMIN_PASS = os.getenv("API_PASS", "password123")
DATA_DIR = Path(__file__).parent / "test_data"


def load_bookings_csv():
    rows = []
    with open(DATA_DIR / "bookings.csv", newline="", encoding="utf-8") as f:
        for r in csv.DictReader(f):
            payload = {
                "firstname": r["firstname"],
                "lastname": r["lastname"],
                "totalprice": int(r["totalprice"]),
                "depositpaid": r["depositpaid"].strip().lower() == "true",
                "bookingdates": {"checkin": r["checkin"], "checkout": r["checkout"]},
            }
            if r["additionalneeds"]:
                payload["additionalneeds"] = r["additionalneeds"]
            rows.append(payload)
    return rows


@pytest.fixture(scope="session")
def client() -> BookingClient:
    return BookingClient(BASE_URL)


@pytest.fixture(scope="session")
def token(client) -> str:
    resp = client.auth(ADMIN_USER, ADMIN_PASS)
    assert resp.status_code == 200, f"Falha ao autenticar: {resp.status_code} {resp.text}"
    tok = resp.json().get("token")
    assert tok, "A resposta de /auth nao trouxe token"
    return tok


@pytest.fixture
def booking_payload() -> dict:
    return load_bookings_csv()[0]


@pytest.fixture
def created_booking(client, token, booking_payload):
    """Cria um booking e garante a limpeza no final (isolamento de dados)."""
    resp = client.create_booking(booking_payload)
    assert resp.status_code == 200, resp.text
    booking_id = resp.json()["bookingid"]
    yield booking_id, booking_payload
    client.delete_booking(booking_id, token)
