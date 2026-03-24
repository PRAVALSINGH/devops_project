# Stage 1: Build the React app
FROM node:20-alpine AS build

WORKDIR /app

# Pehle sirf package files copy karte hain taaki cache use ho sake
COPY package*.json ./
RUN npm install

# Ab baaki saara code copy karke build banate hain
COPY . .
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:stable-alpine

# React build ko Nginx ke default public folder mein copy karo
COPY --from=build /app/dist /usr/share/nginx/html

# Port 80 ko expose karo
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]