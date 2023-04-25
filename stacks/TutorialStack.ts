import { BlockPublicAccess } from 'aws-cdk-lib/aws-s3'
import { StackContext, Bucket, AstroSite } from 'sst/constructs'

export function TutorialStack({ stack }: StackContext) {
  const bucket = new Bucket(stack, 'TutorialImagesBucket', {
    cors: true,
    cdk: {
      bucket: {
        blockPublicAccess: new BlockPublicAccess({
          blockPublicAcls: false,
          blockPublicPolicy: false,
          ignorePublicAcls: false,
          restrictPublicBuckets: false,
        }),
        publicReadAccess: true,
      },
    },
  })

  const site = new AstroSite(stack, 'TutorialFrontendSite', {
    bind: [bucket],
    path: 'packages/astro',
  })

  stack.addOutputs({
    URL: site.url,
  })
}
