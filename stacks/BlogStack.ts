import { StackContext, StaticSite } from 'sst/constructs'

export function BlogStack({ stack, app }: StackContext) {
  app.logicalPrefixedName('Blog')

  const site = new StaticSite(stack, 'StaticSite', {
    path: 'packages/blog',
    buildOutput: 'dist',
    buildCommand: 'pnpm run build',
    customDomain: {
      domainName: 'ifcodingwerenatural.com',
    },
  })

  stack.addOutputs({
    URL: site.url,
  })
}
