FROM node:16-slim

WORKDIR /src

# Copy file to install node modules
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

# Build Next.js
#RUN yarn build

# Expose Next.js port
EXPOSE 1337

# Run Next.sj with autoreload
CMD ["yarn", "dev"]
