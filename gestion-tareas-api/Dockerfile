# Usa una imagen de Node.js como base
FROM node:15

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia todo el contenido del directorio actual al directorio de trabajo
COPY . .

# Expone el puerto 5000
EXPOSE 5000

# Comando para ejecutar la aplicación
CMD ["nodemon", "index.js"]
