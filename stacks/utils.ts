import type { StackContext } from 'sst/constructs'

export const makeNameGenerator =
  (stack: StackContext['stack']) => (name: string) => {
    return `${name}-${stack.stage}`
  }
