# pull official base image
FROM node:18

# set work directory
WORKDIR /usr/src/app

# install dependencies
COPY package*.json ./
RUN npm i

# copy project files
COPY . .

# build
RUN nuxt build
