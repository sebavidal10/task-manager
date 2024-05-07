# Gestion de Tareas

Esta es una aplicación web de gestión de tareas que consta de un frontend construido con React.js y un backend construido con Node.js y Express. Utiliza MongoDB como base de datos.

## Contenido

- [Gestion de Tareas](#gestion-de-tareas)
  - [Contenido](#contenido)
  - [Instalación](#instalación)
  - [Ejecución](#ejecución)
  - [Características](#características)
  - [Tecnologías Utilizadas](#tecnologías-utilizadas)
  - [Uso](#uso)

## Instalación

Para ejecutar la aplicación en tu entorno local, sigue estos pasos:

1. Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/gestion-tareas.git
```

2. Instalación y configuración

Accede al directorio del proyecto:

```bash
cd gestion-tareas
```

Instala las dependencias del backend y el frontend:

```bash
cd gestion-tareas-api
npm install

cd ../gestion-tareas-front
npm install
```

3. Configuración

Antes de iniciar la aplicación, asegúrate de configurar las variables de entorno necesarias dentro del archivo `docker-compose.yml` para asegurarte de que se ajusten a tus necesidades (puertos, urls, etc).

## Ejecución

Inicia la aplicación con Docker Compose:

```bash
cd ../
docker-compose up --build
```

Esto iniciará los contenedores de Docker para el backend y el frontend, y podrás acceder a la aplicación en http://localhost:3000.

## Características

- **Crear Tareas**: Agrega tareas a tu lista con descripciones.
- **Marcar Tareas Como Completadas**: Marca tareas individuales como completadas para llevar un seguimiento de tu progreso.
- **Eliminar Tareas**: Elimina tareas que ya no son necesarias.
- **Persistencia de Datos**: Los datos de las tareas se almacenan en MongoDB, lo que asegura que no perderás tus datos después de reiniciar la aplicación.

## Tecnologías Utilizadas

- **Frontend**: React.js con Tailwind CSS para estilos.
- **Backend**: Node.js con Express.
- **Base de Datos**: MongoDB, gestionada con Mongoose.
- **Contenedores**: Docker y Docker Compose para la orquestación de los servicios.

## Uso

Una vez que la aplicación esté en funcionamiento, podrás utilizarla para gestionar tus tareas. Puedes agregar nuevas tareas, marcarlas como completadas y eliminarlas según sea necesario.
