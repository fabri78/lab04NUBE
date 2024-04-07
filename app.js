const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola mundo desde Express!'); 
});

app.get('/clientes', (req, res) => {
  const clientes = ['Fabricio', 'Oscar', 'Mauricio'];
  res.json(clientes);
});

app.get('/productos', (req, res) => {
  const productos = ['Vino', 'Cafe', 'Pizza'];
res.json(productos);
});

const PORT = 9000;
app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});