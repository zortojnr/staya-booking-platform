import express from 'express'
import { Request, Response } from 'express'

const router = express.Router()

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
router.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Users route - Coming soon'
  })
})

export default router