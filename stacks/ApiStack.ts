import { Api, StackContext, StaticSite } from 'sst/constructs'

export function ApiStack({ stack }: StackContext) {
  const api = new Api(stack, 'api', {
    defaults: {
      function: {
        environment: {
          GUESS: '123',
        },
      },
    },
    routes: {
      'GET /': 'packages/functions/src/lambda.handler',
      'POST /test': 'packages/functions/src/post.handler',
    },
  })

  stack.addOutputs({
    URL: api.url,
  })
}
