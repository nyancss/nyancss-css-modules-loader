.DEFAULT_GOAL := build
.PHONY: build

SHELL := /bin/bash
PATH := $(shell yarn bin):$(PATH)

start-test-server:
	webpack-dev-server --config test/server/webpack.config.js

start-test-server-and-wait:
	make start-test-server &
	wait-on http-get://localhost:2222

test: build start-test-server-and-wait
	cypress run
.PHONY: test

test-watch: build start-test-server-and-wait
	cypress open

build:
	@rm -rf lib
	@tsc
	@prettier "lib/**/*.[jt]s" --write --loglevel silent
	@cp {package.json,*.md} lib

publish: build
	cd lib && npm publish --access public