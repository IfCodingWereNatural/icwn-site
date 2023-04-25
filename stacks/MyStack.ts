import { StackContext, Api, Bucket, AstroSite } from 'sst/constructs'

export function APIStack({ stack }: StackContext) {
  const api = new Api(stack, 'api', {
    routes: {
      'GET /': 'packages/functions/src/lambda.handler',
    },
  })

  const bucket = new Bucket(stack, 'images', {
    cors: true,
  })

  const site = new AstroSite(stack, 'sst-tutorial-site', {
    bind: [bucket],
    path: 'packages/astro',
  })

  stack.addOutputs({
    ApiEndpoint: api.url,
    URL: site.url,
  })
}
