FROM node:16

# Installing libvips-dev for sharp compatability
RUN apt-get update && apt-get install libvips-dev -y

# Set node env variale with develop as default
#ARG NODE_ENV=development
#ENV NODE_ENV=${NODE_ENV}

WORKDIR /srv

# Copy file to install node modules
COPY ./package.json ./yarn.lock ./

# Add node modules binaries to PATH to access
# them from within the /srv/app folder
ENV PATH /srv/node_modules/.bin:$PATH

# Install dependencies
RUN yarn install

# Move to the app folder
WORKDIR /srv/app

# Copy everithing (except for .dockerignore files, like node_modules)
COPY . .

# Build Strapi admin panel
RUN yarn build

# Expose Strapi port
EXPOSE 1337

# Run Strapi with autoreload
CMD ["yarn", "develop"]

