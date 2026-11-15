import pytest
from jsonschema import validate

from conftest import load_bookings_csv
from schemas.booking_schema import BOOKING_SCHEMA, CREATE_RESPONSE_SCHEMA


@pytest.mark.smoke
@pytest.mark.parametrize("payload", load_bookings_csv(), ids=lambda p: p["firstname"])
def test_create_booking_data_driven(client, token, payload):
    resp = client.create_booking(payload)
    assert resp.status_code == 200
    body = resp.json()
    validate(body, CREATE_RESPONSE_SCHEMA)
    assert body["booking"]["firstname"] == payload["firstname"]
    assert body["booking"]["totalprice"] == payload["totalprice"]
    client.delete_booking(body["bookingid"], token)  # limpeza


def test_get_booking_returns_created_data(client, created_booking):
    booking_id, payload = created_booking
    resp = client.get_booking(booking_id)
    assert resp.status_code == 200
    validate(resp.json(), BOOKING_SCHEMA)
    assert resp.json()["lastname"] == payload["lastname"]


def test_list_bookings_contains_created_id(client, created_booking):
    booking_id, _ = created_booking
    resp = client.list_bookings()
    assert resp.status_code == 200
    assert booking_id in [b["bookingid"] for b in resp.json()]


def test_update_booking_with_token(client, token, created_booking):
    booking_id, payload = created_booking
    updated = {**payload, "firstname": "Atualizada", "totalprice": payload["totalprice"] + 10}
    resp = client.update_booking(booking_id, updated, token)
    assert resp.status_code == 200
    assert resp.json()["firstname"] == "Atualizada"


def test_update_booking_without_token_is_forbidden(client, created_booking):
    booking_id, payload = created_booking
    resp = client.update_booking(booking_id, payload, token=None)
    assert resp.status_code == 403


def test_delete_booking_then_get_returns_404(client, token, booking_payload):
    booking_id = client.create_booking(booking_payload).json()["bookingid"]
    resp = client.delete_booking(booking_id, token)
    # O servico costuma responder 201 no DELETE (peculiaridade); aceitamos 200/201/204 e anotamos.
    assert resp.status_code in (200, 201, 204)
    assert client.get_booking(booking_id).status_code == 404


def test_get_nonexistent_booking_returns_404(client):
    assert client.get_booking(99999999).status_code == 404
