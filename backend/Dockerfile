# Use Node.js LTS as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first for efficient caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the backend port
EXPOSE 8000

# Start the backend server and seed data
CMD ["sh", "-c", "npm run dev & sleep 5 && npm run seed"]
