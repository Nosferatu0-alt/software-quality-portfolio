"""Camada de servico: concentra os endpoints para os testes ficarem legiveis."""
import requests


class BookingClient:
    def __init__(self, base_url: str, timeout: int = 15):
        self.base_url = base_url.rstrip("/")
        self.timeout = timeout
        self.session = requests.Session()
        self.session.headers.update(
            {"Content-Type": "application/json", "Accept": "application/json"}
        )

    def _url(self, path: str) -> str:
        return f"{self.base_url}{path}"

    def auth(self, username: str, password: str) -> requests.Response:
        return self.session.post(
            self._url("/auth"),
            json={"username": username, "password": password},
            timeout=self.timeout,
        )

    def list_bookings(self, **params) -> requests.Response:
        return self.session.get(self._url("/booking"), params=params, timeout=self.timeout)

    def get_booking(self, booking_id: int) -> requests.Response:
        return self.session.get(self._url(f"/booking/{booking_id}"), timeout=self.timeout)

    def create_booking(self, payload: dict) -> requests.Response:
        return self.session.post(self._url("/booking"), json=payload, timeout=self.timeout)

    def update_booking(self, booking_id: int, payload: dict, token: str | None) -> requests.Response:
        headers = {"Cookie": f"token={token}"} if token else {}
        return self.session.put(
            self._url(f"/booking/{booking_id}"), json=payload, headers=headers, timeout=self.timeout
        )

    def delete_booking(self, booking_id: int, token: str | None) -> requests.Response:
        headers = {"Cookie": f"token={token}"} if token else {}
        return self.session.delete(
            self._url(f"/booking/{booking_id}"), headers=headers, timeout=self.timeout
        )
