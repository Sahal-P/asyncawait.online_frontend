FROM node:18-alpine

WORKDIR /frontend


# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies, including Vite
RUN npm install

# Copy the rest of your application files to the container
COPY . .

RUN npm run build