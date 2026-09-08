import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';
import { defineCollection } from 'astro:content';

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	// Declared even though the site is English-only: Starlight warns on every
	// build when the collection is missing entirely.
	i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
};
