SERVICE_NAME=kata-template
install:
	docker-compose run --service-ports --rm $(SERVICE_NAME) npm install
up-dev:
	docker-compose run --service-ports --rm $(SERVICE_NAME) npm run start:dev