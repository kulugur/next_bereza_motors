import { NextApiRequest, NextApiResponse } from 'next'

export type NextApiRequestWithUserId = NextApiRequest & {
    userId: string
  }
  
  export type NextApiHandlerWithUserId = (
    req: NextApiRequestWithUserId,
    res: NextApiResponse
  ) => unknown | Promise<unknown>
  
  export type AuthGuardMiddleware = (
    handler: NextApiHandlerWithUserId
  ) => (req: NextApiRequestWithUserId, res: NextApiResponse) => void