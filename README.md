# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

### Installation

```shell script
yarn
```

### Local Development

```shell script
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```shell script
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Continuous Integration

Some common defaults for linting/formatting have been set for you. If you integrate your project with an open source Continuous Integration system (e.g. Travis CI, CircleCI), you may check for issues using the following command.

```
$ yarn ci
```

### Open API generate

```shell
yarn api # generate OpenAPI docs to Markdown files
yarn api.clean # Delete OpenAPI generated files
yarn api.regenerate # Delete and Recreate
yarn api.bundle # Bundle all OpenAPI files to one 
```