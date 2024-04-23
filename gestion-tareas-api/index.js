const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡Servidor de gestión de tareas en funcionamiento!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
