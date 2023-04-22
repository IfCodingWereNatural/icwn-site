import { SSTConfig } from 'sst'
import { API } from './stacks/MyStack'

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
      name: 'sst-tutorial',
    }
  },

  stacks(app) {
    app.stack(API)
  },
} satisfies SSTConfig
