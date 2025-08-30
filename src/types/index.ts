// User Types
export interface User {
  id: string
  email: string
  phone: string
  firstName: string
  lastName: string
  role: 'customer' | 'admin' | 'vendor'
  avatar?: string
  isVerified: boolean
  createdAt: Date
  updatedAt: Date
}

export interface AuthState {
  user: User | null
  token: string | null
  isLoading: boolean
  isAuthenticated: boolean
}

// Hotel Types
export interface Hotel {
  id: string
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
  rooms: Room[]
  location: {
    latitude: number
    longitude: number
  }
  isActive: boolean
  vendorId?: string
  createdAt: Date
  updatedAt: Date
}

export interface Room {
  id: string
  hotelId: string
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

// Booking Types
export interface HotelBooking {
  id: string
  userId: string
  hotelId: string
  roomId: string
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
  createdAt: Date
  updatedAt: Date
}

// Travel Types
export interface BusRoute {
  id: string
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
  isActive: boolean
  vendorId?: string
  createdAt: Date
  updatedAt: Date
}

export interface TravelBooking {
  id: string
  userId: string
  routeId: string
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
  createdAt: Date
  updatedAt: Date
}

// Search Types
export interface HotelSearchParams {
  destination: string
  checkIn: Date
  checkOut: Date
  guests: number
  rooms: number
  priceRange?: [number, number]
  amenities?: string[]
  rating?: number
}

export interface TravelSearchParams {
  from: string
  to: string
  departureDate: Date
  passengers: number
  busType?: string
  priceRange?: [number, number]
}

// Payment Types
export interface PaymentIntent {
  id: string
  amount: number
  currency: string
  status: string
  clientSecret?: string
}

export interface PaymentMethod {
  id: string
  type: 'card' | 'bank_transfer' | 'mobile_money'
  last4?: string
  brand?: string
  isDefault: boolean
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean
  data: T
  message: string
  errors?: string[]
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Form Types
export interface LoginForm {
  email: string
  password: string
}

export interface RegisterForm {
  firstName: string
  lastName: string
  email: string
  phone: string
  password: string
  confirmPassword: string
}

export interface HotelBookingForm {
  checkInDate: Date
  checkOutDate: Date
  guests: number
  rooms: number
  guestDetails: {
    firstName: string
    lastName: string
    email: string
    phone: string
  }
  specialRequests?: string
}

export interface TravelBookingForm {
  travelDate: Date
  passengers: number
  passengerDetails: {
    firstName: string
    lastName: string
    email: string
    phone: string
  }[]
}