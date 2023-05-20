import { ApiHandler } from 'sst/node/api'

const guess = +(process.env.GUESS as string)

const response = (payload: unknown) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }
}

export const handler = ApiHandler(async ({ body }) => {
  const parsed = typeof body === 'string' ? JSON.parse(body) : {}
  const message = parsed.guess === guess ? 'you are correct!' : 'you are wrong'
  return response({ message })
})
