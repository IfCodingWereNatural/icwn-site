import { StackContext, StaticSite } from 'sst/constructs'

export function BlogStack({ stack }: StackContext) {
  const site = new StaticSite(stack, 'StaticBlogSite', {
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
