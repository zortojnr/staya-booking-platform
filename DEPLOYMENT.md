# Staya Booking Platform - Deployment Guide

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- MongoDB (local or cloud)
- Docker (optional)

### Local Development

1. **Clone and Setup**
```bash
git clone <your-repo>
cd staya-project
```

2. **Frontend Setup**
```bash
npm install
npm run dev
# Runs on http://localhost:3000
```

3. **Backend Setup**
```bash
cd server
npm install
cp .env.example .env
# Edit .env with your configuration
npm run dev
# Runs on http://localhost:5000
```

### Environment Variables

Create `server/.env`:
```env
NODE_ENV=development
PORT=5000
FRONTEND_URL=http://localhost:3000
MONGODB_URI=mongodb://localhost:27017/staya-booking
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRE=30d
```

### Docker Deployment

1. **Build and Run**
```bash
docker-compose up --build
```

2. **Services**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- MongoDB: localhost:27017

### Production Deployment

#### Vercel (Frontend)
1. Connect your GitHub repo to Vercel
2. Set environment variables:
   - `NEXT_PUBLIC_API_URL=https://your-backend-url.com/api`
3. Deploy automatically on push

#### Railway/Render (Backend)
1. Connect your GitHub repo
2. Set environment variables from `.env.example`
3. Set build command: `cd server && npm run build`
4. Set start command: `cd server && npm start`

#### MongoDB Atlas (Database)
1. Create cluster at mongodb.com
2. Get connection string
3. Update `MONGODB_URI` in environment variables

### API Endpoints

#### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

#### Hotels
- `GET /api/hotels` - Get all hotels
- `GET /api/hotels/:id` - Get hotel by ID
- `POST /api/hotels` - Create hotel (Admin/Vendor)

#### Bookings
- `GET /api/bookings` - Get user bookings
- `POST /api/bookings` - Create booking

### Features Implemented

✅ **Frontend**
- Modern Next.js 14 with TypeScript
- Responsive design with Tailwind CSS
- Hotel search and filtering
- User authentication UI
- Booking interface
- Admin dashboard

✅ **Backend**
- Express.js API with TypeScript
- MongoDB with Mongoose
- JWT authentication
- Role-based access control
- Hotel management
- Booking system
- Error handling

✅ **Database Models**
- User (Customer/Admin/Vendor)
- Hotel with rooms
- Bookings (Hotel/Travel)
- Travel routes

### Next Steps for Production

1. **Payment Integration**
   - Add Paystack/Flutterwave
   - Implement payment webhooks

2. **Email/SMS Notifications**
   - Booking confirmations
   - Password reset

3. **File Uploads**
   - Hotel images via Cloudinary
   - User avatars

4. **Advanced Features**
   - Real-time availability
   - Reviews and ratings
   - Analytics dashboard

### Support

For deployment issues, check:
1. Environment variables are set correctly
2. Database connection is working
3. All dependencies are installed
4. Ports are not conflicting

The platform is now ready for deployment! 🎉
