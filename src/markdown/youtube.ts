import type { MdastPluginDefinition } from 'satteri';

/**
 * Turns a bare YouTube link into a responsive embed.
 *
 * Ported from the unified version in https://github.com/OzzyCzech/starlight onto
 * Sätteri's visitor contract, so the project keeps Astro 7's default Markdown
 * processor instead of falling back to the legacy unified pipeline.
 *
 * `aspect-ratio` rather than a fixed height is not a style preference:
 * Starlight's markdown CSS sets `height: auto` on every iframe, and CSS beats
 * the `height` attribute, so a fixed-height embed collapses to a flat strip.
 * `rel=0` keeps YouTube from suggesting other channels' videos when playback ends.
 */
export default function youtube(): MdastPluginDefinition {
	return {
		name: 'youtube',
		link(node, ctx) {
			if (!URL.canParse(node.url)) return;
			const video = new URL(node.url);

			let id: string | null = null;
			if (video.hostname.endsWith('youtube.com')) {
				id = video.searchParams.get('v');
			} else if (video.hostname.endsWith('youtu.be')) {
				id = video.pathname.slice(1) || null;
			}

			if (!id) return;

			ctx.replaceNode(node, {
				raw:
					`<iframe src="https://www.youtube.com/embed/${id}?rel=0&controls=1" ` +
					`title="YouTube video" loading="lazy" ` +
					`allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ` +
					`allowfullscreen style="aspect-ratio: 16 / 9; width: 100%; border: 0"></iframe>`,
				mdxExpressions: false,
			});
		},
	};
}
