.PHONY: help install-ui test-ui test-ui-open install-api test-api test-all

help:
	@echo "make install-ui   - instala dependencias do Cypress"
	@echo "make test-ui      - roda Cypress (headless)"
	@echo "make test-ui-open - abre o Cypress interativo"
	@echo "make install-api  - instala dependencias da API (pytest)"
	@echo "make test-api     - roda os testes de API"
	@echo "make test-all     - roda UI e API"

install-ui:
	cd cypress-saucedemo && npm install

test-ui:
	cd cypress-saucedemo && npx cypress run

test-ui-open:
	cd cypress-saucedemo && npx cypress open

install-api:
	cd api/pytest-requests && python -m pip install -r requirements.txt

test-api:
	cd api/pytest-requests && python -m pytest

test-all: test-ui test-api
