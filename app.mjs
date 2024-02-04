import express from "express";
import cors from "cors";
import { config } from "dotenv";
import rutaMusica from "./ruta/rutaMusica.mjs";

config();

const app = express();

// Middleware para manejar errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Error interno del servidor');
  });
  
app.set("port", process.env.port || 3001);
app.use(cors());
app.use(rutaMusica);

export default app;
