import { StackContext, Bucket, AstroSite } from 'sst/constructs'

export function TutorialStack({ stack }: StackContext) {
  const bucket = new Bucket(stack, 'TutorialImagesBucket', {
    cors: true,
  })

  const site = new AstroSite(stack, 'TutorialFrontendSite', {
    bind: [bucket],
    path: 'packages/astro',
  })

  stack.addOutputs({
    URL: site.url,
  })
}
