APP_NAME=jabfy-website-dev

.DEFAULT_GOAL := up

.PHONY: up build down restart logs shell del clean

up:
	docker compose up -d

build:
	docker compose up --build -d

down:
	docker compose down

restart:
	docker compose down
	docker compose up --build

logs:
	docker compose logs -f

shell:
	docker exec -it $(APP_NAME) sh

del:
	docker compose down -v --remove-orphans
	docker image prune -f
	docker volume prune -f

clean:
	docker compose down --remove-orphans