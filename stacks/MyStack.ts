import {
  StackContext,
  Api,
  Bucket,
  AstroSite,
  Cron,
  Topic,
} from 'sst/constructs'
import * as sns from 'aws-cdk-lib/aws-sns'

// declare module 'sst/constructs' {
//   // type TopicPermissions =
//   export type Permissions = '*' | Permission[]
// }

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
    customDomain: {
      domainName: 'anthrosuite.com',
      domainAlias: 'www.anthrosuite.com',
    },
  })

  const cron = new Cron(stack, 'MyTestCronJob', {
    schedule: 'rate(1 day)',
    job: 'packages/functions/src/lambda.handler',
  })

  const topic = new sns.Topic(stack, 'Topic')

  topic.grantPublish(cron.jobFunction)
  cron.attachPermissions([[topic, 'grantPublish']])

  stack.addOutputs({
    ApiEndpoint: api.url,
    URL: site.url,
  })
}
