import type { APIContext } from 'astro';
import { getCollection, getEntry } from 'astro:content';
import { docSlug } from '../markdown/path';

/**
 * Serves the raw Markdown of every docs page at `/<slug>.md`.
 *
 * The app is behind an nginx that negotiates `Accept: text/markdown`, but the
 * docs are on GitHub Pages, which cannot; an explicit route is how the same
 * thing gets offered here. Announced per page by src/components/Head.astro.
 *
 * Adapted from https://github.com/OzzyCzech/starlight.
 */
export async function getStaticPaths() {
	const docs = await getCollection('docs');
	return docs
		.filter((entry) => !entry.data.draft && docSlug(entry.id) !== '404')
		.map((entry) => ({ params: { slug: docSlug(entry.id) } }));
}

export async function GET({ params }: APIContext) {
	const id = params.slug ?? 'index';
	const entry = (await getEntry('docs', id)) ?? (await getEntry('docs', `${id}/index`));

	if (!entry) {
		return new Response('Not found', { status: 404 });
	}

	return new Response(entry.body ?? '', {
		headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
	});
}
