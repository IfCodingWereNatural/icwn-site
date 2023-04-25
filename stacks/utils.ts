import type { StackContext } from 'sst/constructs'

export const makeNameGenerator =
  (stack: StackContext['stack']) => (name: string) => {
    return stack.stage === 'prod' ? name : `${name}-${stack.stage}`
  }
