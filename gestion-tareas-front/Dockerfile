# Utiliza la imagen oficial de Node.js como base
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Instala las dependencias
# Copia el package.json y el package-lock.json
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Expone el puerto 3000
EXPOSE 3000

# Comando para ejecutar la aplicación React
CMD ["npm", "start"]
