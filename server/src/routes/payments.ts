import express from 'express'
import { Request, Response } from 'express'

const router = express.Router()

// @desc    Process payment
// @route   POST /api/payments
// @access  Private
router.post('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Payment processing - Coming soon'
  })
})

export default router