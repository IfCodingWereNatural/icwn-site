import { StackContext, Api, Bucket, AstroSite, Cron } from 'sst/constructs'
import * as sns from 'aws-cdk-lib/aws-sns'

export function API({ stack }: StackContext) {
  const api = new Api(stack, 'api', {
    routes: {
      'GET /': 'packages/functions/src/lambda.handler',
    },
  })

  const bucket = new Bucket(stack, 'bucket', {
    cors: true,
  })

  // const blogSite = new AstroSite(stack, 'blog-site', {
  //   bind: [bucket],
  //   path: 'packages/blog',
  //   customDomain: {
  //     domainName: 'ifcodingwerenatural.com',
  //     domainAlias: 'www.ifcodingwerenatural.com',
  //   },
  // })

  const cron = new Cron(stack, 'MyTestCronJob', {
    schedule: 'rate(1 day)',
    job: 'packages/functions/src/lambda.handler',
  })

  const topic = new sns.Topic(stack, 'Topic')

  topic.grantPublish(cron.jobFunction)
  cron.attachPermissions([[topic, 'grantPublish']])

  stack.addOutputs({
    ApiEndpoint: api.url,
    // BLOG_URL: blogSite.url,
  })
}
