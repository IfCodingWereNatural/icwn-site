import { SSTConfig } from 'sst'
import { API } from './stacks/MyStack'

export default {
  config(_input) {
    return {
      name: 'sst-tutorial',
      region: 'us-east-1',
      stage: 'dev',
      profile: 'personal',
    }
  },

  stacks(app) {
    app.stack(API)
  },
} satisfies SSTConfig
