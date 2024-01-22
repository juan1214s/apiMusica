import express from "express";
import cors from "cors";
import { config } from "dotenv";
import rutaMusica from "./ruta/rutaMusica.mjs";

config();

const app = express();

app.set("port", process.env.port || 3001);
app.use(cors());
app.use(rutaMusica);

export default app;
