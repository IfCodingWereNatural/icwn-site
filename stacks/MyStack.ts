import { StackContext, Api, Bucket, AstroSite } from 'sst/constructs'
import * as iam from 'aws-cdk-lib/aws-iam'

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

  const role = new iam.Role(stack, 'sst-tutorial', {
    assumedBy: new iam.AccountPrincipal(stack.account),
    roleName: 'sst-tutorial-role',
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
