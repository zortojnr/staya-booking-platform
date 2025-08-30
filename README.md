# 🏨 Staya Booking Platform

A modern, full-stack hotel and travel booking platform built with Next.js, Node.js, and MongoDB.

## ✨ Features

- 🏨 **Hotel Management** - Browse, search, and book hotels
- 🚌 **Travel Booking** - Bus route reservations with seat selection
- 👤 **User Authentication** - Secure registration and login
- 🔐 **Role-Based Access** - Customer, Vendor, and Admin roles
- 📱 **Responsive Design** - Works on all devices
- 💳 **Payment Ready** - Integrated payment gateway support
- 📊 **Admin Dashboard** - Comprehensive management interface

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/staya-booking-platform.git
cd staya-booking-platform
```

2. **Install frontend dependencies**
```bash
npm install
```

3. **Install backend dependencies**
```bash
cd server
npm install
```

4. **Environment Setup**
```bash
# Copy environment template
cp server/.env.example server/.env
# Edit server/.env with your configuration
```

5. **Start Development Servers**

Frontend:
```bash
npm run dev
# Runs on http://localhost:3000
```

Backend:
```bash
cd server
npm run dev
# Runs on http://localhost:5000
```

## 🐳 Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose up --build

# Services will be available at:
# Frontend: http://localhost:3000
# Backend: http://localhost:5000
# MongoDB: localhost:27017
```

## 🌐 Production Deployment

### Vercel (Frontend)
1. Connect your GitHub repo to Vercel
2. Set environment variables
3. Deploy automatically

### Railway/Render (Backend)
1. Connect your GitHub repo
2. Set environment variables
3. Deploy with one click

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## 📁 Project Structure

```
staya-booking-platform/
├── src/                    # Frontend (Next.js)
│   ├── app/               # App router pages
│   ├── components/        # React components
│   └── types/            # TypeScript types
├── server/                # Backend (Express API)
│   ├── src/
│   │   ├── models/       # Database models
│   │   ├── routes/       # API routes
│   │   ├── middleware/   # Express middleware
│   │   └── config/       # Configuration files
├── Dockerfile            # Production build
├── docker-compose.yml    # Container orchestration
└── DEPLOYMENT.md         # Deployment guide
```

## 🛠️ Tech Stack

**Frontend:**
- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- React Query
- Lucide Icons

**Backend:**
- Node.js with Express
- TypeScript
- MongoDB with Mongoose
- JWT Authentication
- Helmet & CORS security

**DevOps:**
- Docker & Docker Compose
- GitHub Actions ready
- Environment-based configuration

## 📚 API Documentation

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

### Hotels
- `GET /api/hotels` - Get all hotels
- `GET /api/hotels/:id` - Get hotel details
- `POST /api/hotels` - Create hotel (Admin/Vendor)

### Bookings
- `GET /api/bookings` - Get user bookings
- `POST /api/bookings` - Create new booking

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with modern web technologies
- Designed for scalability and performance
- Ready for production deployment

---

**Made with ❤️ for the travel and hospitality industry**
