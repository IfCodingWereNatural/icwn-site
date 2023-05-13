declare global {
  declare namespace NodeJS {
    interface ProcessEnv {
      GUESS: string
    }
  }
}
