# Keystatic Cloud setup

The local content model and editor schema are ready in `keystatic.config.ts`. The production site is still static-only until a Keystatic Cloud project exists.

## Local editor

```sh
nvm use
npm ci
npm run dev:cms
```

Open `http://localhost:4321/keystatic`. Local mode writes directly to this checkout, so review the YAML and image changes with Git before committing them.

## Connect a Keystatic Cloud project

After creating the Cloud project and connecting its repository, add its project identifier to the local and Cloudflare environments:

```sh
PUBLIC_KEYSTATIC_CLOUD_PROJECT=your-keystatic-project
KEYSTATIC_ENABLED=true
```

The configuration switches from local storage to `storage: { kind: 'cloud' }` automatically when the project identifier is present. The `PUBLIC_` prefix is required because Keystatic loads this configuration in the browser; the project identifier is not a secret. Do not put credentials or API secrets in content files or commit them to the repository.

Keystatic's Astro integration provides the authenticated `/keystatic` interface and `/api/keystatic/*` endpoint. Those endpoints cannot be output as static files, so the production connection requires the Astro Cloudflare adapter and hybrid/server output. Keep all public pages prerendered; only those Keystatic routes need runtime handling. This is the one justified exception to the static deployment, and it does not add a database, user accounts for volunteers, or application APIs.

When the project ID is available, the next implementation step is to add the Cloudflare adapter, enable the integration in `astro.config.mjs`, configure the two environment variables in Cloudflare Pages, and verify Cloud login plus a content save on a preview deployment.
