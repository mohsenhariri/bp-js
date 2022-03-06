PATH := node_modules/.bin:${PATH}
.PHONY: all dev clean dev pyserve
include .env.dev
export

SRC = ./src
DIST = ./dist
PY = python3


cert:
		openssl req -x509 -new -config ./certs/openssl.conf -out ./certs/cert.pem -keyout ./certs/key.pem

dev:
		webpack serve --config webpack.dev.js

clean:
		rm -rf $(DIST)/*

build-dev:
		webpack --config webpack.dev.js

build-prod:
		webpack --config webpack.prod.js

pyserve:
		$(PY) -m http.server --directory $(DIST)
