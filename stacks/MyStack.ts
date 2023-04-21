import { StackContext, Api, Bucket, AstroSite } from 'sst/constructs'

export function API({ stack }: StackContext) {
  const api = new Api(stack, 'api', {
    routes: {
      'GET /': 'packages/functions/src/lambda.handler',
    },
  })

  const bucket = new Bucket(stack, 'bucket', {
    cors: true,
  })

  const site = new AstroSite(stack, 'astro-site', {
    bind: [bucket],
    path: 'packages/astro',
  })

  stack.addOutputs({
    ApiEndpoint: api.url,
    URL: site.url,
  })
}
