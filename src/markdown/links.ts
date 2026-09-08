import type { HastPluginDefinition } from 'satteri';

/** Anything on testomato.com or one of its subdomains counts as ours. */
function isOurs(hostname: string): boolean {
	return hostname === 'testomato.com' || hostname.endsWith('.testomato.com');
}

/**
 * Opens links that leave testomato.com in a new tab, with `rel="noopener
 * noreferrer"` so the target cannot reach back through `window.opener` or read
 * the referrer.
 *
 * Replaces rehype-external-links, which needs the legacy unified processor.
 * The `filter` is applied on Sätteri's Rust side, so only anchors cross into JS.
 */
export default function links(): HastPluginDefinition {
	return {
		name: 'external-links',
		element: {
			filter: ['a'],
			visit(node, ctx) {
				const href = node.properties?.href;
				if (typeof href !== 'string' || !URL.canParse(href)) return;
				if (isOurs(new URL(href).hostname)) return;

				ctx.setProperty(node, 'target', '_blank');
				ctx.setProperty(node, 'rel', ['noopener', 'noreferrer']);
			},
		},
	};
}
