# Use Node.js LTS version as base image
FROM node:lts AS development

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install 

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on (default is 5173 for React)
EXPOSE 3000

# Command to start the development server
CMD ["node","src/index.js"]
