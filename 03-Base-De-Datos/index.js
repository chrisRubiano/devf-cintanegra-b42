// Configuración
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const api = express();
const PORT = process.env.PORT || 3000;

// Conexión a Base de Datos
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => { console.log('database connected!') })
    .catch(() => { console.log('error trying to connect to database'); })

// Generar un esquema -> definición de las reglas de una colección
const flightsSchema = new mongoose.Schema({
    airline: {
        type: String,
        required: true,
    },
    aircraft_name: {
        type: String,
        required: true,
    },
    aircraft_model: Number,
    flight_from: {
        type:String,
        required: true,
    }
});

// Generar un modelo a partir del esquema

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
