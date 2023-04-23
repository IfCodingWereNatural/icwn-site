import { StackContext, AstroSite, StaticSite } from 'sst/constructs'

export function BlogStack({ stack }: StackContext) {
  // const blogSite = new AstroSite(stack, 'blog-site', {
  //   path: 'packages/blog',
  //   customDomain: {
  //     domainName: 'ifcodingwerenatural.com',
  //     domainAlias: 'www.ifcodingwerenatural.com',
  //   },
  //   nodejs: {
  //     loader: {
  //       '.node': 'file',
  //     },
  //   },
  // })

  const blogSite = new StaticSite(stack, 'StaticBlogSite', {
    path: 'packages/blog',
    buildOutput: 'dist',
    buildCommand: 'pnpm run build',
    customDomain: {
      domainName: 'ifcodingwerenatural.com',
    },
  })

  stack.addOutputs({
    URL: blogSite.url,
  })
}
