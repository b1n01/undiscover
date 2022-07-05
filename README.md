# Undiscover

Undiscover is my secret drawer, where I put my favorite songs.

## <a name="getting-started" />Getting started

Spin up the environment with:

```bash
docker-compose up
```

Your local copy of the blog will be served on [http://localhost:3000](http://localhost:3000). Visit [http://localhost:1337](http://localhost:1337) to access the cms admin page.

## Overview

This monorepo holds three main components:

- The blog frontend built with [Next.js](https://nextjs.org/)
- The blog backend and database built with [Strapi](https://strapi.io/)
- The dev environment handled by [Docker](https://www.docker.com/)

### Folder structures

```
| blog/                <-- Next.js app
| cms/                 <-- Strapi backend
| docker-compose.yml   <-- Docker compose
```

## Credentials

The SQLite Stripe database is committed in the repo, so the default user and api token are too: 

- email: b1n01@undiscover.it
- password: Undiscover-b1n01
- api token: 6dd8fb4c979f376c83c8e376b5ec10bcf15252ec343e3831d5d7a20b6ea8d1249a6651395fd92d886860d1d045c251e6d3a93e2c408005e69a94dbb291b9bd20791e772d230605699446569ef682b330a04d9abd4e97d2abe6b7f7b8636be5a9c44201ecc28d8c4a78b84b23dd57e52b180b8e26a15a40bd983531b190a9bf95

You can use the mail and password to access the Stripe dashboard, and the api token to query data from the
`/api/` endpoint.

### Database

SQLite is used as database, and it's file is stored in `{REPO-PATH}/cms/database/data/data.db`. This file is committed in this repository, to drop all existing content (data and authentication) simply delete it it.

## Development

First run your local servers as described in the [Getting Started](#getting-started) section. Now both the Next.js app and the Strapi backend are watching for changes.

### Logs

To access logs use the docker built-in logs function:

```bash
docker logs undiscover-blog
docker logs undiscover-cms
```

## Deploy

To prepare the repo to be released run:

```bash
docker exec undiscover-blog yarn run publish
```

Now you can commit and push with:

```bash
git add blog/out && git commit -m "Build" && git push
```

## Note
[Yarn](https://yarnpkg.com/) is used for both blog and cms as suggested by the Stripe documentation.
