import  express from "express";
import {archivoMusica} from "../contoles/musicaControl.mjs"

const router = express();

router.get('/musica',archivoMusica);

export default router