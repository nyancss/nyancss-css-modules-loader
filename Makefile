.DEFAULT_GOAL := build
.PHONY: build

SHELL := /bin/bash
PATH := $(shell yarn bin):$(PATH)

start-test-server: build
	webpack-dev-server --config test/server/webpack.config.js &
	wait-on http-get://localhost:2222

test: start-test-server
	cypress run
.PHONY: test

test-watch: start-test-server
	cypress open

build:
	@rm -rf lib
	@tsc
	@prettier "lib/**/*.[jt]s" --write --loglevel silent
	@cp {package.json,*.md} lib

publish: build
	cd lib && npm publish --access public