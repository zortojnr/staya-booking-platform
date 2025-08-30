import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { User } from '../models/User'

interface AuthRequest extends Request {
  user?: any
}

interface JwtPayload {
  id: string
  role: string
}

export const protect = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    let token: string | undefined

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1]
    }

    if (!token) {
      res.status(401).json({
        success: false,
        error: 'Not authorized to access this route'
      })
      return
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret') as JwtPayload
      req.user = await User.findById(decoded.id)

      if (!req.user) {
        res.status(401).json({
          success: false,
          error: 'User not found'
        })
        return
      }

      next()
    } catch (error) {
      res.status(401).json({
        success: false,
        error: 'Not authorized to access this route'
      })
      return
    }
  } catch (error) {
    next(error)
  }
}

export const authorize = (...roles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction): void => {
    if (!req.user) {
      res.status(401).json({
        success: false,
        error: 'User not authenticated'
      })
      return
    }

    if (!roles.includes(req.user.role)) {
      res.status(403).json({
        success: false,
        error: `User role ${req.user.role} is not authorized to access this route`
      })
      return
    }

    next()
  }
}