// Configuración
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const api = express();
const PORT = process.env.PORT || 3000;

// Conexión a Base de Datos
mongoose.connect('mongodb://cristian:abc123def@cintanegra-shard-00-00-aw02w.mongodb.net:27017,cintanegra-shard-00-01-aw02w.mongodb.net:27017,cintanegra-shard-00-02-aw02w.mongodb.net:27017/test?ssl=true&replicaSet=CintaNegra-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => { console.log('database connected!') })
    .catch(() => { console.log('error trying to connect to database'); })

// Endpoints
api.get('/', (req, res) => res.status(200).json({ message: "it's alive!!"}));


// Create
api.post('/api/animales', (req, res) => {
    // Recibir el animal que se quiere crear desde el cliente
    // Pedirle a la base de datos que guarde el nuevo animal
    // Con la respuesta que recibimos de la base de datos le respondemos al cliente
    const animal = { id: 'A1', nombre: 'Rosco', edad: 4};
    res.status(201).json({ animal });
});
// Read

// Update

// Delete

// Encender el server
api.listen(PORT, () => console.log(`listening on ${PORT}`));
