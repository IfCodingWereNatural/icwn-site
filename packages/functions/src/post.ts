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
  console.log('guess:', guess)
  const parsed = typeof body === 'string' ? JSON.parse(body) : {}

  if (parsed.guess === guess) {
    return response({ message: 'you are correct!' })
  }

  return response({ message: 'you are wrong' })
})
