## How to run the project

1) Install docker and docker compose
In the root folder run `docker-compose up`

To visualize the Swagger API go to
http://localhost:3000

To access the local database go to:
http://localhost:5050/login?next=%2F

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```
