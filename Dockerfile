# Use the official Node.js 14 image as the base image
FROM node:14

# Set the working directory within the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the built application files from the "dist" directory into the container
COPY dist/ ./

# Expose the port on which the Angular app will run
EXPOSE 4200

# Start the Angular application when the container starts
CMD [ "npm", "start" ]
