# Stage 1: Build the Node.js application
FROM node:14 as build

WORKDIR /app

# Copy the application source code into the image
COPY . .

# Install dependencies and build the application
RUN npm install
RUN npm run build --prod

# Stage 2: Create the final image with Nginx
FROM nginx:alpine

# Copy the built files from the first stage to the Nginx image
COPY --from=build /app/dist/khaddemfront /usr/share/nginx/html

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
