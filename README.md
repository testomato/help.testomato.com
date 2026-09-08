# help.testomato.com

Testomato's help and documentation site, published at [help.testomato.com](https://help.testomato.com/). Built with [Docusaurus](https://docusaurus.io/) 3.

Requires Node.js 24 or newer (`engines.node` in `package.json`) and Yarn.

### Installation

```shell
yarn
```

### Local development

```shell
yarn start        # dev server with hot reload
yarn build        # production build into build/
yarn serve        # serve the production build locally
yarn clear        # clear the Docusaurus cache when things go stale
```

Most changes are reflected live without restarting the dev server.

### Checks

```shell
yarn typecheck      # tsc
yarn prettier       # format **/*.{js,md}
yarn prettier:diff  # list files that need formatting
```

### API reference

The API reference under `docs/api/` is **generated** from the OpenAPI spec in `api/testomato.yaml` — edit the spec, not the generated `.mdx` and `.json` files, then regenerate.

```shell
yarn api            # generate docs/api/ from api/testomato.yaml
yarn api.clean      # delete the generated files
yarn api.regenerate # clean + generate
yarn api.mocks      # build OpenAPI components from the mocks in api/mocks/
```

The generated output is committed: each page's `.mdx` does `require("./<page>.ParamsDetails.json")`, so a fresh clone will not build without those sidecar files.

### Deployment

```shell
yarn deploy
```

Builds the site and pushes it to the `gh-pages` branch. `GIT_USER` and `USE_SSH` are not needed — Docusaurus infers SSH from the `origin` remote URL, and `organizationName` / `projectName` come from `docusaurus.config.ts`. If you clone over HTTPS instead, you will need `GIT_USER=<your GitHub username>`.
