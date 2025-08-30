import mongoose, { Document, Schema } from 'mongoose'

export interface IBusRoute extends Document {
  operatorName: string
  operatorLogo?: string
  from: string
  to: string
  departureTime: string
  arrivalTime: string
  duration: string
  price: number
  currency: string
  busType: 'standard' | 'luxury' | 'vip'
  amenities: string[]
  totalSeats: number
  availableSeats: number
  seatLayout: {
    rows: number
    seatsPerRow: number
    seatMap: string[][]
  }
  isActive: boolean
  vendorId?: mongoose.Types.ObjectId
  createdAt: Date
  updatedAt: Date
}

const busRouteSchema = new Schema<IBusRoute>({
  operatorName: {
    type: String,
    required: [true, 'Please add operator name'],
    trim: true,
    maxlength: [100, 'Operator name cannot be more than 100 characters']
  },
  operatorLogo: {
    type: String,
    default: null
  },
  from: {
    type: String,
    required: [true, 'Please add departure location'],
    trim: true,
    maxlength: [100, 'Departure location cannot be more than 100 characters']
  },
  to: {
    type: String,
    required: [true, 'Please add destination location'],
    trim: true,
    maxlength: [100, 'Destination location cannot be more than 100 characters']
  },
  departureTime: {
    type: String,
    required: [true, 'Please add departure time'],
    match: [/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Please add a valid time format (HH:MM)']
  },
  arrivalTime: {
    type: String,
    required: [true, 'Please add arrival time'],
    match: [/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Please add a valid time format (HH:MM)']
  },
  duration: {
    type: String,
    required: [true, 'Please add journey duration'],
    match: [/^\d+h\s?\d*m?$/, 'Please add duration in format "2h 30m"']
  },
  price: {
    type: Number,
    required: [true, 'Please add ticket price'],
    min: [0, 'Price cannot be negative']
  },
  currency: {
    type: String,
    default: 'NGN',
    enum: ['NGN', 'USD']
  },
  busType: {
    type: String,
    required: [true, 'Please specify bus type'],
    enum: ['standard', 'luxury', 'vip']
  },
  amenities: [{
    type: String,
    trim: true
  }],
  totalSeats: {
    type: Number,
    required: [true, 'Please specify total number of seats'],
    min: [10, 'Bus must have at least 10 seats'],
    max: [60, 'Bus cannot have more than 60 seats']
  },
  availableSeats: {
    type: Number,
    required: [true, 'Please specify available seats'],
    min: [0, 'Available seats cannot be negative']
  },
  seatLayout: {
    rows: {
      type: Number,
      required: [true, 'Please specify number of rows'],
      min: [3, 'Bus must have at least 3 rows']
    },
    seatsPerRow: {
      type: Number,
      required: [true, 'Please specify seats per row'],
      min: [2, 'Each row must have at least 2 seats'],
      max: [5, 'Each row cannot have more than 5 seats']
    },
    seatMap: [[{
      type: String,
      enum: ['available', 'booked', 'blocked', 'aisle']
    }]]
  },
  isActive: {
    type: Boolean,
    default: true
  },
  vendorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
})

// Validate that available seats doesn't exceed total seats
busRouteSchema.pre('save', function(next) {
  if (this.availableSeats > this.totalSeats) {
    next(new Error('Available seats cannot exceed total seats'))
  }
  next()
})

// Create indexes for efficient queries
busRouteSchema.index({ from: 1, to: 1 })
busRouteSchema.index({ departureTime: 1 })
busRouteSchema.index({ price: 1 })
busRouteSchema.index({ busType: 1 })
busRouteSchema.index({ isActive: 1 })

export const BusRoute = mongoose.model<IBusRoute>('BusRoute', busRouteSchema)