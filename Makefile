
build: components index.js
	@component build --dev

components: component.json
	@component install --dev

test: clean build
	@open http://localhost:9876/test.html

test-server:
	@serve -p 9876

clean:
	rm -fr build components template.js

.PHONY: clean test test-server
