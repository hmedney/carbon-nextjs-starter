# Carbon NextJS starter app

Bare-bones app with [NextJS](https://nextjs.org/) and IBM's [Carbon Design System]().

### Quick start

1. Install dependencies (NodeJS 14+)
   ```sh
   yarn
   ```
1. Start dev server
   ```sh
   yarn dev
   ```
1. Open http://localhost:8000

### Build container

The [Dockerfile](Dockerfile) builds a minimal image using staged builds.

```sh
# build prod image locally
docker build . -t nextjs-carbon-starter

# start (and allow termination via CTRL-C)
docker run -it -p 3000:3000 nextjs-carbon-starter
```
