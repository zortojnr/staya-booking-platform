import express from 'express'
import { Request, Response } from 'express'

const router = express.Router()

// @desc    Get all bookings
// @route   GET /api/bookings
// @access  Private
router.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Bookings route - Coming soon'
  })
})

export default router