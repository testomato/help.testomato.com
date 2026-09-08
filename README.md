# help.testomato.com

Testomato's help and documentation, published at [help.testomato.com](https://help.testomato.com/).

## Stack

| | |
| --- | --- |
| [Astro](https://astro.build/) 7 | site framework |
| [Starlight](https://starlight.astro.build/) | documentation theme, used with its default look |
| [starlight-openapi](https://starlight-openapi.vercel.app/) | renders the API reference from the OpenAPI spec at build time |
| Sätteri | Astro 7's default Markdown processor |
| Pagefind | search, built in to Starlight — no index to maintain |
| Expressive Code | code blocks, also built in |
| pnpm | package manager, pinned by `packageManager` in `package.json` |
| Prettier | formatting for JS/TS/CSS only — never Markdown, see below |

No webfonts and no client-side framework: pages ship HTML, CSS and Starlight's own small scripts.

## Getting started

Needs Node.js 24 or newer (`engines.node`) and pnpm.

```shell
pnpm install
pnpm start        # dev server on http://localhost:4321
```

`pnpm install` may stop with `ERR_PNPM_IGNORED_BUILDS`. pnpm refuses to run a
dependency's install scripts until it is named in `pnpm-workspace.yaml`, and
esbuild needs one to link Vite's platform binary. It is already listed there, so
a fresh clone should be fine; if you hit it, `pnpm approve-builds esbuild`.

```shell
pnpm build        # production build into dist/
pnpm preview      # serve that build locally
pnpm typecheck    # astro check
pnpm prettier     # format
pnpm prettier:diff
```

The dev server runs as a single shared daemon, so `astro dev` in a second
terminal takes over the first. `pnpm astro dev status` says what is running,
`pnpm astro dev stop` stops it.

## Writing docs

Pages live in `src/content/docs/`, and the file path is the URL:
`src/content/docs/checks/xpath.md` is served at `/checks/xpath`. Every page needs
a `title`; `sidebar.order` sets its position within a group, `sidebar.label`
overrides the sidebar text and `slug` overrides the URL.

Asides use Starlight's four types — `:::note`, `:::tip`, `:::caution`,
`:::danger` — each taking an optional `[Custom title]`.

**Do not run Prettier over Markdown.** The config uses `proseWrap: "never"`, and
Prettier does not understand `:::` directive fences, so it once joined an
opening fence, its body and the closing `:::` onto one line — which made every
aside swallow the rest of its page. `.prettierignore` and the `prettier` scripts
both exclude Markdown for that reason.

Two extras run over Markdown:

- a bare YouTube link becomes a responsive embed (`src/markdown/youtube.ts`)
- links off `testomato.com` and its subdomains get `target="_blank"` and
  `rel="noopener noreferrer"` (`src/markdown/links.ts`)

Both are written against Sätteri's visitor contract. Adding `remarkPlugins` or
`rehypePlugins` to `astro.config.mjs` would silently swap Sätteri for the legacy
unified processor, so extend the two files instead.

Every page is also served as raw Markdown at `/<slug>.md`, announced by
`<link rel="alternate" type="text/markdown">` from `src/components/Head.astro`.

## API reference

`/api` is generated at build time from `api/testomato.yaml` — nothing is written
into the repository, so there is no regeneration step. Edit the spec and rebuild.
`api/schemas/`, `api/responses/` and `api/mocks/` hold the components it
references.

`src/styles/testomato.css` maps the Testomato design tokens onto Starlight's own
`--sl-*` properties and calms the plugin's default rendering down to match the
rest of the site. It targets the plugin's `sl-openapi-*` class names, which are
not a documented contract — a major starlight-openapi bump is the moment to
re-check that file.

## URLs

`trailingSlash: 'always'` with Astro's default directory output. GitHub Pages
301s `/page` to `/page/` for any directory index whatever the config says, so
'never' would only leave every canonical tag disagreeing with the served URL.

`astro.config.mjs` holds a `redirects` map covering every URL the previous
Docusaurus site served that is no longer a real page. The build is static, so
Astro emits one meta-refresh page per entry. Add to it whenever a page moves,
and give destinations their trailing slash so each is a single hop.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and
publishes it to GitHub Pages. Nothing is run by hand.

The repository's Pages source is **GitHub Actions**, not a branch —
`gh api repos/testomato/help.testomato.com/pages` should report
`build_type: workflow`. `public/CNAME` carries the custom domain and
`public/.nojekyll` stops Pages running the output through Jekyll.

The GitLab mirror at `gitlab.int.wikidi.net` is archived and read-only. GitHub is
the only place to push.
