import { defineConfig } from 'astro/config'
import aws from 'astro-sst/lambda'

import markdoc from '@astrojs/markdoc'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: aws(),
  integrations: [markdoc()],
})
