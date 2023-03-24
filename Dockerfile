# We get node as base image
FROM node:latest

# We create a directory for our app
RUN mkdir -p /usr/src/app

# We set the working directory
WORKDIR /usr/src/app

# We copy the package.json file
COPY package.json /usr/src/app

# We install the dependencies
RUN npm install

# We copy the rest of the files
COPY . /usr/src/app

# We expose the port
EXPOSE ${PORT}

# We run the app
CMD ["npm", "run", "start"]