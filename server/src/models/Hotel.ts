import mongoose, { Document, Schema } from 'mongoose'

export interface IRoom extends Document {
  name: string
  description: string
  type: 'single' | 'double' | 'suite' | 'family'
  capacity: number
  pricePerNight: number
  images: string[]
  amenities: string[]
  isAvailable: boolean
  totalRooms: number
  availableRooms: number
}

export interface IHotel extends Document {
  name: string
  description: string
  address: string
  city: string
  state: string
  country: string
  images: string[]
  amenities: string[]
  rating: number
  reviewCount: number
  pricePerNight: number
  currency: string
  rooms: IRoom[]
  location: {
    latitude: number
    longitude: number
  }
  isActive: boolean
  vendorId?: mongoose.Types.ObjectId
  createdAt: Date
  updatedAt: Date
}

const roomSchema = new Schema<IRoom>({
  name: {
    type: String,
    required: [true, 'Please add a room name'],
    trim: true,
    maxlength: [100, 'Room name cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Please add a room description'],
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  type: {
    type: String,
    required: [true, 'Please specify room type'],
    enum: ['single', 'double', 'suite', 'family']
  },
  capacity: {
    type: Number,
    required: [true, 'Please specify room capacity'],
    min: [1, 'Capacity must be at least 1'],
    max: [10, 'Capacity cannot exceed 10']
  },
  pricePerNight: {
    type: Number,
    required: [true, 'Please add price per night'],
    min: [0, 'Price cannot be negative']
  },
  images: [{
    type: String,
    required: true
  }],
  amenities: [{
    type: String,
    trim: true
  }],
  isAvailable: {
    type: Boolean,
    default: true
  },
  totalRooms: {
    type: Number,
    required: [true, 'Please specify total number of rooms'],
    min: [1, 'Total rooms must be at least 1']
  },
  availableRooms: {
    type: Number,
    required: [true, 'Please specify available rooms'],
    min: [0, 'Available rooms cannot be negative']
  }
})

const hotelSchema = new Schema<IHotel>({
  name: {
    type: String,
    required: [true, 'Please add a hotel name'],
    trim: true,
    maxlength: [100, 'Hotel name cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [1000, 'Description cannot be more than 1000 characters']
  },
  address: {
    type: String,
    required: [true, 'Please add an address'],
    maxlength: [200, 'Address cannot be more than 200 characters']
  },
  city: {
    type: String,
    required: [true, 'Please add a city'],
    trim: true,
    maxlength: [50, 'City cannot be more than 50 characters']
  },
  state: {
    type: String,
    required: [true, 'Please add a state'],
    default: 'Taraba State',
    trim: true
  },
  country: {
    type: String,
    required: [true, 'Please add a country'],
    default: 'Nigeria',
    trim: true
  },
  images: [{
    type: String,
    required: true
  }],
  amenities: [{
    type: String,
    trim: true
  }],
  rating: {
    type: Number,
    min: [1, 'Rating must be at least 1'],
    max: [5, 'Rating cannot exceed 5'],
    default: 4.0
  },
  reviewCount: {
    type: Number,
    default: 0,
    min: [0, 'Review count cannot be negative']
  },
  pricePerNight: {
    type: Number,
    required: [true, 'Please add starting price per night'],
    min: [0, 'Price cannot be negative']
  },
  currency: {
    type: String,
    default: 'NGN',
    enum: ['NGN', 'USD']
  },
  rooms: [roomSchema],
  location: {
    latitude: {
      type: Number,
      required: [true, 'Please add latitude'],
      min: [-90, 'Latitude must be between -90 and 90'],
      max: [90, 'Latitude must be between -90 and 90']
    },
    longitude: {
      type: Number,
      required: [true, 'Please add longitude'],
      min: [-180, 'Longitude must be between -180 and 180'],
      max: [180, 'Longitude must be between -180 and 180']
    }
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

// Create index for location-based searches
hotelSchema.index({ 'location.latitude': 1, 'location.longitude': 1 })
hotelSchema.index({ city: 1, state: 1 })
hotelSchema.index({ pricePerNight: 1 })
hotelSchema.index({ rating: -1 })

export const Hotel = mongoose.model<IHotel>('Hotel', hotelSchema)