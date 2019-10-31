.PHONY: clean
clean:
	rm -rf ./bin || true

.PHONY: fetch-binary
fetch-binary:
	docker pull keybaseio/client:latest
	docker rm -f keybase-bot-serverless || true
	docker create --name keybase-bot-serverless keybaseio/client:latest
	mkdir -p ./bin
	docker cp keybase-bot-serverless:/usr/bin/keybase ./bin/keybase
	docker rm -f keybase-bot-serverless || true

.PHONY: build
build: fetch-binary
	yarn

.PHONY: deploy
deploy: clean build
	serverless deploy
