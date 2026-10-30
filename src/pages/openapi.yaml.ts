import {bundle} from '@readme/openapi-parser';
import {root} from 'astro:config/server';
import {stringify} from 'yaml';

/**
 * Serves the OpenAPI spec as one file at `/openapi.yaml`, with the files under
 * `api/schemas/`, `api/responses/` and `api/mocks/` inlined so the document
 * has no external `$ref`. The API catalog at
 * https://testomato.com/.well-known/api-catalog links here.
 */
export async function GET() {
  const spec = await bundle(new URL('api/testomato.yaml', root).href);

  return new Response(stringify(spec, {lineWidth: 0}), {
    headers: {'Content-Type': 'application/yaml; charset=utf-8'},
  });
}
