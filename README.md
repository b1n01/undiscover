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

-   The blog frontend built with [Next.js](https://nextjs.org/)
-   The blog backend and database built with [Strapi](https://strapi.io/)
-   The dev environment handled by [Docker](https://www.docker.com/)

### Folder structures

```
| blog/                <-- Next.js app
| cms/                 <-- Strapi backend
| docker-compose.yml   <-- Docker compose
```

## Credentials

The SQLite Stripe database is committed in the repo, so the default user and api token are too:

-   email: b1n01@undiscover.it
-   password: Undiscover-b1n01

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
