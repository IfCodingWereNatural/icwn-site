import { SSTConfig } from 'sst'
import { APIStack } from './stacks/MyStack'
import { BlogStack } from './stacks/BlogStack'
import { TutorialStack } from './stacks/TutorialStack'

export default {
  config({
    region = 'us-east-1',
    profile = 'personal',
    stage = 'dev',
    ...config
  }) {
    return {
      ...config,
      region,
      stage,
      profile,
      name: 'icwn',
    }
  },

  stacks(app) {
    app.stack(BlogStack)
    app.stack(APIStack).stack(TutorialStack)
  },
} satisfies SSTConfig
