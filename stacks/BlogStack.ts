import { StackContext, AstroSite } from 'sst/constructs'

export function BlogStack({ stack }: StackContext) {
  const blogSite = new AstroSite(stack, 'blog-site', {
    path: 'packages/blog',
    // customDomain: {
    //   domainName: 'ifcodingwerenatural.com',
    //   domainAlias: 'www.ifcodingwerenatural.com',
    // },
    nodejs: {
      loader: {
        '.node': 'file',
      },
    },
  })

  stack.addOutputs({
    URL: blogSite.url,
  })
}
