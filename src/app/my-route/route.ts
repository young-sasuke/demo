// src/app/my-route/route.ts
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const GET = async (_request: Request) => {
  const _payload = await getPayload({
    config: configPromise,
  })

  return Response.json({
    message: 'This is an example of a custom route.',
  })
}