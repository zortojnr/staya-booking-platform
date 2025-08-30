import express from 'express'
import { Request, Response } from 'express'

const router = express.Router()

// @desc    Get all travel routes
// @route   GET /api/travel
// @access  Public
router.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Travel routes - Coming soon'
  })
})

export default router