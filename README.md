# Gestión de Tareas

Esta aplicación web de gestión de tareas permite a los usuarios manejar sus tareas diarias de manera eficiente y efectiva. El sistema está construido con un frontend en React.js y un backend en Node.js utilizando Express, con MongoDB como base de datos para la persistencia.

## Tabla de Contenidos

- [Gestión de Tareas](#gestión-de-tareas)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Arquitectura](#arquitectura)
  - [Instalación](#instalación)
    - [Pre-requisitos](#pre-requisitos)
    - [Pasos](#pasos)
  - [Ejecución](#ejecución)
  - [Características](#características)
  - [Tecnologías Utilizadas](#tecnologías-utilizadas)
  - [Uso](#uso)

## Arquitectura

La aplicación se compone de tres partes principales:

- **Frontend**: Una interfaz de usuario desarrollada con React.js y estilizada con Tailwind CSS. Es dinámica y responsive, facilitando la interacción del usuario.
- **Backend**: Un servidor API construido con Node.js y Express que gestiona todas las operaciones CRUD (crear, leer, actualizar, eliminar) y se comunica con la base de datos.
- **Base de Datos**: MongoDB se utiliza para almacenar y recuperar datos de las tareas, lo cual permite una gestión eficiente y escalable de los datos.

El sistema utiliza Docker y Docker Compose para la orquestación, facilitando el despliegue y la configuración de los diferentes servicios.

```plaintext
+--------------+     +---------------+     +------------------+
|              |     |               |     |                  |
|   Frontend   +---->+    Backend    +---->+   Base de Datos  |
|  (React.js)  |     | (Node/Express)|     |     (MongoDB)    |
|              |     |               |     |                  |
+-------+------+     +------+--------+     +---------+--------+
        ^                   ^                       |
        |                   |                       |
        +-------------------+-----------------------+
                         Docker Compose
```

## Instalación

### Pre-requisitos

- Docker y Docker Compose
- Node.js (para desarrollo local sin Docker)

### Pasos

1. Clona el repositorio:

```bash
  git clone https://github.com/tu-usuario/gestion-tareas.git
  cd gestion-tareas
```

2. Instala las dependencias del backend y el frontend:

```bash
  cd gestion-tareas-api
  npm install
  cd ../gestion-tareas-front
  npm install
```

3. Configura las variables de entorno en docker-compose.yml para ajustarlas a tus necesidades.

## Ejecución

Para iniciar todos los servicios, utiliza Docker Compose:

```bash
  docker-compose up --build
```

Visita http://localhost:3000 para acceder a la aplicación.

## Características

- Crear Tareas: Permite añadir nuevas tareas.
- Marcar Tareas como Completadas: Los usuarios pueden marcar tareas como completadas.
- Eliminar Tareas: Facilita la eliminación de tareas no deseadas.
- Persistencia de Datos: Gracias a MongoDB, la información persiste incluso después de reiniciar la aplicación.

## Tecnologías Utilizadas

- Frontend: React.js con Tailwind CSS.
- Backend: Node.js con Express.
- Base de Datos: MongoDB, gestionada con Mongoose.
- Contenedores: Docker y Docker Compose.

## Uso

Después de iniciar la aplicación, puedes usar la interfaz web para gestionar tareas. La interfaz permite crear, actualizar, marcar como completadas y eliminar tareas fácilmente.
