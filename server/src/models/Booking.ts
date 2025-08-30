import mongoose, { Document, Schema } from 'mongoose'

export interface IHotelBooking extends Document {
  userId: mongoose.Types.ObjectId
  hotelId: mongoose.Types.ObjectId
  roomId: mongoose.Types.ObjectId
  checkInDate: Date
  checkOutDate: Date
  guests: number
  totalAmount: number
  currency: string
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed'
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded'
  paymentId?: string
  guestDetails: {
    firstName: string
    lastName: string
    email: string
    phone: string
  }
  specialRequests?: string
  bookingReference: string
  createdAt: Date
  updatedAt: Date
}

export interface ITravelBooking extends Document {
  userId: mongoose.Types.ObjectId
  routeId: mongoose.Types.ObjectId
  travelDate: Date
  passengers: number
  seatNumbers: string[]
  totalAmount: number
  currency: string
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed'
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded'
  paymentId?: string
  passengerDetails: {
    firstName: string
    lastName: string
    email: string
    phone: string
  }[]
  bookingReference: string
  createdAt: Date
  updatedAt: Date
}

const hotelBookingSchema = new Schema<IHotelBooking>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User ID is required']
  },
  hotelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hotel',
    required: [true, 'Hotel ID is required']
  },
  roomId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'Room ID is required']
  },
  checkInDate: {
    type: Date,
    required: [true, 'Check-in date is required'],
    validate: {
      validator: function(this: IHotelBooking, value: Date) {
        return value >= new Date()
      },
      message: 'Check-in date must be in the future'
    }
  },
  checkOutDate: {
    type: Date,
    required: [true, 'Check-out date is required'],
    validate: {
      validator: function(this: IHotelBooking, value: Date) {
        return value > this.checkInDate
      },
      message: 'Check-out date must be after check-in date'
    }
  },
  guests: {
    type: Number,
    required: [true, 'Number of guests is required'],
    min: [1, 'At least 1 guest is required'],
    max: [10, 'Maximum 10 guests allowed']
  },
  totalAmount: {
    type: Number,
    required: [true, 'Total amount is required'],
    min: [0, 'Total amount cannot be negative']
  },
  currency: {
    type: String,
    default: 'NGN',
    enum: ['NGN', 'USD']
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled', 'completed'],
    default: 'pending'
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'failed', 'refunded'],
    default: 'pending'
  },
  paymentId: {
    type: String,
    sparse: true
  },
  guestDetails: {
    firstName: {
      type: String,
      required: [true, 'Guest first name is required'],
      trim: true
    },
    lastName: {
      type: String,
      required: [true, 'Guest last name is required'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Guest email is required'],
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Please add a valid email'
      ]
    },
    phone: {
      type: String,
      required: [true, 'Guest phone number is required'],
      match: [
        /^(\+234|0)[789][01]\d{8}$/,
        'Please add a valid Nigerian phone number'
      ]
    }
  },
  specialRequests: {
    type: String,
    maxlength: [500, 'Special requests cannot exceed 500 characters']
  },
  bookingReference: {
    type: String,
    unique: true,
    required: true
  }
}, {
  timestamps: true
})

const travelBookingSchema = new Schema<ITravelBooking>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User ID is required']
  },
  routeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BusRoute',
    required: [true, 'Route ID is required']
  },
  travelDate: {
    type: Date,
    required: [true, 'Travel date is required'],
    validate: {
      validator: function(value: Date) {
        return value >= new Date()
      },
      message: 'Travel date must be in the future'
    }
  },
  passengers: {
    type: Number,
    required: [true, 'Number of passengers is required'],
    min: [1, 'At least 1 passenger is required'],
    max: [10, 'Maximum 10 passengers allowed']
  },
  seatNumbers: [{
    type: String,
    required: true
  }],
  totalAmount: {
    type: Number,
    required: [true, 'Total amount is required'],
    min: [0, 'Total amount cannot be negative']
  },
  currency: {
    type: String,
    default: 'NGN',
    enum: ['NGN', 'USD']
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled', 'completed'],
    default: 'pending'
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'failed', 'refunded'],
    default: 'pending'
  },
  paymentId: {
    type: String,
    sparse: true
  },
  passengerDetails: [{
    firstName: {
      type: String,
      required: [true, 'Passenger first name is required'],
      trim: true
    },
    lastName: {
      type: String,
      required: [true, 'Passenger last name is required'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Passenger email is required'],
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Please add a valid email'
      ]
    },
    phone: {
      type: String,
      required: [true, 'Passenger phone number is required'],
      match: [
        /^(\+234|0)[789][01]\d{8}$/,
        'Please add a valid Nigerian phone number'
      ]
    }
  }],
  bookingReference: {
    type: String,
    unique: true,
    required: true
  }
}, {
  timestamps: true
})

// Generate booking reference before saving
hotelBookingSchema.pre('save', function(next) {
  if (!this.bookingReference) {
    this.bookingReference = `HTL-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
  }
  next()
})

travelBookingSchema.pre('save', function(next) {
  if (!this.bookingReference) {
    this.bookingReference = `TRV-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
  }
  next()
})

// Create indexes
hotelBookingSchema.index({ userId: 1, createdAt: -1 })
hotelBookingSchema.index({ hotelId: 1, checkInDate: 1, checkOutDate: 1 })
hotelBookingSchema.index({ bookingReference: 1 })
hotelBookingSchema.index({ status: 1, paymentStatus: 1 })

travelBookingSchema.index({ userId: 1, createdAt: -1 })
travelBookingSchema.index({ routeId: 1, travelDate: 1 })
travelBookingSchema.index({ bookingReference: 1 })
travelBookingSchema.index({ status: 1, paymentStatus: 1 })

export const HotelBooking = mongoose.model<IHotelBooking>('HotelBooking', hotelBookingSchema)
export const TravelBooking = mongoose.model<ITravelBooking>('TravelBooking', travelBookingSchema)