FROM node:16-slim

# Installing libvips-dev for sharp compatability
RUN apt-get update && apt-get install libvips-dev -y

# Set node env variale with develop as default
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /src

# Copy file to install node es
COPY ./package.json ./yarn.lock .

# Add node modules binaries to PATH to access
# them from within the /src/app folder
ENV PATH /src/node_modules/.bin:$PATH

# Install dependencies
RUN yarn install

# Move to the app folder
WORKDIR /src/app

# Copy source folder
COPY . .

# Build Strapi admin panel
RUN yarn build

# Expose Strapi port
EXPOSE 1337

# Run Strapi with autoreload
CMD ["yarn", "develop"]

