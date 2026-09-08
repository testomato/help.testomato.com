# help.testomato.com

Testomato's help and documentation site, published at [help.testomato.com](https://help.testomato.com/). Built with [Astro](https://astro.build/) and [Starlight](https://starlight.astro.build/).

Requires Node.js 24 or newer (`engines.node` in `package.json`) and Yarn.

### Installation

```shell
yarn
```

### Local development

```shell
yarn start        # dev server with hot reload
yarn build        # production build into dist/
yarn preview      # serve the production build locally
```

### Checks

```shell
yarn typecheck      # astro check
yarn prettier       # format **/*.{js,mjs,md,mdx}
yarn prettier:diff  # list files that need formatting
```

`yarn check` is not the type checker — yarn v1 reserves that name for its own integrity check. Use `yarn typecheck`.

### Writing docs

Pages live in `src/content/docs/`, and the file path is the URL: `src/content/docs/checks/xpath.md` is served at `/checks/xpath`. Every page needs a `title` in its frontmatter; `sidebar.order` controls its position inside a group.

Asides use Starlight's four types — `:::note`, `:::tip`, `:::caution`, `:::danger`, each accepting an optional `[Custom title]`.

### API reference

The API reference at `/api` is rendered at build time by [starlight-openapi](https://starlight-openapi.vercel.app/) directly from `api/testomato.yaml`. Nothing is generated into the repository, so there is no regeneration step — edit the spec and rebuild.

### Redirects

`astro.config.mjs` holds a `redirects` map covering every URL the previous Docusaurus site served that is no longer a real page. The build is static, so Astro emits one meta-refresh page per entry. Add to it whenever a page moves.

### Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. There is nothing to run by hand.

The repository's Pages source must be set to **GitHub Actions** rather than a branch. `public/CNAME` carries the custom domain and `public/.nojekyll` stops Pages from running the output through Jekyll.
