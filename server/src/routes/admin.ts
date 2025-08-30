import express from 'express'
import { Request, Response } from 'express'

const router = express.Router()

// @desc    Admin dashboard
// @route   GET /api/admin
// @access  Private/Admin
router.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Admin dashboard - Coming soon'
  })
})

export default router