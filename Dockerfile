# Multi-stage build for Staya Booking Platform

# Frontend build stage
FROM node:18-alpine AS frontend-build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Backend build stage
FROM node:18-alpine AS backend-build
WORKDIR /app
COPY server/package*.json ./
RUN npm ci
COPY server/ .
RUN npm run build

# Production stage
FROM node:18-alpine
WORKDIR /app

# Copy backend
COPY --from=backend-build /app/dist ./dist
COPY --from=backend-build /app/node_modules ./node_modules
COPY --from=backend-build /app/package.json ./

# Copy frontend build
COPY --from=frontend-build /app/out ./public

EXPOSE 5000
CMD ["node", "dist/index.js"]
