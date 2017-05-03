FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
# RUN git clone https://github.com/shanepeckham/CADContacts.git
RUN npm install

# Bundle app source
COPY . /usr/src/app
RUN cd CADContacts

EXPOSE 8000
CMD [ "npm", "start" ]
