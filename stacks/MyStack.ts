import { StackContext, Api, Bucket, AstroSite } from 'sst/constructs'
import * as iam from 'aws-cdk-lib/aws-iam'
import { makeNameGenerator } from './utils'

export function API({ stack }: StackContext) {
  const generateName = makeNameGenerator(stack)
  const api = new Api(stack, 'api', {
    routes: {
      'GET /': 'packages/functions/src/lambda.handler',
    },
  })

  const bucket = new Bucket(stack, 'images', {
    cors: true,
  })

  const site = new AstroSite(stack, 'astro-site', {
    bind: [bucket],
    path: 'packages/astro',
  })

  const role = new iam.Role(stack, generateName('sst-tutorial'), {
    assumedBy: new iam.AccountPrincipal(stack.account),
    roleName: generateName('sst-tutorial'),
    managedPolicies: [
      iam.ManagedPolicy.fromAwsManagedPolicyName('PowerUserAccess'),
    ],
  })

  stack.addOutputs({
    ApiEndpoint: api.url,
    URL: site.url,
    SST_ROLE: role.roleName,
  })
}
