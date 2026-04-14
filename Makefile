.PHONY: build up down logs clean restart help

help: ## Показать справку
	@echo "Доступные команды:"
	@echo "  make build    - Собрать Docker образ"
	@echo "  make up       - Запустить контейнер"
	@echo "  make down     - Остановить контейнер"
	@echo "  make logs     - Показать логи"
	@echo "  make restart  - Перезапустить контейнер"
	@echo "  make clean    - Удалить контейнер и образ"

build: ## Собрать Docker образ
	docker-compose build

up: ## Запустить контейнер
	docker-compose up --build

down: ## Остановить контейнер
	docker-compose down

logs: ## Показать логи
	docker-compose logs -f

restart: ## Перезапустить контейнер
	docker-compose down
	docker-compose up --build

clean: ## Удалить контейнер и образ
	docker-compose down --rmi all
	docker system prune -f
