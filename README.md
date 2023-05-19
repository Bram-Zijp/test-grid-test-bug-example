## Fails to run tests of context items in Docker

Ensure you have docker installed and running.

- run `npm ci`, `npm run test` for a succeeding local test
- run `npm run test-docker` for a failing docker test
- run `npm run test-docker-retry` which runs jest with retry set to 1. This fails the initial test run but succeeds on the retry.
