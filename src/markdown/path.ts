// Normalise a docs collection entry id into the slug used for its `.md` route.
// Must stay in sync between the markdown endpoint and the Head alternate link.
export function docSlug(id: string): string {
	const stripped = id.replace(/\.(md|mdx)$/i, '');
	if (stripped === '' || stripped === 'index') return 'index';
	return stripped.endsWith('/index') ? stripped.slice(0, -'/index'.length) : stripped;
}
