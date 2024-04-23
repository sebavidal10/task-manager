# Backend
FROM node:14 AS backend
WORKDIR /app/api
COPY gestion-tareas-api/package*.json ./
RUN npm install
COPY gestion-tareas-api .
EXPOSE 5000
CMD ["node", "index.js"]

# Frontend
FROM node:14 AS frontend
WORKDIR /app/front
COPY gestion-tareas-front/package*.json ./
RUN npm install
COPY gestion-tareas-front .
RUN npm run build

# Combinar backend y frontend
FROM nginx:alpine
COPY --from=frontend /app/front/build /usr/share/nginx/html
COPY --from=backend /app/api/index.js /usr/share/nginx/html/api
EXPOSE 80
