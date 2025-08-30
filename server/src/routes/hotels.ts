import express from 'express'
import { Request, Response } from 'express'
import { Hotel } from '../models/Hotel'
import { protect, authorize } from '../middleware/auth'

const router = express.Router()

// @desc    Get all hotels
// @route   GET /api/hotels
// @access  Public
router.get('/', async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1
    const limit = parseInt(req.query.limit as string) || 10
    const skip = (page - 1) * limit

    // Build query
    const query: any = { isActive: true }

    // Add filters
    if (req.query.city) {
      query.city = new RegExp(req.query.city as string, 'i')
    }

    if (req.query.state) {
      query.state = new RegExp(req.query.state as string, 'i')
    }

    if (req.query.minPrice || req.query.maxPrice) {
      query.pricePerNight = {}
      if (req.query.minPrice) {
        query.pricePerNight.$gte = parseInt(req.query.minPrice as string)
      }
      if (req.query.maxPrice) {
        query.pricePerNight.$lte = parseInt(req.query.maxPrice as string)
      }
    }

    if (req.query.rating) {
      query.rating = { $gte: parseFloat(req.query.rating as string) }
    }

    // Execute query
    const hotels = await Hotel.find(query)
      .skip(skip)
      .limit(limit)
      .sort({ rating: -1, createdAt: -1 })

    const total = await Hotel.countDocuments(query)

    res.status(200).json({
      success: true,
      count: hotels.length,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      },
      data: hotels
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to get hotels'
    })
  }
})

// @desc    Get single hotel
// @route   GET /api/hotels/:id
// @access  Public
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const hotel = await Hotel.findById(req.params.id)

    if (!hotel) {
      return res.status(404).json({
        success: false,
        error: 'Hotel not found'
      })
    }

    res.status(200).json({
      success: true,
      data: hotel
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to get hotel'
    })
  }
})

// @desc    Create new hotel
// @route   POST /api/hotels
// @access  Private (Admin/Vendor)
router.post('/', protect, authorize('admin', 'vendor'), async (req: any, res: Response) => {
  try {
    // Add user to req.body
    req.body.vendorId = req.user.id

    const hotel = await Hotel.create(req.body)

    res.status(201).json({
      success: true,
      data: hotel
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to create hotel'
    })
  }
})

// @desc    Update hotel
// @route   PUT /api/hotels/:id
// @access  Private (Admin/Vendor)
router.put('/:id', protect, authorize('admin', 'vendor'), async (req: any, res: Response) => {
  try {
    let hotel = await Hotel.findById(req.params.id)

    if (!hotel) {
      return res.status(404).json({
        success: false,
        error: 'Hotel not found'
      })
    }

    // Make sure user is hotel owner or admin
    if (hotel.vendorId?.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).json({
        success: false,
        error: 'Not authorized to update this hotel'
      })
    }

    hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })

    res.status(200).json({
      success: true,
      data: hotel
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to update hotel'
    })
  }
})

// @desc    Delete hotel
// @route   DELETE /api/hotels/:id
// @access  Private (Admin/Vendor)
router.delete('/:id', protect, authorize('admin', 'vendor'), async (req: any, res: Response) => {
  try {
    const hotel = await Hotel.findById(req.params.id)

    if (!hotel) {
      return res.status(404).json({
        success: false,
        error: 'Hotel not found'
      })
    }

    // Make sure user is hotel owner or admin
    if (hotel.vendorId?.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).json({
        success: false,
        error: 'Not authorized to delete this hotel'
      })
    }

    await hotel.deleteOne()

    res.status(200).json({
      success: true,
      data: {}
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to delete hotel'
    })
  }
})

export default router