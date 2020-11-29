FROM node
LABEL Project Manager
RUN mkdir -p /app
WORKDIR app
COPY ./ .
RUN npm install
EXPOSE 3000
ENTRYPOINT npm start