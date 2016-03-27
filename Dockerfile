# This image will be based on the official nodejs docker image
FROM node:latest

# Clone repository
RUN \
    git clone https://github.com/jmn8718/angular2-quickstart.git

# Set in what directory commands will run
WORKDIR /angular2-quickstart

# Install dependencies
RUN \
    npm install typescript typings express -g && \
    npm install

# Tell Docker we are going to use this port
EXPOSE 3000

# The command to run our app when the container is run
CMD ["npm", "start"]